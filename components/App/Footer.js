import React, { useEffect, useState, useContext } from 'react';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsappIcon from '@mui/icons-material/WhatsApp';

export default function Footer(props) {
    return (
        <section className="footer">
            <div className="container">
                {/* <div className="row">
                    <div className="col-md-3 col-6">
                        <Link className="footer-dojeldi-link-to-home" style={{ display: 'block' }} to="/">
                            <img width="80%" src={PUBLIC_URL('images/footer.png')} alt="logo" />
                        </Link>
                    </div>
                    <div className="col-md-3 col-6">
                        <Link className="footer-headers footer-links" to="/about-us">
                            <h6 >About us</h6>
                        </Link>
                        <div>
                            <div className="footer-links">Address: </div>
                            <div className="footer-links" >Hansaring 61,50670,Cologne, Germany</div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <div className="call-us-wrapper">
                            <div>
                                <PhoneInTalkIcon style={{ fontSize: '30px', display: 'inline-block', marginRight: 5 }} />
                                <h6 className="footer-headers" style={{ display: 'inline-block' }}>Contact us</h6>
                            </div>
                            <div>
                                <div className="call-us-text">
                                    <a className="telephone-link" href="tel: +4917634333064">+4917634333064</a>
                                    <br></br>
                                    <a className="telephone-link" href="tel: +492211612393">+492211612393</a>
                                    <br></br>
                                    <div className="call-us-text">
                                        <a className="telephone-link">Fax:+492211612100</a>
                                    </div>
                                </div>
                                <div className="call-us-phone-logo">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-6">
                        <h6 className="footer-headers">Social medias</h6>
                        <div className="socialmedia-icons-wrapper">
                            <a href="https://www.instagram.com/invites/contact/?i=1v5hdziye90jq&utm_content=mugdv1h" target="blank">
                                <InstagramIcon style={{ fontSize: '40px' }} />
                            </a>
                            <a href="https://wa.me/+4917634333064" target="blank">
                                <WhatsappIcon style={{ fontSize: '40px' }} />
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
            <style jsx>{`
      .footer {
        background-color: #333333;
        color: white;
        padding: 20px 0;
      }
      
      .footer a {
        color: #f0f1f2;
      }
      
      .footer a:hover {
        color: lightgray;
      }
      
      .footer-links {
        color: white;
        text-decoration: none;
        font-size: 13px;
      }
      
      .footer-links:hover {
        color: whitesmoke;
        text-decoration: none;
      }
      
      .call-us-text {
        display: inline-block;
      }
      
      .telephone-link {
        text-decoration: none;
        color: white;
        font-size: 13px;
      }
      
      .telephone-link:hover {
        text-decoration: none;
        font-size: 13px;
      }
      
      .footer-dojeldi-link-to-home {
        text-decoration: none;
      }
      
      .footer-dojeldi-link-to-home:hover {
        text-decoration: none;
      }
      
      .socialmedia-icons-wrapper ul {
        margin: 0;
        padding: 0;
        display: flex;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      
      .socialmedia-icons-wrapper ul li {
        list-style: none;
        margin: 0 15px;
      }
      
      .socialmedia-icons-wrapper ul li a {
        position: relative;
        display: block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 63px;
        background: #333;
        border-radius: 50%;
        font-size: 30px;
        color: #666;
        transition: 0.5s;
      }
      
      .socialmedia-icons-wrapper ul li a::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #ffee10;
        transition: 0.5s;
        transform: scale(0.9);
        z-index: -1;
      }
      
      .socialmedia-icons-wrapper ul li a:hover::before {
        transform: scale(1.1);
        box-shadow: 0 0 15px #ffee10;
      }
      
      .socialmedia-icons-wrapper ul li a:hover {
        color: #ffee10;
        box-shadow: 0 0 5px #ffee10;
        text-shadow: 0 0 5px #ffee10;
      }
      .call-us-phone-logo {
        display: inline-block;
        /* margin-top: -30px; */
      }
      @media (max-width: 576px) {
        .footer-headers {
          margin-top: 10px;
        }
        .call-us-phone-logo {
          display: none;
        }
      }
      
      `}</style>
        </section >
    );
}
