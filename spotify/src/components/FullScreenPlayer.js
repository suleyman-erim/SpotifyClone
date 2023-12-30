/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import { Icon } from 'Icon'
import { secondsToTime } from './Utils'
import CustomRange from './CustomRange'

export default function FullScreenPlayer({toggle, state, controls, volumeIcon}) {
    
    const { current } = useSelector(state => state.player)

    

  return (
    <div className=' h-full relative' onClick={controls[state?.playing ? 'pause' : 'play']}>
        <div className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30" style={{backgroundImage: `url(${current.image})`}}></div>
        <div className=' absolute top-14 left-8 text-white flex items-center opacity-70 gap-x-4'>
            <Icon size={34} name="logo"></Icon>
            <div className=' text-xs'>
                <p>PLAYING FROM PLAYLIST</p>
                <h6 className=' font-semibold mt-0.5'>{current.title}</h6>
            </div>
        </div>
        <div className="absolute bottom-36 left-8 flex items-center gap-x-5">
            <img src={current.image} className=' w-24 h-24 object-cover'></img>
            <div>
                <h3 className=' text-3xl font-semibold'>{current.title}</h3>
                <p className=' text-base font-semibold opacity-50'>{current.description}</p>
            </div>
        </div>
        <div onClick={e => {
            e.stopPropagation()
        }} className=' w-full absolute bottom-4 flex flex-col items-center px-8'>
           
            <div className=' w-full flex items-center mb-1.5 gap-x-2'> 
                <div className=' text-[0.688rem] text-white text-opacity-70'>
                    {secondsToTime(state?.time)}
                </div>
                <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
            
        <div className=' text-[0.688rem] text-white text-opacity-70'>
            {secondsToTime(state?.duration)}
        </div>
            
            </div>
            
            <div className=' flex items-center gap-x-5'>
            <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="shuffle"/>
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="playerPrev"/>
                    </button>
                    <button
                        onClick={controls[state?.playing ? 'pause' : 'play']}
                        className="w-16 h-16 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
                        <Icon size={24} name={state?.playing ? 'pause' : 'play'}/>
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="playerNext"/>
                    </button>
                    <button
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="repeat"/>
                    </button>
            </div>
            <div className=' flex items-center gap-x-3 absolute bottom-3 right-6'>
                    <button 
                        onClick={controls[state.muted ? 'unmute' : 'mute']}
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={16} name={volumeIcon}/>
                    </button>
                    <div className=' w-[5.813rem] max-w-full'>
                    <CustomRange
                        step={0.01}
                        min={0}
                        max={1}
                        value={state.muted ? 0 :  state?.volume}
                        onChange={value => {
                            controls.unmute()
                            controls.volume(value)}}
                    />
                    </div>
                    <button
                        onClick={toggle}
                        className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
                        <Icon size={24} name="FullScreenOff"/>
                    </button>
                </div>
            
            </div>
        </div>
    
  )
}
