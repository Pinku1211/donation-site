import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';

import Cards from '../../components/Cards/Cards';

const Home = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('donation.json')
        .then(res => res.json())
        .then(data => setCards(data));
    },[])

    return (
        <div>
            <Header></Header>
            <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;