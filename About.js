import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Get to know more about the team maintaining React Bootstrap. Learn a  little history of how, why and when the project started and how you can be a part of it.
        </Typography>
      </CardContent>
    </Card>
  );
}