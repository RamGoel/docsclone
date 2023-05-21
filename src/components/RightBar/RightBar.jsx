import React from 'react'
import './RightBar.css'
function RightBar() {
  // sidebar which contains Icons of other google services
  return (
    <div className='rightbar-box'>
      <button className='rightbar-image-btn'>
        <img
          src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e"
          className='rightbar-image'
          alt="" />
      </button>

      <a href='https://calendar.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://keep.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://tasks.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://contacts.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://maps.google.com/' className='rightbar-app-icon'>
        <img
          src="https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png"
          width={20} height={20} alt="" />
      </a>

      <i className="fa fa-plus rightbar-action-icon"></i>
      <i className="fa fa-angle-right rightbar-action-icon"></i>
    </div>
  )
}

export default RightBar