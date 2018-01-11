import React from 'react';
import Car from '../../components/Car';
import CarAPI from '../../api/CarAPI';
// import './index.css';

class CarView extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {};
       
        CarAPI.getModelById(parseInt(props.match.params.id, 10)).then(carProps => {
            this.setState(prevState =>(carProps));
        });
    }

    render() {
        return (
            <div className="carCard">
                <Car className="carCard" {...this.state } />
            </div>
        )
    }
};

export default CarView;
