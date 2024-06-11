import Card from "../Card/Card"
const cardInformation=[
    {
        iconSrc:"../../../public/images/icon-brand-recognition.svg",
        title:"Brand Recognition",
        disc:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
        iconSrc:"../../../public/images/icon-detailed-records.svg",
        title:"Detailed Records",
        disc:"Gain insights into who is clicking your links. Knoing when and where people engage with your content helps inform better decisions."
    },
    {
        iconSrc:"../../../public/images/icon-fully-customizable.svg",
        title:"Fully Customizable",
        disc:"Improve brand awarness and content discoverability through customizable links, supercharging audience engagement."
    },
]

const CardBar = () => {
  return (
    <div className="flex flex-col justify-center mt-32 ">
    
      <div className="bg-colors-primary_100 h-3  w-[800px]  relative top-60  mx-auto "></div>
    <div className="flex gap-5 justify-center items-center z-10">
     
       <Card className="" icon={cardInformation[0].iconSrc} title={cardInformation[0].title} disc={cardInformation[0].disc}/>
       <Card className="mt-16" icon={cardInformation[1].iconSrc} title={cardInformation[1].title} disc={cardInformation[1].disc}/>
       <Card className="mt-36" icon={cardInformation[2].iconSrc} title={cardInformation[2].title} disc={cardInformation[2].disc}/>
       
    </div>
    </div>
  )
}

export default CardBar