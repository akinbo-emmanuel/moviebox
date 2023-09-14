import { useState } from 'react'
import menu from '../../assets/menu.png'
import logo from '../../assets/LogoTwo.png'

const Nav = () => {

const [nav, setNav] = useState(false)

  return (
    <div>
      <nav className='lg:hidden w-full flex justify-between items-center p-4 border border-1 border-b-gray-300'>
        <div>
            <img className='w-[100px] lg:w-[140px]' src={logo} alt='MovieBox'></img>
        </div>
            
        <div className='flex justify-between items-center'>
            <img onClick={() => setNav(!nav)} className='bg-rose-700 rounded-full p-1 cursor-pointer' src={menu} alt='Menu Bar'></img>
        </div>
      </nav>
    </div>
  )
}

export default Nav
