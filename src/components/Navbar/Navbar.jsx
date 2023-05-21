import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { copyURLToClipboard } from '../../utils/plugins'
function Navbar() {
    const [pageData, setData] = useState({
        docName: 'Untitled document'
    })

    useEffect(e => {
        var newTimeout;
        if (pageData.docName === '') {
            newTimeout = setTimeout(() => {

                setData({ ...pageData, docName: 'Untitled Document' })
            }, 1000)
        }


        return () => clearTimeout(newTimeout)
        //eslint-disable-next-line
    }, [pageData.docName])

    const [isSharing, setSharing] = useState(false)
    const [isFavourite, setFavourite] = useState(false)
    return (
        <div className='infobar'>
            <div id='navbar-left'>
                <img alt='smdkms' src='https://cdn-icons-png.flaticon.com/512/5968/5968517.png' width={35} height={35} />
                <div>
                    <div>
                        <input value={pageData.docName} onChange={(e) => setData({ docName: e.target.value })} />
                        <i onClick={()=>setFavourite(!isFavourite)} className={`${(isFavourite) ? 'fa favourited' : 'fa-regular'} fa-star`}></i>
                    </div>
                    <div>
                        <div>
                            <a href='#asjdn'>File</a>
                            <a href='#asjdn'>Edit</a>
                            <a href='#asjdn'>View</a>
                            <a href='#asjdn'>Insert</a>
                            <a href='#asjdn'>Format</a>
                            <a href='#asjdn'>Tools</a>
                            <a href='#asjdn'>Extension</a>
                            <a href='#asjdn'>Help</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id='navbar-right'>
                <i className='fa-regular fa fa-clock'></i>
                <i className='fa-regular fa fa-message'></i>
                <i className=' fa fa-camera'></i>
                <button className='share-btn' onClick={() => {
                    if (isSharing === false) {
                        copyURLToClipboard()
                        setSharing(true)
                    }
                }}>
                    {(isSharing)
                        ? <div><i title='Link Copied to Clipboard' className=' fa fa-unlock mr-2'></i>
                            Sharing</div>
                        : <div><i title='Click to Share Document' className='fa fa-lock mr-2'></i>
                            Share</div>}

                </button>
            </div>
        </div>
    )
}

export default Navbar