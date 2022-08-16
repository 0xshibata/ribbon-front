import { useMemo, useState } from "react";
import { BigNumber, ethers } from "ethers";
import { useWeb3Wallet } from "shared/lib/hooks/useWeb3Wallet";
import styled, { keyframes } from "styled-components";
import { Redirect } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import { Title } from "shared/lib/designSystem";
import colors from "shared/lib/designSystem/colors";
import { AnimatePresence, motion } from "framer-motion";
import { useV2VaultData, useVaultData } from "shared/lib/hooks/web3DataContext";
import { formatBigNumber, isPracticallyZero } from "shared/lib/utils/math";
// import sizes from "shared/lib/designSystem/sizes";
import usePullUp from "../../hooks/usePullUp";
import { VaultList, VaultOptions } from "shared/lib/constants/constants";
import { Subtitle } from "shared/lib/designSystem";
import useVaultOption from "../../hooks/useVaultOption";
import { getVaultColor } from "shared/lib/utils/vault";
import { getAssetLogo, getChainByVaultOption } from "shared/lib/utils/asset";
// import { Container } from "react-bootstrap";
// import theme from "shared/lib/designSystem/theme";
import useRedirectOnSwitchChain from "../../hooks/useRedirectOnSwitchChain";
import useRedirectOnWrongChain from "../../hooks/useRedirectOnWrongChain";
import EarnStrategyExplainer from "../../components/Earn/EarnStrategyExplainer";
import { useGlobalState } from "shared/lib/store/store";
import useVaultAccounts from "shared/lib/hooks/useVaultAccounts";
import { ActionButton } from "shared/lib/components/Common/buttons";
import useConnectWalletModal from "shared/lib/hooks/useConnectWalletModal";
import EarnDetailsModal from "../../components/Earn/Modal/EarnDetailsModal";
import {
  EarnInnerRing,
  EarnMiddleRing,
  EarnOuterRing,
} from "shared/lib/assets/icons/icons";
import sizes from "shared/lib/designSystem/sizes";
const { formatUnits } = ethers.utils;

const rotateClockwise = keyframes`
  from{
      transform: rotate(0deg);
  }
  to{
      transform: rotate(360deg);
  }
`;

const rotateAnticlockwise = keyframes`
  from{
      transform: rotate(360deg);
  }
  to{
      transform: rotate(0deg);
  }
`;

const ProductAssetLogoContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  background-color: ${colors.background.one};
  border-radius: 50%;
  position: relative;
  box-shadow: 0px 0px 0px 2px ${colors.background.two};
`;

const CirclesContainer = styled.div<{ offset: number }>`
  position: absolute;
  width: 100%;
  height: calc(100% - ${({ offset }) => offset}px);
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

const StyledEarnInnerRing = styled(EarnInnerRing)`
  animation: ${rotateClockwise} 60s linear infinite;
  position: absolute;
  height: 100%;
`;

const StyledEarnMiddleRing = styled(EarnMiddleRing)`
  animation: ${rotateAnticlockwise} 60s linear infinite;
  position: absolute;
  height: 100%;
`;

const StyledEarnOuterRing = styled(EarnOuterRing)`
  animation: ${rotateClockwise} 60s linear infinite;
  position: absolute;

  @media (max-width: ${sizes.md}px) {
    height: 100%;
  }
`;

const BalanceTitle = styled.div`
  font-size: 14px;
  font-family: VCR;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1px;
  color: ${colors.primaryText}7A;
`;

const VaultContainer = styled.div<{ offset: number }>`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  height: calc(100vh - ${({ offset }) => offset}px);
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 240px;
`;

const HeroText = styled(Title)`
  font-size: 56px;
  line-height: 64px;
  margin-bottom: 16px;
`;

const ViewDetailsButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 136px;
  height: 40px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 100px;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  border-radius: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 24px;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  gap: 8px;
  line-height: 20px;
  font-size: 12px;
  z-index: 1;
`;

const StyledActionButton = styled(ActionButton)`
  font-size: 14px;
  z-index: 1;
  letter-spacing: 1px;
