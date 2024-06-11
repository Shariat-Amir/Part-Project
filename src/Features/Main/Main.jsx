import { CardBar } from "../../components"
import './Main.css'



const Main = () => {
  return (
    <>
    <div className="bg-colors-main w-full pb-20 ">
        <div  id="SearchBar" className="  MainDesktop bg-colors-primary_200 bg-SerachBar-pattern bg-cover ">

      <form action="" className="flex desktop:items-center desktop:justify-center desktop:gap-10
      flex-col gap-10 p-5 justify-center mx-auto  w-full
      ">
        <input className="desktop:py-3  desktop:px-4 rounded-lg desktop:w-[500px] h-[50px] w-full pl-5" type="text" placeholder="Shorten a link here..." />
        <button className="desktop:py-3 desktop:px-10 bg-colors-primary_100 rounded-lg h-[50px] font-Medium text-colors-white">Shorten It!</button>
      </form>
    
    </div>
        
        <div>
        <p className="text-center text-colors-natural_400 font-Medium font-bold text-3xl bg">Advanced Statistics</p>
        <p className="text-center font-Medium text-sm text-colors-natural_100 desktop:w-[400px] w-[250px] mx-auto mt-2  "> Track how your links are performing across the web with our advanced statistics</p>
       <CardBar/>
        </div>
        
    </div>
    <div className="w-full  bg-colors-primary_200 bg-boost-desktop bg-cover text-center py-20 ">
    <p className="font-Medium font-bold text-3xl text-colors-white  ">Boost your links today</p>

    <button className="bg-colors-primary_100 px-10 py-4 rounded-full font-Medium text-colors-white mt-10">Get Started</button>
    </div>
    </>
  )
}

export default Main