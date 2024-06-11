


const Hero = () => {
  return (
    <div className="flex flex-row-reverse justify-center items-center mt-20 ml-32 mb-28">
       <div className="w-1/2 ">
        <img src="../../../public/images/illustration-working.svg" alt="HeroImage" />
       </div>
       <div className="w-1/2">
        <h1 className="font-Medium font-bold text-7xl">More than just shorter links</h1>
        <h2 className="font-Regular text-colors-natural_100 w-[440px] mt-2">Build your brand's recognition and get detailed insights on how your links are performed </h2>
        <button className="font-Medium text-colors-white bg-colors-primary_100 px-10 py-4 rounded-full mt-10">Get Started</button>
       </div>
    </div>
  )
}

export default Hero