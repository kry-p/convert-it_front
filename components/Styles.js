import styled, { css } from 'styled-components';
import { red } from '@mui/material/colors';

export const TypoStyle = styled.div`
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;

  ${(props) =>
    props.description &&
    css`
      font-size: 0.75rem;
    `}

  ${(props) =>
    props.error &&
    css`
      color: ${red[500]};
      font-size: 0.875rem;
    `}
`;

export const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

export const FormStyle = styled.div`
  display: grid;
  align-content: center;
  grid-template-columns: 1fr;

  @media (min-width: 512px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .item {
    padding: 1rem;
  }
`;

export const MenuStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;

  .item {
    margin: 0 auto;
  }
`;
