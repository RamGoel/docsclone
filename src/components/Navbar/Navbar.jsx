import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { copyURLToClipboard } from '../../utils/plugins'
function Navbar() {
    const [pageData, setData] = useState({
        docName: 'Untitled Document'
    })

    useEffect(e=>{
        var newTimeout;
        if(pageData.docName===''){
            newTimeout=setTimeout(()=>{

                setData({...pageData, docName:'Untitled Document'})
            },1000)
        }


        return ()=>clearTimeout(newTimeout)
        //eslint-disable-next-line
    },[pageData.docName])

    const [isSharing, setSharing] = useState(false)
    return (
        <div className='infobar'>
            <div id='navbar-left'>
                <img alt='smdkms' src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png' width={40} />
                <div>
                    <div>
                        <input value={pageData.docName} onChange={(e) => setData({ docName: e.target.value })} />
                        <img alt='sndjnsd' width={15} src='https://static.vecteezy.com/system/resources/previews/010/158/762/non_2x/star-icon-sign-symbol-design-free-png.png' />
                    </div>
                    <div>
                        <ul>
                            <li><a href='#asjdn'>File</a></li>
                            <li><a href='#asjdn'>Edit</a></li>
                            <li><a href='#asjdn'>View</a></li>
                            <li><a href='#asjdn'>Insert</a></li>
                            <li><a href='#asjdn'>Format</a></li>
                            <li><a href='#asjdn'>Tools</a></li>
                            <li><a href='#asjdn'>Extension</a></li>
                            <li><a href='#asjdn'>Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id='navbar-right'>
                <i className='fa fa-clock'></i>
                <i className='fa fa-message'></i>
                <i className='fa fa-camera'></i>
                <button className='share-btn' onClick={() => {
                    if(isSharing===false){
                        copyURLToClipboard()
                        setSharing(true)
                    }
                }}>
                    {(isSharing)
                        ? <div><i className='fa fa-unlock mr-2'></i>
                            Sharing</div>
                        : <div><i className='fa fa-lock mr-2'></i>
                            Share</div>}

                </button>
            </div>
        </div>
    )
}

export default Navbar