/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import categories from "data/categories"
import Title from "components/Title"
import ScrollContainer from 'react-indiana-drag-scroll'
import favoreiteCategories from "data/favoreite-categories"
import { useEffect, useRef, useState } from "react"
import { Icon } from "Icon"
import Category from "components/CategoryItem"
import WideCategory from "components/WideCategory"


function Search() {

  const favoritesRef = useRef()
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  useEffect(() => {
    if(favoritesRef.current) {
      const scrollHandle = () => {
        const isEnd   = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
        const isBegin = favoritesRef.current.scrollLeft === 0

        setPrev(!isBegin)
        setNext(!isEnd)
      }
      
      scrollHandle()
      favoritesRef.current.addEventListener('scroll', scrollHandle)
      return() => {
        favoritesRef.current.removeEventListener('scroll', scrollHandle)
      }
    }
  },[favoritesRef])

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 200
  }
  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 200
  }
  return (
    <>
    <section className=" mb-8"> 
    <Title title="En çok dinlediğin türler"></Title>
    <div className=" relative">
    {prev && <button className=" w-12 h-12 absolute -left-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06]  rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoritesPrev}><Icon name='prev' size={50}></Icon></button>}
    {next && <button className=" w-12 h-12 absolute -right-6 z-10 top-1/2 -translate-y-1/2 hover:scale-[1.06] rounded-full bg-white text-black flex items-center justify-center" onClick={slideFavoritesNext}><Icon name='next' size={50}></Icon></button>}
    
    <ScrollContainer
      innerRef={favoritesRef}
      className=" flex overflow-x gap-x-6 scrollable">
      {favoreiteCategories.map((category , index) => <WideCategory key={index} category={category}></WideCategory>)}
    </ScrollContainer>
    </div>
    </section>

    <section>
    <Title title="Hepsine Gözat"></Title>
    <div className=" grid grid-cols-5 gap-6 ">
      {categories.map((category , index) => <Category key={index} category={category}></Category>)}
    </div>
    </section>
    
    </>
  )
}

export default Search