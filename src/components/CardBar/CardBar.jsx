import Card from "../Card/Card"
const cardInformation=[
    {
        iconSrc:"../../../images/icon-brand-recognition.svg",
        title:"Brand Recognition",
        disc:"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
        iconSrc:"../../../images/icon-detailed-records.svg",
        title:"Detailed Records",
        disc:"Gain insights into who is clicking your links. Knoing when and where people engage with your content helps inform better decisions."
    },
    {
        iconSrc:"../../../images/icon-fully-customizable.svg",
        title:"Fully Customizable",
        disc:"Improve brand awarness and content discoverability through customizable links, supercharging audience engagement."
    },
]

const CardBar = () => {
  return (
    <div className="flex flex-col justify-center mt-32 items-center ">
    
      <div className="bg-colors-primary_100 desktop:h-3  desktop:w-[700px] h-[800px] w-[10px] desktop:relative desktop:top-60 absolute  desktop:mx-auto "></div>
    <div className="flex  flex-col py-5 desktop:flex-row desktop:gap-5 desktop:justify-center items-center z-10">
     
       <Card className="" icon={cardInformation[0].iconSrc} title={cardInformation[0].title} disc={cardInformation[0].disc}/>
       <Card className="mt-16" icon={cardInformation[1].iconSrc} title={cardInformation[1].title} disc={cardInformation[1].disc}/>
       <Card className="mt-36" icon={cardInformation[2].iconSrc} title={cardInformation[2].title} disc={cardInformation[2].disc}/>
       
    </div>
    </div>
  )
}

export default CardBar