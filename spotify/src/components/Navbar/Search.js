/* eslint-disable no-unused-vars */
import React from 'react'
import { Icon } from 'Icon'

export default function Search() {
  return (
    <div className=' mr-auto ml-4 relative'>
        <label htmlFor='search-input' className=' text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0'>
            <Icon size={24} name="search"></Icon>
        </label>
        <input autoFocus={true} type='text' id='search-input' className=' h-10 pl-12 outline-none text-black bg-white rounded-3xl placeholder-black/50 max-w-full w-[22.75rem]' placeholder="Sanatçılar, şarkılar veya Podcastler"></input>
    </div>
  )
}
