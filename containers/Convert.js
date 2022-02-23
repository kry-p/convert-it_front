/*
 * Convert page base
 */
import React, { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
import {
  CssBaseline,
  Box,
  Drawer,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import DragHandle from '@mui/icons-material/DragHandle';

import { LogoButton } from '../components/common/Button';
import AppbarControlLeft from '../components/appbar/AppbarControlLeft';
import { ConvertMenu, DrawerHeader } from '../components/Menu';
import useWindowSize from '../modules/hooks/useWindowSize';

const DRAWER_WIDTH = 224;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DRAWER_WIDTH}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Convert = ({ component }) => {
  const [open, setOpen] = useState(false);
  const [tempOpen, setTempOpen] = useState(false);
  const [width, setWidth] = useState(null);
  const windowSize = useWindowSize();

  // For Server-side Rendering
  useEffect(() => {
    setWidth(window.innerWidth);
    if (windowSize.width >= 768 || width >= 768) {
      setOpen(true);
      setTempOpen(false);
    } else {
      setOpen(false);
    }
  });

  const toggleDrawerOpen = (value) => {
    setTempOpen(value);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        open={open}
        color="transparent"
        elevation={0}
        sx={{ backdropFilter: 'blur(5px)', borderBottom: '1px solid #ddd' }}
      >
        <Toolbar>
          <AppbarControlLeft>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                border: '1px solid',
                borderRadius: 1,
                padding: '0.1rem',
                ml: '0rem',
                mr: '0.5rem',
              }}
              onClick={() => {
                toggleDrawerOpen(true);
              }}
            >
              <DragHandle />
            </IconButton>
            <LogoButton />
          </AppbarControlLeft>
        </Toolbar>
      </AppBar>
      {width >= 768 ? (
        <></>
      ) : (
        <Drawer
          anchor="left"
          open={tempOpen}
          onClose={() => {
            toggleDrawerOpen(false);
          }}
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
            },
          }}
        >
          <ConvertMenu />
        </Drawer>
      )}
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <ConvertMenu />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {component}
        </div>
      </Main>
    </Box>
  );
};

export default Convert;
