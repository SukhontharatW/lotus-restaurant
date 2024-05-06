/* eslint-disable no-unused-vars */
import imgLogo from "../img/logo/logo-primary.svg";

import { FaFacebookSquare, FaInstagramSquare, FaLine } from "react-icons/fa";
import {
  MdOutlineMapsHomeWork,
  MdOutlineMarkEmailUnread,
  MdOutlineSettingsPhone,
} from "react-icons/md";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container">
        <div className="footer__start">
          <div className="footer__logos">
            <a href="#" className="footer__logo">
              <img src={imgLogo} alt="imgLogo" />
            </a>
            <div className="footer__icons">
              <a>
                <FaFacebookSquare />
              </a>
              <a>
                <FaInstagramSquare />
              </a>
              <a>
                <FaLine />
              </a>
            </div>
          </div>
          <div className="footer__contact">
            <div className="footer__item">
              <div className="footer__icon">
                <MdOutlineMarkEmailUnread />
              </div>
              <div className="footer__text">
                <p className="paragraph-base footer__text-title">Email</p>
                <p className="paragraph-base">Send us as email today!</p>
                <p className="paragraph-base">hello@lotus.com</p>
              </div>
            </div>
            <div className="footer__item">
              <div className="footer__icon">
                <MdOutlineSettingsPhone />
              </div>
              <div className="footer__text">
                <p className="paragraph-base footer__text-title">Phone</p>
                <p className="paragraph-base">Give us a call anytime!</p>
                <p className="paragraph-base">+1 (555) 555-4567</p>
              </div>
            </div>
            <div className="footer__item">
              <div className="footer__icon">
                <MdOutlineMapsHomeWork />
              </div>

              <div className="footer__text">
                <p className="paragraph-base footer__text-title">Address</p>
                <p className="paragraph-base">123 Cuisine St, Bangkok,</p>
                <p className="paragraph-base">Thailand, 54321</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="footer__line mb-xs"></div>
          <div className="footer__final">
            <p className="paragraph-base">
              Copyright © 2024 Sukhontharat W. All rights reserved.
            </p>
            <ul className="footer__lists">
              <li className="footer__list">
                <a href="#footer" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__list">
                <a href="#footer" className="footer__link">
                  Career
                </a>
              </li>
              <li className="footer__list">
                <a href="#footer" className="footer__link">
                  Our Partners
                </a>
              </li>
              <li className="footer__list">
                <a href="#footer" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__list">
                <a href="#footer" className="footer__link">
                  Term of Service
                </a>
              </li>
              <li className="footer__list">
                <a href="#footer" className="footer__link">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
