/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'Icon'
import { setSidebar } from 'stores/player'

export default function SidebarCover() {
    const current = useSelector(state => state.player.current)
    const dispatch = useDispatch()
  return (
    <div className=' pt-[100%] relative bg-black group'>
        <img src={current.image} className=' w-full h-full object-cover absolute top-0 left-0'></img>
        <button
                                onClick={() => dispatch(setSidebar(false))}
                                className="w-6 h-6 flex items-center -rotate-90 opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] absolute rounded-full top-1 right-1 justify-center bg-black">
                                <Icon size={16} name="arrowLeft"/>
                            </button>
    </div>
  )
}
