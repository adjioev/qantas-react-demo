import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import Button from 'material-ui/Button';

const Car = (props) => (
  <div>
    Title {props.title}
    Review {props.review}

        <Card>
          <CardHeader
            title={props.title}
            subtitle={props.review}
          />
          <CardMedia
            overlay={<CardTitle title={props.title} subtitle={props.review} />}
          >
            <img src={props.imageUrl} alt="" />
          </CardMedia>
          <CardTitle title={props.title} subtitle={props.review}  />
        </Card>
   </div>
);

export default Car;
