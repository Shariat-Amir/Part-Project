

const SearchBar = () => {
  return (
    <div className="bg-colors-primary_200 bg-SerachBar-pattern bg-cover p-10 justify-center items-center mx-52
    rounded-lg relative top-[-60px]
    ">

      <form action="" className="flex items-center justify-center gap-10">
        <input className="py-3  px-4 rounded-lg w-[500px]" type="text" placeholder="Shorten a link here" />
        <button className="py-3 px-10 bg-colors-primary_100 rounded-lg font-Medium text-colors-white">Shorten It!</button>
      </form>
    
    </div>
  )
}

export default SearchBar