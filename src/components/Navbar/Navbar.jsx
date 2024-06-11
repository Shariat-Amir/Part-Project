const Navbar = () => {
  return (
    <div className="flex justify-between mx-28 mt-10">
      <div className="flex items-center">
        <img src="../../../public/images/logo.svg" alt="logo" />
        <p className="mx-10 text-colors-natural_100 font-Regular">Features</p>
        <p className="mx-10 text-colors-natural_100 font-Regular">Pricing</p>
        <p className="mx-10 text-colors-natural_100 font-Regular">Resources</p>
      </div>
      <div className=" flex justify-between items-center ">
        <button className="text-colors-natural_100 font-Medium me-10 py-4">Login</button>
        <button className="bg-colors-primary_100 text-colors-white font-Medium me-10 py-4 px-10 rounded-full">Sing Up</button>
      </div>
    </div>
  );
};

export default Navbar;
