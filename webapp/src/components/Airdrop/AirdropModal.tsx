import React, { useCallback, useState } from "react";
import { useWeb3Wallet } from "shared/lib/hooks/useWeb3Wallet";

import { useWeb3Context } from "shared/lib/hooks/web3Context";
import AirdropInfo from "./AirdropInfo";
import RBNClaimModalContent from "shared/lib/components/Common/RBNClaimModalContent";
import useMerkleDistributor from "../../hooks/useMerkleDistributor";
import useAirdrop from "../../hooks/useAirdrop";
import { usePendingTransactions } from "shared/lib/hooks/pendingTransactionsContext";
import BasicModal from "shared/lib/components/Common/BasicModal";

interface AirdropModalProps {
  show: boolean;
  onClose: () => void;
}

const AirdropModal: React.FC<AirdropModalProps> = ({ show, onClose }) => {
  const [step, setStep] = useState<"info" | "claim" | "claiming" | "claimed">(
    "info"
  );
  const merkleDistributor = useMerkleDistributor();
  const { account } = useWeb3Wallet();
  const { provider } = useWeb3Context();
  const airdrop = useAirdrop();
  const { addPendingTransaction } = usePendingTransactions();

  const claimAirdrop = useCallback(async () => {
    if (!airdrop || !merkleDistributor || !account) {
      return;
    }

    setStep("claim");

    try {
      const tx = await merkleDistributor.claim(
        airdrop.proof.index,
        account,
        airdrop.proof.amount,
        airdrop.proof.proof
      );

      setStep("claiming");

      const txhash = tx.hash;

      addPendingTransaction({
        txhash,
        type: "claim",
        amount: airdrop.total.toLocaleString(),
      });

      await provider.waitForTransaction(txhash, 2);
      setStep("claimed");
    } catch (err) {
      setStep("info");
    }
  }, [
    account,
    addPendingTransaction,
    airdrop,
    merkleDistributor,
    setStep,
    provider,
  ]);

  const handleClose = useCallback(() => {
    onClose();
    if (step === "claim" || step === "claimed") {
      setStep("info");
    }
  }, [onClose, step]);

  return (
    <BasicModal
      show={show}
      onClose={handleClose}
      height={580}
      animationProps={{
        key: step,
        transition: {
          duration: 0.25,
          type: "keyframes",
          ease: "easeInOut",
        },
        initial:
          step === "info" || step === "claim"
            ? {
                x: 50,
                opacity: 0,
              }
            : {},
        animate:
          step === "info" || step === "claim"
            ? {
                x: 0,
                opacity: 1,
              }
            : {},
        exit:
          step === "info"
            ? {
                x: -50,
                opacity: 0,
              }
            : {},
      }}
    >
      {step === "info" ? (
        <AirdropInfo onClaim={claimAirdrop} />
      ) : (
        <RBNClaimModalContent step={step} type="rbn" />
      )}
    </BasicModal>
  );
};

export default AirdropModal;
