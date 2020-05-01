import React from 'react';
import { Link } from 'gatsby';
import { DiGithubBadge } from 'react-icons/di';
import { MdEmail } from 'react-icons/md';
import { IoLogoTwitter } from 'react-icons/io';

import './Footer.scss';

const Footer = () => (
  <footer className="Footer">
    <nav className="Footer__links">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/theme-switcher">Theme Switcher</Link>
      <Link to="/cv">CV</Link>
    </nav>
    <div className="Footer__contact">
      <a
        className="Footer__icon plain-link"
        href="https://github.com/mattgreenfield"
        aria-label="Github"
      >
        <DiGithubBadge />
      </a>
      <a
        className="Footer__icon plain-link"
        href="https://twitter.com/mattgreenfield2"
        aria-label="Twitter"
      >
        <IoLogoTwitter />
      </a>
      <a
        className="Footer__icon plain-link"
        href="mailto:gmattgreenfield@gmail.com"
        aria-label="Email"
      >
        <MdEmail />
      </a>
    </div>
  </footer>
);

export default Footer;
