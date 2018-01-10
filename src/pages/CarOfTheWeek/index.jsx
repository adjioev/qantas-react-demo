import React from 'react';
import Car from '../../components/Car';
import CarAPI from '../../api/CarAPI';
import './index.css';

const CarOfTheWeekPage = (props) => {
    const carOfTheWeek = CarAPI.getCarOfTheWeek(
        parseInt(props.match.params.number, 10)
    );

    const carProps = CarAPI.getModelById(carOfTheWeek.modelId);

    console.info('car props', carProps);
    return (
        <div>
            <h1>Car of the week</h1>
            <div className="carCard">
                <Car className="carCard" {...carProps} review={carOfTheWeek.review} />
            </div>
        </div>
    )
};

export default CarOfTheWeekPage;
