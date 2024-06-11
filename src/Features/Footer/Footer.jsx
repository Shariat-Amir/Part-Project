const Footer = () => {



const companies=["About","Our Team" , "Creers" , "Contract"]
const Resources=["Blog" , "Developers" , "Support"]
const Features=["Link Shortening" , "Branded Links" , "Analytics"]

  return (
    <div className="bg-colors-natural_400  flex flex-col-reverse items-center gap-10 desktop:flex-row-reverse desktop:justify-between desktop:items-start desktop:p-10">
      <div className="flex h-32 p-2 gap-2 ">
        <img className="w-5 h-5" src="../../../public/images/icon-instagram.svg" alt="" />
        <img className="w-5 h-5" src="../../../public/images/icon-pinterest.svg" alt="" />
        <img className="w-5 h-5" src="../../../public/images/icon-twitter.svg" alt="" />
        <img className="w-5 h-5" src="../../../public/images/icon-facebook.svg" alt="" />
      </div>
        <div className="flex flex-col  w-[200px] items-center ">
          <p className="text-colors-white font-Medium bg">Company</p>
          {
            companies.map((item)=>(
              <a className="text-colors-natural_100 font-Regular my-1" key={item} href="#">{item}</a>
            ))
          }
        </div>
        <div className="flex flex-col  w-[200px] items-center  ">
        <p className="text-colors-white font-Medium ">Resources</p>
          {
            Resources.map((item)=>(
              <a className="text-colors-natural_100 font-Regular my-1" key={item} href="#">{item}</a>
            ))
          }
        </div>
        <div className="flex flex-col  w-[200px] items-center ">
        <p className="text-colors-white font-Medium">Features</p>
          {
            Features.map((item)=>(
              <a className="text-colors-natural_100 font-Regular my-1" key={item} href="#">{item}</a>
            ))
          }
        </div>
        <div>
          <p className="text-colors-white font-Medium text-2xl mt-10 desktop:mt-0 ">Shortly</p>
        </div>
    </div>
  );
};

export default Footer;
