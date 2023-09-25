import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, picture, category, category_bg_color, title, card_bg_color, text_button_bg_color } = card || {};
    
    return (
        <Link to={`/card/${id}`}>
            <div className={`pb-4 mb-2 bg-[${card_bg_color}] rounded-lg`}>
                <img className='w-full' src={picture} alt="" />
                <div className={`text-[${text_button_bg_color}]`}>
                    <div className={`bg-[${category_bg_color}] ml-4 mt-3 w-fit px-2 py-1 rounded`}>
                        <h3 >{category}</h3>
                    </div>
                    <h1 className='ml-4 mt-1 text-lg font-semibold '>{title}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Card;