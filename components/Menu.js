import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Link from 'next/link';

const MenuStyle = styled.div`
  padding-top: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: space-around;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

const Menu = () => {
  return (
    <>
      <MenuStyle>
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
