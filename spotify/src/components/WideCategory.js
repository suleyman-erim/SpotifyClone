/* eslint-disable jsx-a11y/alt-text */
function WideCategory({category}){
    return(
      
      <div style={{'background': category.color}} className=" rounded-lg flex-shrink-0 relative w-[27.375rem] h-[13.75rem]">
        <div className=" absolute inset-0 overflow-hidden">
          <h3 className=" px-4 text-[2.5rem] tracking-tighter font-semibold mt-4">
            {category.title}
          </h3>
          <img src={category.cover} className=" shadow-spotify w-40 h-40 rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0"></img>
        </div>
      </div>
    
    )
  }
  export default WideCategory