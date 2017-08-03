import React from 'react';

const style = {
  backgroundColor: '#fff',
  maxWidth: '700px',
  margin: '20px auto',
  color: '#4c4c4c',
  padding: '15px',
  borderRadius: '4px',
  boxShadow: '0px 0px 8px #4c4c4c'
}

const TextCard = ({ children }) => (
    <article style={style}>
        {children}
    </article>
);

export default TextCard;