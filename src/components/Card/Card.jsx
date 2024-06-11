

const Card = ({icon , title , disc ,className}) => {
  return (
    <div className={`w-[300px] h-[250px] bg-colors-white rounded-lg ${className}`}>
       <div className="bg-colors-primary_200 w-[65px] h-[65px] rounded-full flex justify-center items-center relative -top-6 left-5">
        <img  className='w-[35px] h-[30px] ' src={icon} alt="" />
       </div>
       <div className="font-Medium px-5">
       <p className="text-colors-primary_200 font-extrabold text-lg ">{title}</p>
       <p className="text-sm text-colors-natural_100 mt-3">{disc}</p>
       </div>
    </div>
  )
}

export default Card