import { FaShieldHeart } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { RiOpenSourceFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";

const Details = () => {

const {id} = useParams()

const [item, setItem] = useState(null);

  useEffect(() => {
    fetch('/latest.json')
      .then(res => res.json())
      .then(data => {
        const selectedItem = data.find(d => d.id === parseInt(id));
        setItem(selectedItem);
      });
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }




  return (
    <div>
      <p className="py-5 md:py-0 lg:py-3 font-semibold mx-1 text-center lg:text-start block md:hidden lg:hidden">
      {item.title}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:gap-10 mx-5 mt-5">
        <section>
          <img
            src={item.image_url}
            className="ml-2 md:ml-0 lg:ml-0"
          />
          <div className="flex gap-12 lg:text-4xl text-2xl my-4 lg:ml-8 ml-14">
            <p className="text-red-400">
              <FaShieldHeart />
            </p>
            <p className="text-red-400">
              <CiShare2 />
            </p>
            <p className="text-red-400">
              <FaRegComments />
            </p>
          </div>
        </section>

        <section>
          <p className="py-5  md:w-9/12 md:py-0 lg:py-3 font-semibold mx-2 text-xl hidden lg:block md:block">
          {item.title}
          </p>
          <p className="py-2 font-bold text-gray-800 font-serif flex gap-2">
            <span className="text-xl text-gray-800 ">
              <RiOpenSourceFill />
            </span>{" "}
            {item.source}
          </p>
          <p className="font-bold text-gray-800 font-serif flex gap-2 py-3">
            <span className="text-xl text-gray-800 ">
              <FaRegCalendarCheck />
            </span>{" "}
            {item.post}
          </p>
        </section>
      </div>

      <div>
        <p className="p-4 text-xl font-medium text-center lg:text-start">
        {item.description}
        </p>
      </div>
    </div>
  );
};

export default Details;
