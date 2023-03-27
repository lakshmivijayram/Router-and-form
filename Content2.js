import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Shakespeare Quotes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        These violent delights have violent ends
        And in their triumph die, like fire and powder,
        Which as they kiss consume. The sweetest honey
         Is loathsome in his own deliciousness        
      </Typography>
      </CardContent>
    </Card>
  );
}