/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'
import Title from './Title'
import SongItem from './SongItem'

export default function Section({title, more = false, children, items}) {

    

  return (
    <section>
      <Title title={title} more={more}></Title>
        <div className=' grid grid-cols-5 gap-x-6 '>
            {items.map(item => <SongItem item={item} key={item.id}></SongItem>
            )}
        </div>
    </section>
  )
}
