import React, { HTMLAttributes } from "react";
import styled from "styled-components";

import colors from "../../designSystem/colors";
import theme from "../../designSystem/theme";

const EndingBorder = styled.div`
  height: 16px;
  margin: 0px -16px 0px -16px;
  border-radius: ${theme.border.radius};
  border-bottom: ${theme.border.width} ${theme.border.style} ${colors.border};
  background: ${colors.background};
  z-index: 1;
`;

const ExtraContainer = styled.div<{ backgroundColor?: string }>`
  display: flex;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.backgroundLighter};
  border-radius: ${theme.border.radius};
  margin: -16px;
  padding: 16px;
  padding-top: 32px;
`;

interface ModalContentExtraProps extends HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
}

const ModalContentExtra: React.FC<ModalContentExtraProps> = (props) => (
  <>
    <EndingBorder />
    <ExtraContainer {...props} />
  </>
);

export default ModalContentExtra;
