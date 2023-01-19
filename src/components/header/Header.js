import React from 'react';
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

function Header({handleToggleSidebar}) {
  return (
    <div className='header'>

      <FaBars className='header__menu' size={26} onClick={()=>handleToggleSidebar()}/>
      <img src={'https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872__340.png'} alt="Logo" className='header__logo' />

      <form>
        <input type="text" placeholder='Search' />
        <button type="submit"><AiOutlineSearch size={22} /></button>
      </form>
      <div className='header__icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'} alt="userImg" />
      </div>

    </div>
  )
}

export default Header