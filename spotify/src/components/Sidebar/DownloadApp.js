/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Icon} from 'Icon';

export default function DownloadApp() {
  return (
    <a href='#' className=' h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white gap-x-4 items-center px-6'>
        <Icon name='download' size={20}></Icon>
        Uygulamayı Yükle
    </a>
  )
}
