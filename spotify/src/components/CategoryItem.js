/* eslint-disable jsx-a11y/alt-text */
function Category({category}){
    return(
      
      <div style={{'background': category.color}} className=" rounded-md before:pt-[100%] before:block relative">
        <div className=" absolute inset-0 overflow-hidden">
          <h3 className=" px-4 text-2xl tracking-tighter font-semibold mt-4">
            {category.title}
          </h3>
          <img src={category.cover} className=" shadow-spotify w-[12.25rem] h-[12.25rem] rotate-[25deg] translate-x-[18%] translate-y-[-2%] absolute bottom-0 right-0"></img>
        </div>
      </div>
    
    )
  }
  
  export default Category