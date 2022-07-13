import styled, { css } from "styled-components";
import { StyleConstants } from "styles/StyleConstants";

export const LoginScreen = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    height: auto;
    width: 500px;
  }
`;

export const CtaContainer = styled.div<{
  margin?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;

  & > button {
    margin: 0 10px 0 0;
    width: 250px;

    &:last-child {
      margin-right: 0;
    }
  }

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `}
`;

export const Cta = styled.button<{
  isOutline?: boolean;
  isSecondary?: boolean;
}>`
  background: ${StyleConstants.color.primaryBlue};
  color: ${StyleConstants.color.white};
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.8;
  outline: none;
  padding: 12px 20px;
  text-align: center;
  border: 2px solid ${StyleConstants.borderColor};
  border-radius: ${StyleConstants.radius.small};
  margin: 0;
  position: relative;
  user-select: none;
  text-align: center;
  width: 100%;
  margin: ${StyleConstants.spacing[30]} 0 0;

  & > div {
    margin-left: 10px;
  }

  :disabled {
    background: ${StyleConstants.color.gray};
    cursor: default;
  }

  ${({ isOutline }) =>
    isOutline &&
    css`
      background: transparent;
      border: 2px solid ${StyleConstants.color.gray};
      color: ${StyleConstants.color.gray};
      height: auto;
      width: auto;
      margin: 0;
      min-width: 250px;
    `}

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      background: ${StyleConstants.color.tones.green};
      border: 2px solid ${StyleConstants.color.tones.green};
      color: ${StyleConstants.color.white};
      height: auto;
      width: auto;
      margin: 0;
      min-width: 250px;
    `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;
