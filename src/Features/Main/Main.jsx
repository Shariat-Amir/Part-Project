import { CardBar } from "../../components"



const Main = () => {
  return (
    <>
    <div className="bg-colors-main w-full pb-20 ">
        <div  id="SearchBar" className="bg-colors-primary_200 bg-SerachBar-pattern bg-cover p-10 justify-center items-center mx-52
    rounded-lg relative top-[-60px]
    ">

      <form action="" className="flex items-center justify-center gap-10">
        <input className="py-3  px-4 rounded-lg w-[500px]" type="text" placeholder="Shorten a link here" />
        <button className="py-3 px-10 bg-colors-primary_100 rounded-lg font-Medium text-colors-white">Shorten It!</button>
      </form>
    
    </div>
        
        <div>
        <p className="text-center text-colors-natural_400 font-Medium font-bold text-3xl">Advanced Statistics</p>
        <p className="text-center font-Medium text-sm text-colors-natural_100 w-[400px] mx-auto mt-2"> Track how your links are performing across the web with our advanced statistics</p>
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