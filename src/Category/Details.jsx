import { FaShieldHeart } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa6";

const Details = () => {

    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-5 mt-5">
                <section>
                    <img src="https://i.ibb.co/N9zDScM/5.png"  className=""  />
                    <div className="flex gap-12 lg:text-4xl my-4 lg:ml-8">
                        <p  className="text-red-400"><FaShieldHeart /></p>
                        <p  className="text-red-400"><CiShare2 /></p>
                        <p  className="text-red-400"><FaRegComments  /></p>
                    </div>
                </section>
                    <p>fjghfhgskdfjkl;ghakhforehgklrjgrdkfjghklf
                    hsdflksdgjfhgdfjkfdhgfdklj</p>
                <section>

                </section>
            </div>
        </div>
    );
};

export default Details;