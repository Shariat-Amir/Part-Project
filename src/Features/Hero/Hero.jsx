import './Hero.css'


const Hero = () => {
  return (
    <div className="HeroDesktop  pb-20">
       <div className="  w-full desktop:w-1/2">
        <img src="../../../images/illustration-working.svg" alt="HeroImage" />
       </div>
       <div className="desktop:w-1/2 w-full text-center">
        <h1 className="font-Medium font-bold text-7xl ">More than just shorter links</h1>
        <h2 className=" font-Regular text-colors-natural_100 w-[300px] mx-auto desktop:w-[440px]  mt-2">Build your brand's recognition and get detailed insights on how your links are performed </h2>
        <button className="font-Medium text-colors-white bg-colors-primary_100  hover:bg-colors-light-primary px-10 py-4 rounded-full mt-10 transition-all duration-200">Get Started</button>
       </div>
    </div>
  )
}

export default Hero