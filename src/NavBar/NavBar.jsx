import React from 'react'
import '../App.css'

function NavBar() {
  return (
    <div className=''>
  <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-around'>
    <div>
      <span className='text-4xl font-poppins cursor-pointer font-black'>Selling</span>
    </div>
     <ul className='md:flex md:items-center z-[-1] md:z-auto md:static gap-4 absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400] transition-opacity'>
      <li>
        <a href="#" className='text-xl hover:text-red-500 duration-500'>Home</a>
      </li>
      <li>
        <a href="#" className='text-xl hover:text-red-500 duration-500'>Products</a>
      </li>
      <li>
        <a href="#" className='text-xl hover:text-red-500 duration-500'>About Us</a>
      </li>
      <li>
        <a href="#" className='text-xl hover:text-red-500 duration-500'>Special</a>
      </li>
      <li>
        <a href="#" className='text-xl hover:text-red-500 duration-500'>Testimonials</a>
      </li>
      <li>
        <a href="#" className='text-xl hover:text-red-500 duration-500'>Blog</a>
      </li>
      <li>
        <a href="#" className='text-xl hover:text-red-500 duration-500'>Contact</a>
      </li> 
      
     
    </ul> 
  </nav>
 <section className='gros-image pt-5'>
   
  </section> 
</div>

  )
}

export default NavBar


