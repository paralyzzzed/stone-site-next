import React, { useEffect, useState, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import CloseIcon from '@mui/icons-material/Close';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import Head from 'next/head'
import styles from '../../styles/Navbar.module.css'

export default function ButtonAppBar() {
    //for drawer
    const [state, setState] = React.useState({
        right: false,
    });
    const [language, setLanguage] = useState('en')
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const handleChange = (event) => {
        console.log(event.target.value)
        setLanguage(event.target.value);

    };

    return (

        <div style={styles.navContainer}>
            <div style={{ width: '100%', padding: '10px 2%' }}>
                <div className="nav-language-container" >
                    <FormControl>
                        <div>Language</div>
                        <Select
                            value={language}
                            onChange={handleChange}
                        >
                            <MenuItem value={'en'}>
                                <Link value={'en'} className="hello" href="/" locale="en">
                                    Eng
                                </Link>
                            </MenuItem>
                            <MenuItem value={'de'}>
                                <Link value={'de'} className="hello" href="/" locale="de">
                                    DE
                                </Link>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <Link className="nav-logo-container" href="/">
                    {/* <img src={PUBLIC_URL('images/logo2.png')} className="nav-logo" /> */}
                    <a>hello</a>
                </Link>
                {/* <div className="nav-ham-menu-container mobile-only" key={'right'}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer('right', true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                        onOpen={toggleDrawer('right', true)}
                    >
                        <div style={{ width: '100vw' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer('right', false)}
                            >
                                <CloseIcon />
                            </IconButton>
                            <div style={{ display: 'flex', alignItems: ' center', justifyContent: 'center' }}>
                                <img src={PUBLIC_URL('images/logo2.png')} className="nav-drawer-logo" />
                            </div>
                            <div className="container text-center" style={{ marginTop: '100px' }}>
                                <a className="navbar-drawer-links" href="/cat-selector"
                                    onClick={toggleDrawer('right', false)}
                                >
                                    <Trans label="productsTitle" i18nKey="productsTitle">Products</Trans>
                                </a>
                                <br />
                                <Link className="navbar-drawer-links" to="/about-us"
                                    onClick={toggleDrawer('right', false)}
                                >
                                    <Trans label="aboutUsTitle" i18nKey="aboutUsTitle">About us</Trans>
                                </Link>
                                <br />
                                <Link className="navbar-drawer-links" to="/contact-us"
                                    onClick={toggleDrawer('right', false)}
                                >
                                    <Trans label="contactUsTitle" i18nKey="contactUsTitle">Contact us</Trans>

                                </Link>
                                <div className="nav-drawer-icons-wrapper">
                                    <a className="nav-drawer-logos" href="https://www.instagram.com/invites/contact/?i=1v5hdziye90jq&utm_content=mugdv1h" target="blank">
                                        <InstagramIcon style={{ fontSize: '40px' }} />
                                    </a>
                                    <a className="nav-drawer-logos" href="https://wa.me/+4917634333064" target="blank">
                                        <WhatsappIcon style={{ fontSize: '40px' }} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwipeableDrawer>
                </div> */}
            </div >
            {/* <div className=" links-container">
                <div className="links-wrapper no-mobile">
                    <Link className="navbar-links" to="/about-us">
                        <Trans label="aboutUsTitle" i18nKey="aboutUsTitle">About us</Trans>
                    </Link>
                    <Link className="navbar-links" to="/contact-us">
                        <Trans label="contactUsTitle" i18nKey="contactUsTitle">Contact us</Trans>
                    </Link>
                    <a className="navbar-links" href="/cat-selector">
                        <Trans label="productsTitle" i18nKey="productsTitle">Products</Trans>
                    </a>

                </div>
            </div> */}
        </div >
    );
}
