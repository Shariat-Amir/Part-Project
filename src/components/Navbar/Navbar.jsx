import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [menu , setMenu]=useState('hidden')
  console.log(window.innerWidth);
const bar=()=>{
  if (isOpen === false){
    setMenu("flex")
    setIsOpen(true)
  }else{
    setMenu("hidden")
    setIsOpen(false)
  } 
}

  if(window.innerWidth >= 1440){
    return (

    
      <div className="flex justify-between mx-28 mt-10">
        
        <div className="flex items-center">
          <img src="../../../public/images/logo.svg" alt="logo" />
          <a href="#" className="mx-10 text-colors-natural_100  hover:text-colors-primary_100 transition-all duration-200 font-Regular">Features</a>
          <a href="#" className="mx-10 text-colors-natural_100  hover:text-colors-primary_100 transition-all duration-200 font-Regular">Pricing</a>
          <a href="#" className="mx-10 text-colors-natural_100  hover:text-colors-primary_100 transition-all duration-200 font-Regular">Resources</a>
        </div>
        <div className=" flex justify-between items-center ">
          <button className="text-colors-natural_100  hover:text-colors-natural_400 font-Medium me-10 py-4 transition-all duration-200">Login</button>
          <button className="bg-colors-primary_100 hover:bg-colors-light-primary text-colors-white font-Medium me-10 py-4 px-10 rounded-full transition-all duration-200">Sing Up</button>
        </div>
      </div>
    );
  }else if(375<=window.innerWidth<1440){
    return(
      <div className="w-full  mobile:flex mobile:flex-col mobile:items-center mobile:gap-10  pb-8">
      <div className=" mobile:w-full mobile:flex mobile:justify-between mobile:px-5 mobile:mt-10">
        <img src="../../../public/images/logo.svg" alt="" />
        <FontAwesomeIcon onClick={bar} className="mobile:text-3xl" icon={faBars} />
    </div>
    <div className={`absolute top-28 z-10 mobile:bg-colors-primary_200 mobile:min-w-[250px]  mobile:py-10 mobile:rounded-lg ${menu} mobile:justify-center mobile:items-center
     mobile:gap-3 mobile:flex-col mobile:font-Medium mobile:font-bold mobile:text-colors-white  `}>
      <a className="hover:text-colors-primary_100 transition-all duration-200" href="">Features</a>
      <a className="hover:text-colors-primary_100 transition-all duration-200" href="">Pricing</a>
      <a className="hover:text-colors-primary_100 transition-all duration-200" href="">Resources</a>
      <hr  className="mobile:text-colors-white mobile:w-48"/>
      <a className="hover:text-colors-primary_100 transition-all duration-200" href="">Login</a>
      <button className="mobile:bg-colors-primary_100 hover:bg-colors-light-primary mobile:py-4 mobile:px-10 mobile:rounded-full">Sing Up</button>
    </div >
  
    </div>
      

    )
  }

};

export default Navbar;
