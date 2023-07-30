import Link from 'next/link'
import React from 'react'

const NavbarAdmin = () => {
  return (
    <div className='flex items-center justify-evenly border border-black p-3 text-orange-500 font-semibold text-xl'>
        <div>
          <Link href="/">
            Zomato
          </Link>
        </div>
        <div className='flex space-x-3 '>
            <Link href="/admin/Restaurent">Add Restaurent</Link>
            <Link href="/admin/AddFood">Add Food</Link>
        </div>
    </div>
  )
}

export default NavbarAdmin