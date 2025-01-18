import React from 'react'
import { IoMdSearch } from "react-icons/io";
const index = () => {
  return (
    <div className='search-box d-flex align-items-center gap-1'>
      <IoMdSearch fontSize={20} color='#8F95A9'/>
      <input className='search-input' type='search' placeholder='search'/>
    </div>
  )
}

export default index
