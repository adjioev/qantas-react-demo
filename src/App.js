import React, { Component } from 'react';

// Material-UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';

import { Switch, Route } from 'react-router-dom'

// Font
import 'typeface-roboto';
import logo from './assets/logo.svg';
import './App.css';

// Click handler
// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin()

import Car from './components/Car';
import Search from './components/Search';
import Header from './components/Header';

import CarOfTheWeekPage from './pages/CarOfTheWeek';

// Styles
const styles = {
  container: {
    paddingTop: 0
  }
}

// Theme
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500
  }
})

class App extends Component {
  constructor (props, context) {
    super(props, context)

    // Default text
    this.state = {
      text: 'I love U'
    }
  }

  onSubmit = e => {
    e.preventDefault()
    const text = this.refs.cool_text.input.value
    this.setState({
      text
    })
    alert(`You said : ${text}`)
  }

  render () {
    return (
      <div>
           <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>  
      <MuiThemeProvider muiTheme={muiTheme}>


          <div style={styles.container}>
         
          <AppBar
            title="Qantas Car Sales"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            // onRightIconButtonClick=""
          />        

        <Switch>
          <Route exact path='/' component={ CarOfTheWeekPage } />
          <Route path='/model/:id' component={Car}/>
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
