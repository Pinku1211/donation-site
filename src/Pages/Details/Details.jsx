import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const Details = () => {

    const [selectedCard, SetSelectedCard] = useState([])

    const { id } = useParams()

    const cards = useLoaderData();

    useEffect(() => {
        const findCard = cards.find(card => card.id == id);
        SetSelectedCard(findCard)
    }, [])

    const handleAddToDonation = () => {
        const addToDonation = [];

        const storedItems = JSON.parse(localStorage.getItem('donation'))
        console.log(storedItems)
        if (!storedItems) {
            addToDonation.push(selectedCard)
            localStorage.setItem('donation', JSON.stringify(addToDonation))
            swal("Good job!", "You clicked the button!", "success");
        }
        else {

            const isExist = storedItems.find(item => item.id == id);
            if (!isExist) {
                addToDonation.push(...storedItems, selectedCard);
                localStorage.setItem('donation', JSON.stringify(addToDonation))
            }
            else {
                alert("added")
            }


        }
    }

    return (
        <div className='px-2'>
            <div className=' py-8 max-w-[1300px] mx-auto relative'>
                <div className=''>
                    <img className='w-full' src={selectedCard.picture} alt="" />
                </div>
                <div className='flex items-center h-16 md:h-24 w-full absolute bottom-[140px] md:bottom-[116px] lg:bottom-[93px] bg-black bg-opacity-30'>
                    <div className='ml-4 md:ml-8'>
                        <button onClick={handleAddToDonation} className={`px-2 md:px-4 py-2 bg-[${selectedCard.text_button_bg_color}] text-white md:font-medium rounded-md`}>Donate ${selectedCard.price}</button>
                    </div>
                </div>

                <div className=''>
                    <h1 className='mt-2 text-xl font-bold '>{selectedCard.title}</h1>
                    <p>{selectedCard.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;