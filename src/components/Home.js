import React from 'react'
import Notes from './Notes'

export const Home = (props) => {
    const {showAlert, mode} = props
  return (
    <div>
      
      <Notes showAlert={showAlert} mode={mode}/>

    </div>
  )
}
