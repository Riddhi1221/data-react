import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "slick-carousel/slick/slick-theme.css";



const pages = [{ name: 'HOME', icon: <KeyboardArrowDownIcon /> }, { name: 'PROGRAMS', icon: <KeyboardArrowDownIcon /> }, { name: 'ADMISSIONS', icon: <KeyboardArrowDownIcon /> }, { name: 'PAGES', icon: <KeyboardArrowDownIcon /> }, { name: 'BOLG', icon: <KeyboardArrowDownIcon /> }];
const setting = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Home = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <AppBar position="relative" sx={{backgroundColor:'transparent'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap   
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 'bolder',
                color: 'white',
                fontSize: '35px',
                textDecoration: 'none',
              }}
            >
              Aca <span style={{ color: ' rgb(250 243 243 / 92%)', fontWeight: 'normal' }}>dia</span>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none', margin: '20px' } }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              Aca <span style={{ color: ' rgb(250 243 243 / 92%)', fontWeight: 'normal' }}>dia</span>
            </Box >
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page, i) => (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{ margin: '0px 15px', color: 'white' }}
                  endIcon={page.icon}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, }}>
                  <Avatar alt="Remy Sharp" src="" sx={{ background: 'none' }} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {setting.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div className="slider-container hero" position="absolute" sx={{ backgroundImage: '	https://html.hixstudio.net/acadia-prev/acadia/assets/img/slider/slider-5-bg-1.jpg' }}>
          <Slider {...settings}>
            <Box sx={{margin:'120px 0px 120px 220px'}}>
              <span style={{color:'white',fontSize:'20px'}}>Welcome to Acadia</span>
              <h1 style={{color:'white',fontSize:'65px',width:'45%',marginTop:'10px'}}>Unlock Your <br />full potential <span className='logo' style={{ color: '#F0EC51' }}>With <img src="	https://html.hixstudio.net/acadia-prev/acadia/assets/img/shape/bottom-line/slider-5-line-1.svg" alt="" style={{ width: '80px' }} /></span> Gym Coaching</h1>
              <Button variant="" disableElevation sx={{border:'1px solid white' , color:'white'}}>
                JOIN OUR GYM
              </Button>
            </Box>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
      </div>

    </div>
  )
}

export default Home
