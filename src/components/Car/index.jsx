import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Button from 'material-ui/Button';

const Car = (props) => (
  <div>
    <Card>
      <CardHeader title={props.name} />
      <CardMedia
        overlay={<CardTitle title={props.price} />}
      >
        <img src={props.imageUrl} alt="" />
      </CardMedia>
      <CardTitle subtitle={props.review}  />
    </Card>
  </div>
);

export default Car;
