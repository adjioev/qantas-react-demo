import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Button from 'material-ui/Button';

const Car = (props) => (
  <div>
    Hello {props.name}
    <FlatButton label="Default" />   
   </div>
);

export default Car;
