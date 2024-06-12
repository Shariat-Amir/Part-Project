import { useForm } from "react-hook-form"
import { CardBar } from "../../components"
import axios from 'axios'
import './Main.css'
import { useState } from "react"




const Main = () => {

  const {register,handleSubmit ,formState:{errors}}=useForm()
  const [result , setResult]=useState("")
  const[allResults , setAllResults]=useState([])



  
const onSubmit=async(data)=>{
const input=data.url


const response =await axios.post('https://cleanuri.com/api/v1/shorten' , new URLSearchParams({
  'url':input
}),{
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
  }
})
const newResult={
  url:input,
  shortUrl:response.data.result_url
}


setResult(response.data.result_url);
setAllResults((prevResults)=>[...prevResults, newResult ])

}
const copyToClipboard=()=>{
  if(navigator.clipboard.readText !== result){
    console.log(navigator.clipboard.read);
    navigator.clipboard.writeText(result)
    .then(()=>{
     
  
    })
    .catch(error=>{
      console.log('faild copy' +error);
    })
  }
 
}


  return (
    <div>
    <div className="bg-colors-main w-full pb-20 ">
        <div  id="SearchBar" className="  MainDesktop bg-colors-primary_200 bg-SerachBar-pattern bg-cover mt-32 desktop:mt-0 ">

      <form onSubmit={handleSubmit(onSubmit)} className="flex  desktop:flex-row desktop:items-center desktop:justify-center desktop:gap-10
      flex-col gap-10 p-5 justify-center mx-auto  w-full
      ">
        <input  {...register("url" ,{
          required:true
          })} className={`desktop:py-3  desktop:px-4 rounded-lg desktop:w-[500px] h-[50px] w-full pl-5 ${errors.url && "border-2 border-colors-secondary"}`} type="text" placeholder="Shorten a link here..." />
        <button type='submit' className="desktop:py-3 desktop:px-10 bg-colors-primary_100 hover:bg-colors-light-primary rounded-lg h-[50px] font-Medium text-colors-white transition-all duration-200">Shorten It!</button>
      </form>
    </div>
    
      {
       <div className="results-container">
       {allResults.map((result, index) => (
         <div key={index} className="bg-colors-white desktop:min-w-[500px] desktop:in-h-12 desktop:text-right mx-10 flex  flex-col desktop:flex-row justify-between my-5 font-Medium">
           <p className="m-6">{result.url}</p>
           <div className="flex desktop:flex-row flex-col  desktop:border-none border-t-2 border-colors-secondary mx2 justify-between gap-5 ">
             <p className="m-6">{result.shortUrl}</p>
             <div className="flex flex-col">
               <button className="bg-colors-primary_100 hover:bg-colors-primary_200 hover:text-colors-white py-3 px-10 rounded-lg m-4 transition-all duration-200" onClick={() => copyToClipboard(result.shortUrl)}>Copy</button>
              
             </div>
           </div>
         </div>
       ))}
     </div>
       
      
      }

    
      
        <div>
        <p className="text-center text-colors-natural_400 font-Medium font-bold text-3xl bg">Advanced Statistics</p>
        <p className="text-center font-Medium text-sm text-colors-natural_100 desktop:w-[400px] w-[250px] mx-auto mt-2  "> Track how your links are performing across the web with our advanced statistics</p>
       <CardBar/>
        </div>
        
    </div>
    <div className="w-full  bg-colors-primary_200 bg-boost-desktop bg-cover text-center py-20 ">
    <p className="font-Medium font-bold text-3xl text-colors-white  ">Boost your links today</p>

    <button className="bg-colors-primary_100 hover:bg-colors-light-primary px-10 py-4 rounded-full font-Medium text-colors-white mt-10 transition-all duration-200">Get Started</button>
    </div>
    </div>
  )
}

export default Main