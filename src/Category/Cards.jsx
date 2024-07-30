import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Cards = ({categorys}) => {

    const {title, image_url, button, name} = categorys;
     return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="100"
        image={image_url} className="h-full"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          <p className="font-bold text-blue-600 font-serif">{name}</p>
          <p className="font-medium text-grey-800 font-serif"> {title} </p>
        </Typography>
      </CardContent>
      <CardActions> 

       <Link to='/details'>
       <Button >
          <button className="bg-gradient-to-r from-teal-800 via-indigo-500 to-blue-700
          px-5 py-1 rounded-ee-xl text-white font-serif lg:text-xl">{button}</button>
        </Button>
       </Link>
       
      </CardActions>
            </Card>
        </div>
    );
};

export default Cards;