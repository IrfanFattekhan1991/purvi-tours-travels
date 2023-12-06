const Header = () => {
  return (
    <div className=" flex justify-between items-center w-100% h-24 shadow-sm ">
      <div>
        <img className="w-52 h-24" alt="logo" src="/logo2.png" />
      </div>
      <div className="flex">
        <ul className="flex text-orange-400 font-bold">
          <li className="px-20">Home</li>
          <li className="px-20">About</li>
          <li className="px-20">Testimonials</li>
          <li className="px-20">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
