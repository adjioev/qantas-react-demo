import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import 'typeface-roboto';
import logo from './assets/logo.svg';
import './App.css';

import Header from './components/Header';

import CarOfTheWeekPage from './pages/CarOfTheWeek';
import CarView from './pages/CarView';
import Search from './components/Search';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


// Styles
const styles = {
  container: {
    paddingTop: 0
  }
}


class App extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>  
      <MuiThemeProvider>
          <div style={styles.container}>        
          <AppBar
            title="Qantas Car Sales"
            iconElementLeft={
              <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'top'}}
              >
              <MenuItem primaryText="HOME" containerElement={<Link to="/" />} />
              <MenuItem primaryText="SEARCH" containerElement={<Link to="/search" />} />
            </IconMenu>
            }
          />
        <Switch>
          <Route exact path='/' component={ CarOfTheWeekPage } />
          <Route path='/make/model/:id' component={ CarView }/>
          <Route path='/header' component={Header}/>
          <Route path='/search' component={Search}/>
        </Switch>          
        </div>
      </MuiThemeProvider> 
      
      </div>

    )
  }
}

export default App
