/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import logo from 'img/logo.svg'
import Menu from './Sidebar/Menu'
import Playlist from './Sidebar/Playlist'
import { Icon } from 'Icon'
import DownloadApp from './Sidebar/DownloadApp'
import { useSelector } from 'react-redux'
import SidebarCover from './Sidebar/SidebarCover'


export default function Sidebar() {

  const sidebar = useSelector(state => state.player.sidebar)
  return (
    <aside className=' w-60 pt-6 flex flex-shrink-0 flex-col bg-black'>
      <a href='#' className=' mb-7 px-6'>
        <img src={logo} className=' h-10'></img>
      </a>

      <Menu></Menu> 
      <nav className=' mt-6'>
        <ul>
          <li>
            <a href='#' className=' py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className=' w-6 h-6 flex items-center justify-center mr-4 bg-white group-hover:bg-opacity-100 bg-opacity-60 rounded-sm text-black'>
                <Icon name="plus" size={12}></Icon>
              </span>
              Çalma Listesi Oluştur
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='#' className=' py-2 px-6 flex items-center group text-sm text-link font-semibold hover:text-white'>
              <span className=' w-6 h-6 flex items-center justify-center mr-4 bg-gradient-to-br to-blue-300 from-purple-500 text-white rounded-sm opacity-60 group-hover:opacity-100'>
                <Icon name="heartFilled" size={12}></Icon>
              </span>
              Beğenilen Şarkılar
            </a>
          </li>
        </ul>
      </nav>
      <Playlist></Playlist>
      <DownloadApp></DownloadApp>

      {sidebar && <SidebarCover></SidebarCover>}
      
    
      
    </aside>
  )
}
