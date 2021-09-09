import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Link from 'next/link';

const MenuStyle = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;

  .item {
    margin: 0 auto;
  }

  /* @media (min-width: 600px) {
    width: 600px;
  } */
`;

const Menu = () => {
  return (
    <>
      <MenuStyle>
        <Link href="/">
          <Button variant="outlined" color="secondary">
            홈으로
          </Button>
        </Link>
        <Link href="/base">
          <Button variant="outlined" color="secondary">
            진법변환
          </Button>
        </Link>
      </MenuStyle>
    </>
  );
};

export default Menu;
