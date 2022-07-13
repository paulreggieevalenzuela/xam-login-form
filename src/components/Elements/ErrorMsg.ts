import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

const ErrorMsg = styled.span`
  padding: 1px;
  display: block;
  font-size: 12px;
  color: ${StyleConstants.color.tones.red};
  white-space: pre-wrap;
`;

export default ErrorMsg;
