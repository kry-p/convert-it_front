/*
 * Appbar
 * note: menu button does not implemented
 */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Material UI components
import DragHandle from '@mui/icons-material/DragHandle';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { makeStyles } from '@mui/styles';
import { LogoButton } from '../common/Button';

import { LandscapeMainMenu, PortraitMainMenu } from '../Menu';
import useWindowSize from '../../modules/hooks/useWindowSize';

const DRAWER_WIDTH = 224;

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

// Elevation for appbar
const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 6 : 0,
  });
};

const MenuSelector = styled.div`
  @media (min-width: 769px) {
    .portrait {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .landscape {
      display: none;
    }
  }
`;

const AppbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 1024px) {
    .left {
      padding-left: calc((100vw - 1024px) / 2);
    }

    .right {
      padding-right: calc((100vw - 1024px) / 2);
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .left {
      padding-left: calc((100vw - 768px) / 2);
    }

    .right {
      padding-right: calc((100vw - 768px) / 2);
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AppbarMain = (props) => {
  const windowSize = useWindowSize();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const toggleDrawerOpen = (value) => {
    setOpen(value);
  };

  // Changing layout (Mobile > Tablet)
  useEffect(() => {
    if (windowSize.width >= 768) setOpen(false);
  }, [windowSize]);

  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <div>
          <AppBar
            color="transparent"
            elevation={0}
            sx={{
              backdropFilter: 'blur(5px)',
            }}
          >
            <Toolbar>
              <AppbarContainer className={classes.title}>
                <div className="left">
                  <LogoButton />
                </div>
                <MenuSelector className="right">
                  <div className="portrait">
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{
                        border: '1px solid',
                        borderRadius: 1,
                        margin: '0.6rem',
                        padding: '0.2rem',
                        ml: '0rem',
                        mr: '0.5rem',
                      }}
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      <DragHandle />
                    </IconButton>
                    <Drawer
                      anchor="right"
                      open={open}
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
                      <PortraitMainMenu />
                    </Drawer>
                  </div>
                  <div
                    className="landscape"
                    style={{
                      padding: '0.5rem',
                    }}
                  >
                    <LandscapeMainMenu />
                  </div>
                </MenuSelector>
              </AppbarContainer>
            </Toolbar>
          </AppBar>
        </div>
      </ElevationScroll>
    </>
  );
};

export default AppbarMain;
