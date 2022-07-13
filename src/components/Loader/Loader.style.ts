import styled, { keyframes } from 'styled-components';
import { StyleConstants } from "styles/StyleConstants";

const spin = keyframes`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }`;

export const Loader = styled.div`
    animation: ${spin} 2s linear infinite;
    border: 5px solid ${StyleConstants.color.metallicdarkgray};
    border-top: 5px solid ${StyleConstants.color.primaryBlue};
    border-radius: 50%;
    width: 30px;
    height: 30px;
`;
