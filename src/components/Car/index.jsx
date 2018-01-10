import React from 'react';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';

const Car = (props) => (
  <div>
    <Card>
      <CardHeader title={props.name} />
      <CardMedia overlay={<CardTitle title={`Price: $${props.price}`} />}>
        <img src={props.imageUrl} alt="" />
      </CardMedia>
      <CardTitle subtitle={props.review}  />
    </Card>
  </div>
);

export default Car;
