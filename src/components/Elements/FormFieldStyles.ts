import { css } from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

type FormFieldStylesProps = {
  error?: boolean;
  minHeight?: string;
};

const FormFieldStyles = css<FormFieldStylesProps>`
  display: block;
  width: 100%;
  outline: 0;
  padding: 12px 10px;
  color: inherit;
  background-color: ${StyleConstants.color.white};
  border-radius: ${StyleConstants.radius.small};
  border-width: 1px;
  border-style: solid;
  border-color: ${p =>
    p.error ? StyleConstants.color.tones.red : StyleConstants.divider};

  &::placeholder {
    color: ${StyleConstants.color.gray3};
  }
  &::-webkit-input-placeholder {
    color: ${StyleConstants.color.gray3};
  }
  &::-moz-placeholder {
    color: ${StyleConstants.color.gray3};
  }
  &:-ms-input-placeholder {
    color: ${StyleConstants.color.gray3};
  }
  &:-moz-placeholder {
    color: ${StyleConstants.color.gray3};
  }

  &[disabled] {
    border-color: ${StyleConstants.color.tones.mute};
    background-color: ${StyleConstants.color.tones.mute};

    &::placeholder {
      color: ${StyleConstants.color.gray3};
    }
    &::-webkit-input-placeholder {
      color: ${StyleConstants.color.gray3};
    }
    &::-moz-placeholder {
      color: ${StyleConstants.color.gray3};
    }
    &:-ms-input-placeholder {
      color: ${StyleConstants.color.gray3};
    }
    &:-moz-placeholder {
      color: ${StyleConstants.color.gray3};
    }
  }

  &[disabled]:focus,
  &:focus {
    box-shadow: ${StyleConstants.focus};
  }
`;

export default FormFieldStyles;
