import React from 'react';

import './TextCard.css';

const TextCard = ({ children }) => (
    <article className="text-card">
        {children}
    </article>
);

export default TextCard;