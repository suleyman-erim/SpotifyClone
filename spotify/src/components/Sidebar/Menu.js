/* eslint-disable no-unused-vars */
import React from 'react';
import { Icon } from 'Icon';
import {NavLink} from 'react-router-dom';

export default function Menu() {
  return (
    <nav className=' px-2'>
        <ul className='flex flex-col'>
            <li>
                <NavLink activeClassName="bg-active text-white" exact to={"/"} className=' h-10 flex gap-x-4 items-center text-sm font-semibold rounded text-link hover:text-white px-4'>
                    <span>
                        <Icon name="home"></Icon>
                    </span>
                    Ana Sayfa
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="bg-active text-white" to={"/search"} className=' h-10 flex gap-x-4 items-center text-sm font-semibold rounded text-link hover:text-white px-4'>
                    <span>
                        <Icon name="search"></Icon>
                    </span>
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="bg-active text-white" to={"/collection"} className=' h-10 flex gap-x-4 items-center text-sm font-semibold rounded text-link hover:text-white px-4'>
                    <span>
                        <Icon name="collection"></Icon>
                    </span>
                    Kitaplığın
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}
