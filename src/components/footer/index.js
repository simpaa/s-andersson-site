import React from 'react';

import './footer.css';
import '../../../font-awesome/css/font-awesome.min.css';

const Footer = () => (
  <footer className="main-footer">

    <ul className="social-media">
      <li><a href="https://twitter.com/simpa__" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="https://github.com/simpaa" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
      <li><a href="mailto:support@s-andersson.se"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
    </ul>

    <p>
      &copy; Simon Andersson 2017
    </p>

  </footer>
);

export default Footer;
