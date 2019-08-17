import React from 'react';

const Card = ({ card }) =>
    <div
        className="card"
        style={{
            backgroundImage: `url(${card.cover})`,
        }}>
        <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <h4 className="card-author">{card.author}</h4>
        </div>
    </div>;

export default Card;
