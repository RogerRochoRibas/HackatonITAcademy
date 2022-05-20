import React from 'react'
import '../../css/ProfileTeam.css'


export const ProfileTeam = ({name, fotoPerfil}) => {
  return (
    <div>
        <img className='profilePic mx-5'
        src={fotoPerfil} alt="" />
    <p>{name}</p>
    </div>
  )
}