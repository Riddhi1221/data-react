import React, { Component }  from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Box, Grid, Typography } from "@mui/material";
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
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
;




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
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  const categories = [
    {
      title: "Strength Training",
      img: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/category/category-5-thumb-1.jpg",
    },
    {
      title: "Functional Fitness",
      img: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/category/category-5-thumb-2.jpg",
    },
    {
      title: "Powerful and Strong",
      img: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/category/category-5-thumb-3.jpg",
    },
    {
      title: "Youth & Teen Fitness",
      img: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/category/category-5-thumb-4.jpg",
    },
    {
      title: "Online Coaching",
      img: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/category/category-5-thumb-5.jpg",
    },
    {
      title: "Core & Flexibility",
      img: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/category/category-5-thumb-6.jpg",
    },
  ];

  const set = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // Array of partner logos
  const partners = [
    { name: "Rowing", logo: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/brand/brand-5-logo-4.png" },
    { name: "Bega", logo: "	https://html.hixstudio.net/acadia-prev/acadia/assets/img/brand/brand-5-logo-5.png" },
    { name: "Langwarrin", logo: "	https://html.hixstudio.net/acadia-prev/acadia/assets/img/brand/brand-5-logo-3.png" },
    { name: "Pursuit", logo: "	https://html.hixstudio.net/acadia-prev/acadia/assets/img/brand/brand-5-logo-2.png" },
    { name: "Rabbitohs", logo: "	https://html.hixstudio.net/acadia-prev/acadia/assets/img/brand/brand-5-logo-1.png" },
    { name: "Broncos", logo: "	https://html.hixstudio.net/acadia-prev/acadia/assets/img/brand/brand-5-logo-6.png" },
  ];

  return (
    <div>
      <div className="slider-container hero" position="absolute">
        <Slider {...settings}>
          <Box classname="hero">
            <AppBar position="relative" sx={{ backgroundColor: 'transparent' }}>
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
            <Box sx={{ margin: '120px 0px 120px 220px' }}>
              <span style={{ color: 'white', fontSize: '20px' }}>Welcome to Acadia</span>
              <h1 style={{ color: 'white', fontSize: '65px', width: '45%', marginTop: '10px' }}>Unlock Your <br />full potential <span className='logo' style={{ color: '#F0EC51' }}>With <img src="	https://html.hixstudio.net/acadia-prev/acadia/assets/img/shape/bottom-line/slider-5-line-1.svg" alt="" style={{ width: '80px' }} /></span> Gym Coaching</h1>
              <Button variant="" disableElevation sx={{ border: '1px solid white', color: 'white' }}>
                JOIN OUR GYM
              </Button>
            </Box>
          </Box>
          <Box className="hero1" sx={{ background: "https://html.hixstudio.net/acadia-prev/acadia/assets/img/slider/slider-5-bg-2.jpg" }}>
            <AppBar position="relative" sx={{ backgroundColor: 'transparent' }}>
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
            <Box sx={{ margin: '120px 0px 185px 220px' }}>
              <span style={{ color: 'white', fontSize: '20px' }}>Welcome to Acadia</span>
              <h1 style={{ color: 'white', fontSize: '65px', width: '45%', marginTop: '10px' }}>Everything For   <br />Office & <span className='logo' style={{ color: '#F0EC51' }}>School <img src="	https://html.hixstudio.net/acadia-prev/acadia/assets/img/shape/bottom-line/slider-5-line-1.svg" alt="" style={{ width: '80px' }} /></span>  Supplies </h1>
              <Button variant="" disableElevation sx={{ border: '1px solid white', color: 'white' }}>
                JOIN OUR GYM
              </Button>
            </Box>
          </Box>
          <Box className="hero2" sx={{ background: 'https://html.hixstudio.net/acadia-prev/acadia/assets/img/slider/slider-5-bg-3.jpg' }}>
            <AppBar position="relative" sx={{ backgroundColor: 'transparent' }}>
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
            <Box sx={{ margin: '120px 0px 220px 220px' }}>
              <span style={{ color: 'white', fontSize: '20px' }}>Welcome to Acadia</span>
              <h1 style={{ color: 'white', fontSize: '65px', width: '45%', marginTop: '10px' }}>Build Education   <br />Website<span className='logo' style={{ color: '#F0EC51' }}>Using <img src="	https://html.hixstudio.net/acadia-prev/acadia/assets/img/shape/bottom-line/slider-5-line-1.svg" alt="" style={{ width: '80px' }} /></span>  Acadia</h1>
              <Button variant="" disableElevation sx={{ border: '1px solid white', color: 'white' }}>
                JOIN OUR GYM
              </Button>
            </Box>
          </Box>
        </Slider>
      </div>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        <div className='card'>
          <div className="icon1" style={{ marginTop: '60px' }}>
            <img src="	https://html.hixstudio.net/acadia-prev/acadia/assets/img/icon/service/service-5-icon-1.svg" alt="" />
          </div>
          <h2>Build Confidence</h2>
          <p>Here are some tips and activities that can help boost your mood <br />
            and promote a positive mindset. </p>
        </div>
        <div className='card'>
          <div className="icon1" style={{ marginTop: '60px' }}>
            <img src="		https://html.hixstudio.net/acadia-prev/acadia/assets/img/icon/service/service-5-icon-2.svg" alt="" />
          </div>
          <h2>Boost Your Mood </h2>
          <p>Here are some tips and activities that can help boost your mood  <br />
            and promote a positive mindset. </p>
        </div>
        <div className='card'>
          <div className="icon1" style={{ marginTop: '60px' }}>
            <img src="	https://html.hixstudio.net/acadia-prev/acadia/assets/img/icon/service/service-5-icon-3.svg" alt="" />
          </div>
          <h2>Increase Energy Levels </h2>
          <p>Here are some tips and activities that can help boost your mood <br />
            and promote a positive mindset. </p>
        </div>
      </Box>
      <Box sx={{ textAlign: "center", margin: "80px 0px 40px 0px" }}>
        <span style={{ fontSize: "20px" }}>Unique Categories</span>
        <h1 style={{ margin: "5px 0px", fontSize: "50px" }}>Browse by Categories</h1>
      </Box>
      <Box sx={{ padding: 5 }}>
      <Grid container spacing={5}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
        
              <Box>
                <img
                  src={category.img}
                  alt={category.title}
                  style={{
                    width: "460px",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px 10px 0 0",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  padding: "10px 15px",
                  border: "1px solid #ddd",
                  borderTop: "none",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", color: "#333" }}
                >
                  {category.title}
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
    <div>
      {/* Partners Section */}
      <Box
        sx={{
          backgroundColor: "#FFEB3B",
          padding: "40px 0",
        }}
      >
        {/* <Container maxWidth="lg"> */}
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            The renovator is proudly partnered with
          </Typography>
          <Slider {...set}>
            {partners.map((partner, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  sx={{
                    height: 80,
                    width: "auto",
                    margin: "0 auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Slider>
        {/* </Container> */}
      </Box>

      {/* Latest GYM Courses Section */}
      <Box sx={{ padding: "60px 0" }}>
        <Container maxWidth="md">
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            gutterBottom
          >
            WANNA TRANSFORM YOUR LIFE?
          </Typography>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: "bold" }}
          >
            Latest GYM Courses
          </Typography>
        </Container>
      </Box>
    </div>
    </div>
  )
}

export default Home
