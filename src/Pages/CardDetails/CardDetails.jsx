import React from 'react';

const CardDetails = ({card}) => {
    console.log(card)
    const { id, picture, category, category_bg_color, title, card_bg_color, text_button_bg_color } = card;
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default CardDetails;