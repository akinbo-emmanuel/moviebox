import logo from '../assets/Logo.png'
import menu from '../assets/menu.png'
import {AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div>
      <nav className=' mx-auto p-4 w-[81.5rem] flex justify-between items-center'>

        <div>
            <img className='w-[100px] lg:w-[140px]' src={logo} alt='MovieBox'></img>
        </div>

        <form className='rounded-lg p-1 flex items-center border border-white w-[200px] md:w-[400px] lg:w-[500px]'>
            <input className='bg-transparent outline-none w-full placeholder:text-white' placeholder='What do you want to watch?'></input>
            <AiOutlineSearch className='text-white' size={25}/>
        </form>

        <div className='flex justify-between items-center'>
            <p className='text-white text-[.8rem] lg:mr-5 cursor-pointer'>Sign in</p>
            <img className='bg-rose-700 rounded-full p-1 cursor-pointer' src={menu} alt='Meun Bar'></img>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
