import React from 'react'
import '../App.css'
// import image1 from './images/1.jpg';

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
 <section className='pt-5'>
    <div className='text-center'>
    <p className='text-gray-400'>POPULAR PRODUCTS</p>
    <h1 className='text-2xl font-black '>Our Products</h1>
    <p className='text-gray '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias <br />
     minima asperiores ab repellendus molestiae debitis, quidem deserunt magni, laudantium <br />
      rem delectus, veniam corporis minus!</p>
    </div>
    <div className='flex justify-center  m-auto pt-5 '>
      <div className=''><img src="/images/model1.jpg.webp" alt=""  className=' h-auto object-cover model m-auto'/>
      <p className='text-center hover:text-red-500 text-xl'>Wild West Hoodie</p>
      <div>
        <div>
          
        </div>
        <div></div>
      </div>
      </div>  
   <div className=''><img src="/images/model_2_bg.jpeg" alt="" className='h-auto object-cover model m-auto'/></div>
    <div className=''><img src="images/model_3_bg.jpg.webp" alt="" className=' h-auto object-cover model m-auto'/></div>
    </div>
  </section>  
</div>

  )
}

export default NavBar