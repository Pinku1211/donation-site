
import Card from '../Card/Card';

const Cards = ({cards}) => {
 

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1300px] mx-auto py-10'>
            {
               cards?.map(card => <Card key={card.id} card={card}></Card> ) 
            }
        </div>
    );
};

export default Cards;