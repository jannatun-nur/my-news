
import logo from '../../public/logo.png'
const Nav = () => {
    return (
        <div>
            <header className="bg-gradient-to-r from-teal-800 via-indigo-400 to-blue-600 ">
  <div className="mx-auto flex h-16 max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
      <img src={logo} className='lg:h-14 md:h-16 h-10'  />
      <p className='font-bold lg:text-xl md:text-xl text-white'>NewsConnection</p>
  </div>
</header>
        </div>
    );
};

export default Nav;