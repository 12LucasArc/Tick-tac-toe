import { renderMatches } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.headerBackground};
  color: ${(props) => props.theme.colors.textColor};

  svg {
    width: 4rem;
    height: 4rem;
    fill: ${(props) => props.theme.colors.text};
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.buttonBackground};
    color: ${(props) => props.theme.colors.buttonText};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHoverBackground};
    }
  }
`;


export default HeaderWrapper;