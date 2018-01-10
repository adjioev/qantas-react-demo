import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CarAPI from '../../api/CarAPI'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            makeSelected: undefined,
            modelSelected: undefined,
            makeMenuData: CarAPI.getMakes(),
            modelMenuData: []
        };

        this.select = this.select.bind(this);
        this.selectCarMake = this.selectCarMake.bind(this);
        this.selectCarModel = this.selectCarModel.bind(this);
    }


    selectCarMake(event, index, value) {
        const modelMenuData = CarAPI.getMakeModels(value);

        this.setState(prevState => ({
            ...prevState,
            makeSelected: value,
            modelMenuData
        }));
    }

    selectCarModel(event, index, value) {
        this.setState(prevState => ({
            ...prevState,
            modelSelected: value,
        }));
    }

    select() {
        this.props.history.push(`/make/model/${this.state.modelSelected}`);
    }

    render() {
        const style = {
            marginRight: 20,
        };

        return (
            <div>
                <SelectField
                    floatingLabelText="Car Make"
                    value={this.state.makeSelected}
                    onChange={this.selectCarMake}
                >
                    {this.state.makeMenuData.map(x => <MenuItem key={x.id} value={x.id} primaryText={x.name} />)}
                </SelectField>

                <SelectField
                    floatingLabelText="Car Model"
                    value={this.state.modelSelected}
                    onChange={this.selectCarModel}
                >
                    {this.state.modelMenuData.map(x => <MenuItem key={x.id} value={x.id} primaryText={x.name} />)}
                </SelectField>

                <FloatingActionButton mini={false} disabled={!this.state.modelSelected} style={style} onClick={this.select}>
                    <SearchIcon />
                </FloatingActionButton>

            </div>

        );
    }
}

export default Search;