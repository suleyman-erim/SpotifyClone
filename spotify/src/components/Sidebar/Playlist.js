/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function PlayList() {
  return (
    <nav className=' mx-6 mt-2 py-2 flex-auto overflow-auto border-t border-white border-opacity-20'>
      <ul>
        {new Array(40).fill(
        <li>
          <a href="#" className=" text-s text-link hover:text-white flex h-8 items-center">
            Çalma Listem
          </a>
        </li>)}
      </ul>
    </nav>
  )
}
