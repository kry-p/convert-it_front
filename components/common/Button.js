import Image from 'next/image';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// import ButtonUnstyled, {
//   buttonUnstyledClasses,
// } from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/material/styles';
// import { grey } from '@mui/material/colors';

// const FilledButtonRoot = styled('button')`
//   font-family: 'MinSans-Medium';
//   font-size: 1rem;
//   background-color: ${grey['700']};
//   padding: 10px 20px;
//   border-radius: 8px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: ${grey['500']};
//   }

//   &.${buttonUnstyledClasses.active} {
//     background-color: ${grey['300']};
//   }

//   &.${buttonUnstyledClasses.focusVisible} {
//     box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
//       0 0 0 5px rgba(0, 127, 255, 0.5);
//     outline: none;
//   }

//   &.${buttonUnstyledClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

export const BorderlessButton = styled(Button)(() => ({
  color: 'gray',
}));

export const BorderedButton = styled(Button)(() => ({
  outline: '1px solid gray',
  borderRadius: '1rem',
  color: 'gray',
}));

export const LogoButton = () => {
  return (
    <IconButton disableRipple href="/">
      <Image src="/resources/logo.png" width="27" height="31.2" />
      <div
        style={{
          fontFamily: 'Montserrat Alternates',
          paddingLeft: '0.5rem',
          fontSize: '1.3rem',
          color: 'black',
        }}
      >
        Convert-it!
      </div>
    </IconButton>
  );
};

// export const FilledButton = (props) => {
//   return <ButtonUnstyled {...props} component={FilledButtonRoot} />;
// };
