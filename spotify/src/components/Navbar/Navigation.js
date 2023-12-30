/* eslint-disable no-unused-vars */
import React from 'react';
import { Icon } from 'Icon';
import { useHistory } from 'react-router-dom';

export default function Navigation() {

    const history = useHistory()

  return (
    <nav className='flex items-center gap-x-4'>
        <button onClick={() => history.goBack()} className=' w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon size={22} name="prev"></Icon>
        </button>
        <button onClick={() => history.goForward()} className=' w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-70'>
            <Icon size={22} name="next"></Icon>
        </button>
    </nav>
  )
}
