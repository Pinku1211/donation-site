import React from 'react';

const DonatedCards = ({ item }) => {

    const { id, picture, category, category_bg_color, title, card_bg_color, text_button_bg_color, price } = item || {};
    console.log(item)
    return (

        <div>
            <div className='h-[200px] flex items-center gap-4'>
                <img src={picture} alt="" />
                <div className='space-y-3'>
                    <div className='w-fit px-2 py-1'>
                        <p className=''>{category}</p>
                    </div>
                    <h1 className='text-xl font-bold'>{title}</h1>
                    <p className='text-lg font-semibold'>${price}</p>
                    <button className='text-lg font-semibold'>View Details</button>
                </div>
            </div>
            
        </div>

    );
};

export default DonatedCards;