import React from 'react'
import Header from './Header'

const Layouts = ({children}) => {
  return (
    <>

    <Header/>
    <br></br>
    <div className='content'>
        {children}

    </div>
      
    </>
  )
}

export default Layouts
