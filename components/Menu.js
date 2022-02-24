import Link from 'next/link';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  ListItemButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import { BorderlessButton, LogoButton } from './common/Button';

const menuItem = [
  ['변환', '/base', '각종 변환을 할 수 있습니다.'],
  ['API', '#', 'API 정보를 표시합니다.'],
  ['라이선스', '#', '오픈소스 라이선스'],
];

const convertItem = {
  unit: [['진법', '/base']],
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `0px`,
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.8rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  padding: '0rem 0.5rem 0rem',
  margin: '0rem',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    padding: '0rem',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    marginTop: 0,
    marginBottom: 0,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '0rem 0.75rem 0rem',
}));

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export const ConvertMenu = () => (
  <Box>
    <DrawerHeader sx={{ justifyContent: 'flex-start' }}>
      <LogoButton />
    </DrawerHeader>
    <Divider />
    <List disablePadding>
      <ListItem disablePadding>
        <Accordion>
          <AccordionSummary>단위 변환</AccordionSummary>
          <AccordionDetails>
            {convertItem.unit.map((item) => (
              <BorderlessButton key={item} href={item[1]}>
                {item[0]}
              </BorderlessButton>
            ))}
          </AccordionDetails>
        </Accordion>
      </ListItem>
    </List>
  </Box>
);

export const LandscapeMainMenu = () => {
  return (
    <div>
      {menuItem.map((item) => (
        <BorderlessButton key={item} href={item[1]}>
          {item[0]}
        </BorderlessButton>
      ))}
    </div>
  );
};

export const PortraitMainMenu = () => {
  return (
    <Box>
      <DrawerHeader sx={{ justifyContent: 'flex-start' }} />
      <Divider />
      <nav>
        <List disablePadding>
          {menuItem.map((item) => (
            <ListItem disablePadding key={item}>
              <ListItemButton sx={{ padding: '0rem 1rem 0rem' }}>
                <Link href={item[1]}>
                  <ListItemText primary={item[0]} secondary={item[2]} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
