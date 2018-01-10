import React, { Component } from 'react';

// Material-UI
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';


// Font
import 'typeface-roboto';

// Click handler
// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin()

import Car from './components/Car';


// Styles
const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
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
      <MuiThemeProvider muiTheme={muiTheme}>
      
        <div style={styles.container}>
          <Car 
            name="Alex"
            make="Nissan"
            price="50000" 
            imageUrl="http://media.caranddriver.com/images/media/3124/2007-nissan-350z-photo-3786-s-429x262.jpg"
            review="Super car"
            />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
