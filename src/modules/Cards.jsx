import React from 'react';
import reset from './reset.css'
import style from './cards.css'
import Card from './Card'

const menu = [
  {
    id: 1,
    name: 'Lite',
    price: 25.50
  },
  {
    id: 2,
    name: 'Lite',
    price: 25.50
  },
  {
    id: 3,
    name: 'Lite',
    price: 25.50
  },
  {
    id: 4,
    name: 'Lite',
    price: 25.50
  },
  {
    id: 5,
    name: 'Lite',
    price: 25.50
  },
  {
    id: 6,
    name: 'Lite',
    price: 25.50
  }
]

const Cards = () => {
  return (
    <div className='cards'>
      {menu.map(e => {
        return <Card key={e.id} prate={e}/>
      })}
    </div>
  )

}

export default Cards