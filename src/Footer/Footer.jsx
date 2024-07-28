
import footer from '../../public/footer.png'
const Footer = () => {
    return (
        <div>


<footer className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-md">
      <strong className="block text-center text-xl py-4 rounded-tl-2xl shadow-blue-600 shadow-2xl
      font-bold bg-gradient-to-r from-teal-800 via-indigo-500 to-blue-700 text-white">
        Why newsConnection  !!!
      </strong>

    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 lg:flex lg:justify-between">
      <div className="lg:w-1/2">
        <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
          aut perferendis distinctio iusto repudiandae, provident velit earum?
        </p>
      </div>

      <div className="lg:w-1/2">
            <img src={footer} className=''  />
      

        
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;