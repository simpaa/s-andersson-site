import React from 'react';

import './LinkButton.css';

const LinkButton = ({ link, text, target }) => (
  <div className="link-button">
    <a href={link} target={target}>{text}</a>
  </div>
);

export default LinkButton;
