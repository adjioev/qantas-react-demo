import React from 'react';
import Car from '../../components/Car';
import CarAPI from '../../api/CarAPI';
import './index.css';

const CarView = (props) => {
    const carProps = CarAPI.getModelById(
        parseInt(props.match.params.id, 10)
    );

    return (
        <div className="carCard">
            <Car className="carCard" {...carProps} />
        </div>
    )
};

export default CarView;
