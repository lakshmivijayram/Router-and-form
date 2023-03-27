import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Address:No.3
        Tagore nagar,
        Pondicherry.
        Ph.no:987897899.
        </Typography>
      </CardContent>
    </Card>
  );
}