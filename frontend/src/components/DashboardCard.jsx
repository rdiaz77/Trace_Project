import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




export default function DashboardCard() {
  return (
    <Card sx={{ maxWidth: 200 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="50"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Client's Name
        </Typography>
        <Typography>
            Client's address, city, county, region
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Last Visit
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">See More</Button>
        <Button size="small">Add New Visit</Button>
      </CardActions>
    </Card>
  );
}

