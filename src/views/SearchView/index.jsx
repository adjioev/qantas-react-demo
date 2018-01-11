import React from 'react';
import Search from '../../components/Search';

class SearchView extends React.Component {
        
    render() {
        return (
            <div>
                <h1>Car Search</h1>
                <Search {...this.props } />
            </div>
        )
    }
};

export default SearchView;
