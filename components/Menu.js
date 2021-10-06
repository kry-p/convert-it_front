import { Button } from '@mui/material';
import Link from 'next/link';

import { MenuStyle } from './Styles';

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
