import React from 'react';
import Car from '../../components/Car';
import CarAPI from '../../api/CarAPI';
import './index.css';

class CarOfTheWeekView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            carProps: {},
            carOfTheWeek: {}
        };

        CarAPI.getCarOfTheWeek().then(carOfTheWeek => {    
            CarAPI.getModelById(carOfTheWeek.modelId).then(carProps => {
                this.setState(prevState =>({
                    carProps,
                    carOfTheWeek
                }));
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Car of the week</h1>
                <div className="carCard">
                    <Car className="carCard" {...this.state.carProps} review={this.state.carOfTheWeek.review} />
                </div>
            </div>
        )
    }
};

export default CarOfTheWeekView;
