import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RiOpenSourceFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";

const Cards = ({ categorys }) => {
  const { id, title, image_url, button, name, source, post } = categorys;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <Typography gutterBottom variant="h5" component="div">
          <p className="p-2 text-xs lg:text-xl font-bold text-grey-800 font-serif">
            {" "}
            {title}{" "}
          </p>
        </Typography>
        <CardMedia
          component="img"
          alt="green iguana"
          height="100"
          image={image_url}
          className="h-full rounded-t-xl pt-3"
        />
        <CardContent>
          <p className="font-bold text-blue-600 font-serif py-2">{name}</p>
          <p className="font-bold text-gray-800 font-serif flex gap-2">
            <span className="text-xl text-gray-800 ">
              <RiOpenSourceFill />
            </span>{" "}
            {source}
          </p>
          <p className="font-bold text-gray-800 font-serif flex gap-2 py-2">
            <span className="text-xl text-gray-800 ">
              <FaRegCalendarCheck />
            </span>{" "}
            {post}
          </p>
        </CardContent>
        <CardActions>
          <Link to={`/details/${id}`}>
            <Button>
              <button
                className="bg-gradient-to-r from-teal-800 via-indigo-500 to-blue-700
          px-5 py-1 rounded-ee-xl text-white font-serif lg:text-xl"
              >
                {button}
              </button>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
