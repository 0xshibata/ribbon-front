import styled from "styled-components";
import HeaderLogo from "webapp/lib/components/Header/HeaderLogo";
import colors from "shared/lib/designSystem/colors";
import sizes from "shared/lib/designSystem/sizes";
import theme from "shared/lib/designSystem/theme";
import { ConnectWalletButton } from "shared/lib/components/Common/buttons";
import AccountStatus from "webapp/lib/components/Wallet/AccountStatus";
import { AccessModal } from "../AccessModal/AccessModal";
import { useGlobalAccessState, useWebappGlobalState } from "../../store/store";

const HeaderContainer = styled.div<{ isMenuOpen?: boolean }>`
  height: ${theme.header.height}px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid ${colors.border};

  @media (max-width: ${sizes.lg}px) {
    padding: 16px 24px;
    border-bottom: none;
  }

  z-index: ${(props) => (props.isMenuOpen ? 50 : 10)};

  // The backdrop for the menu does not show up if we enable the backdrop-filter
  // for the header nav. To get around that, just set 'none'
  ${(props) => {
    if (props.isMenuOpen) {
      return null;
    }

    return `
      backdrop-filter: blur(40px);
      /**
       * Firefox desktop come with default flag to have backdrop-filter disabled
       * Firefox Android also currently has bug where backdrop-filter is not being applied
       * More info: https://bugzilla.mozilla.org/show_bug.cgi?id=1178765
       **/
      @-moz-document url-prefix() {
        background-color: rgba(0, 0, 0, 0.9);
      }
    `;
  }}

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: rgba(255, 255, 255, 0.01);
  }
`;

const LogoContainer = styled.div`
  padding-left: 40px;
  margin-right: auto;
  z-index: 1000;

  @media (max-width: ${sizes.lg}px) {
    padding-left: 0;
  }
`;

const OpenTreasuryButton = styled(ConnectWalletButton)`
  font-size: 14px;
  width: fit-content;
  border: none;
  padding: 12px 16px;
  margin-right: 40px;
  line-height: 20px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    opacity: 0.64;
  }
`;

const Header = () => {
  const [, setAccessModal] = useWebappGlobalState("isAccessModalVisible");
  const [globalAccess] = useGlobalAccessState("access");
  // const product = useRouteMatch({ path: "/", exact: true });
  // const portfolio = useRouteMatch({ path: "/portfolio", exact: true });
  // const treasury = useRouteMatch({ path: "/treasury", exact: false });

  return (
    <>
      <AccessModal />
      <HeaderContainer className="d-flex align-items-center">
        {/* LOGO */}
        <LogoContainer>
          <HeaderLogo />
        </LogoContainer>

        {globalAccess.length > 0 ? (
          <AccountStatus variant="desktop" />
        ) : (
          <OpenTreasuryButton
            role="button"
            onClick={() => setAccessModal(true)}
          >
            Open Treasury
          </OpenTreasuryButton>
        )}
      </HeaderContainer>
    </>
  );
};

export default Header;
