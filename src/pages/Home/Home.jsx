import React, { useState } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import TextPage from '../../components/TextArea/TextArea'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import LeftBar from '../../components/LeftBar/LeftBar'
import RightBar from '../../components/RightBar/RightBar'
function Home() {
    const [fontSize, setSize] = useState(10)
    return (
        <div  className='main-container'>
            <div>
            <Navbar />
            <Toolbar value={fontSize} onFontSizeChange={(value) => setSize(value)} />
            <div className='gray-bg' style={{
                width: '90vw',
                display: 'flex',
            }}>
                <LeftBar />
                <TextPage fontSize={fontSize} />
            </div>
            </div>
            <RightBar />
        </div>

    )
}

export default Home