import React from 'react';
import reset from './reset.css'
import style from './card.css'
import {GoDiffAdded} from 'react-icons/go'
import {IconContext} from "react-icons";

const Card = ({prate}) => {
  const img = 'img/' + prate.name + '.png'
  return (
    <div className='card'>
      <img src={img} placeholder={prate.name}></img>
      <p className='prate-name'>{prate.name}</p>
      <div className='flex-box-horizontal-betwen'>
        <p className="price">R${prate.price}</p>
        <IconContext.Provider 
          value={{className: "icon"}}
        >
          <GoDiffAdded/>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Card