`;
const EarnPage = () => {
  const { vaultOption, vaultVersion } = useVaultOption();
  const { active, account, chainId } = useWeb3Wallet();

  useRedirectOnWrongChain(vaultOption, chainId);
  usePullUp();
  let color;
  if (vaultOption) {
    color = getVaultColor(vaultOption);
  }
  const [showVault] = useGlobalState("showEarnVault");
  const [, setShowConnectModal] = useConnectWalletModal();
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [componentRefs] = useGlobalState("componentRefs");

  // const { status, deposits, vaultLimit } = useVaultData(
  //   vaultOption || VaultList[0]
  // );

  // const {
  //   data: { asset, cap, decimals, totalBalance },
  //   loading,
  // } = useV2VaultData(vaultOption || VaultList[0]);
  const { status } = useVaultData(vaultOption || VaultList[0]);

  const {
    data: { decimals },
    loading,
  } = useV2VaultData(vaultOption || VaultList[0]);
  const isLoading = status === "loading" || loading;
  useRedirectOnSwitchChain(getChainByVaultOption(vaultOption as VaultOptions));
  // const isLoading = status === "loading" || loading;
  // const [totalDepositStr, depositLimitStr] = useMemo(() => {
  //   switch (vaultVersion) {
  //     case "v1":
  //       return [
  //         parseFloat(
  //           formatSignificantDecimals(formatUnits(deposits, decimals), 2)
  //         ),
  //         parseFloat(
  //           formatSignificantDecimals(formatUnits(vaultLimit, decimals))
  //         ),
  //       ];
  //     case "earn":
  //     case "v2":
  //       return [
  //         parseFloat(
  //           formatSignificantDecimals(formatUnits(totalBalance, decimals), 2)
  //         ),
  //         parseFloat(formatSignificantDecimals(formatUnits(cap, decimals))),
  //       ];
  //   }
  // }, [cap, decimals, deposits, totalBalance, vaultLimit, vaultVersion]);

  const { vaultAccounts } = useVaultAccounts(vaultVersion);

  const vaultAccount = vaultAccounts["rEARN"];

  const Logo = getAssetLogo("USDC");

  let logo = <Logo height="100%" />;

  const [investedInStrategy] = useMemo(() => {
    switch (vaultVersion) {
      case "v1":
      case "v2":
      case "earn":
        if (!vaultAccount) {
          return [BigNumber.from(0.0)];
        }
        return [
          vaultAccount.totalBalance.sub(vaultAccount.totalPendingDeposit),
        ];
    }
  }, [vaultAccount, vaultVersion]);
  const [roi, yieldColor] = useMemo(() => {
    const vaultAccount = vaultAccounts["rEARN"];
    if (
      !vaultAccount ||
      isPracticallyZero(vaultAccount.totalDeposits, decimals)
    ) {
      return [0.0, colors.green];
    }

    const roiTemp =
      (parseFloat(
        formatUnits(
          vaultAccount.totalBalance.sub(vaultAccount.totalDeposits),
          decimals
        )
      ) /
        parseFloat(formatUnits(vaultAccount.totalDeposits, decimals))) *
      100;

    const roiColor = roiTemp >= 0 ? colors.green : colors.red;
    return [
      (parseFloat(
        formatUnits(
          vaultAccount.totalBalance.sub(vaultAccount.totalDeposits),
          decimals
        )
      ) /
        parseFloat(formatUnits(vaultAccount.totalDeposits, decimals))) *
      100,
      roiColor,
    ];
  }, [vaultAccounts, decimals]);

  const pageOffset = useMemo(() => {
    return (componentRefs.header?.offsetHeight || 0) + (componentRefs.footer?.offsetHeight || 0)
  }, [componentRefs.header, componentRefs.footer]);

  /**
   * Redirect to homepage if no clear vault is chosen
   */
  if (!vaultOption) {
    return <Redirect to="/" />;
  }


  return (
    <>
      <CirclesContainer offset={pageOffset}>
        <StyledEarnOuterRing />
        <StyledEarnMiddleRing />
        <StyledEarnInnerRing />
      </CirclesContainer>
      <VaultContainer offset={pageOffset}>
        {showVault.show ? (
          <AnimatePresence exitBeforeEnter initial={true}>
            <motion.div
              key={"showVault"}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
                type: "keyframes",
                ease: "easeInOut",
              }}
            >
              <MainContainer>
                <ProductAssetLogoContainer className={`mb-2`} color={"blue"}>
                  {logo}
                </ProductAssetLogoContainer>
                <BalanceTitle className={`py-3`}>Your Balance</BalanceTitle>
                <HeroText>
                  {!vaultAccount && isLoading
                    ? "---"
                    : formatBigNumber(investedInStrategy, decimals)}
                </HeroText>
                <Subtitle color={yieldColor}>+{roi}%</Subtitle>
                <ViewDetailsButton
                  role="button"
                  onClick={() => {
                    setShowDetailsModal(true);
                  }}
                >
                  View Details
                </ViewDetailsButton>
                {active && account ? (
                  <>
                    <StyledActionButton
                      className={`mt-5 py-3 mb-0 w-100`}
                      color={color}
                    >
                      Deposit
                    </StyledActionButton>
                    <StyledActionButton
                      className={`py-3 mb-1 w-100`}
                      variant={"secondary"}
                      color={"none"}
                    >
                      Withdraw
                    </StyledActionButton>
                  </>
                ) : (
                  <StyledActionButton
                    className={`mt-5 py-3 w-100`}
                    color={color}
                    onClick={() => setShowConnectModal(true)}
                  >
                    Connect Wallet
                  </StyledActionButton>
                )}
              </MainContainer>
            </motion.div>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter initial={true}>
            <motion.div
              key={"showIntro"}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
                type: "keyframes",
                ease: "easeInOut",
              }}
            >
              <EarnStrategyExplainer />
            </motion.div>
          </AnimatePresence>
        )}
      </VaultContainer>
      <EarnDetailsModal
        show={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        vaultOption={vaultOption}
      />
    </>
  );
};

export default EarnPage;