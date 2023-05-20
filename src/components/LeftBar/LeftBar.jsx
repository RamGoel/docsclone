import React, { useState } from 'react'
import Toolbar from '../Toolbar/Toolbar'
import TextPage from '../TextArea/TextArea'
import Navbar from '../Navbar/Navbar'
import './LeftBar.css'
function LeftBar() {
  const [fontSize, setSize] = useState(10)
  return (

    <div style={{
      width: '20vw',
      margin: '10px 20px',
    }}>
      <div className='leftbar-arrow'>
        <i className="fa fa-arrow-left"></i>
      </div>
      <p className='leftbar-head'>Outline</p>
      <p className='leftbar-para'><i>Headings that you add to the document will appear here.</i></p>
    </div>


  )
}

export default LeftBar