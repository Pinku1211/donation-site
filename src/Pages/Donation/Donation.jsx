import React, { useState } from 'react';
import DonatedCards from '../../components/Donated/DonatedCards';

const Donation = () => {

    const [slicedItems, setSlicedItem] = useState(4);

    const storedItems = JSON.parse(localStorage.getItem('donation'))
    
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1300px] mx-auto px-4 lg:px-0 py-8'>
                {
                    storedItems.slice(0, slicedItems).map(item => <DonatedCards key={item.id} item={item}></DonatedCards>)
                }

            </div>
            <div className={storedItems.length === slicedItems ? 'hidden' : 'w-fit mx-auto mb-8'}>
                <button onClick={() => setSlicedItem(storedItems.length)} className='bg-green-500 px-4 py-2 rounded-lg text-white mt-4'>Show All</button>
            </div>
        </div>
    );
};

export default Donation;