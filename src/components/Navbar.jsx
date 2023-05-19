import React, { useState } from 'react'
import './Navbar.css'
function Navbar() {
    const [pageData, setData] = useState({
        docName: 'Untitled Document'
    })
    return (
        <div className='infobar'>
            <img src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png' width={40} />
            <div>
                <div>
                    <input value={pageData.docName} />
                    <img width={15} src='https://static.vecteezy.com/system/resources/previews/010/158/762/non_2x/star-icon-sign-symbol-design-free-png.png' />
                </div>
                <div>
                    <ul>
                        <li><a href='#'>Fill</a></li>
                        <li><a href='#'>Edit</a></li>
                        <li><a href='#'>View</a></li>
                        <li><a href='#'>Insert</a></li>
                        <li><a href='#'>Format</a></li>
                        <li><a href='#'>Tools</a></li>
                        <li><a href='#'>Extension</a></li>
                        <li><a href='#'>Help</a></li>
                    </ul>
                </div>
            </div>
            <div>
                2
            </div>
        </div>
    )
}

export default Navbar