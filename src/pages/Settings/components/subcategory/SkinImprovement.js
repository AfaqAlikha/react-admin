import React,{useState} from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { Button } from '@mui/material';
const SkinImprovement = () => {
   
    const [selectedField, setSelectedField] = useState("");
  
   
  
    const handleFieldChange = (event) => {
      setSelectedField(event.target.value);
    };
  
  return (
    <>
      <div className='skinimprovement-content'>
      <div className='d-flex align-items-center wrper-contant'>
      <div className='d-flex align-items-center justify-content-between main-contentwreper '>
       <p className='mb-0 content-title'>Chemical Peels</p>
      
       </div>
       <button className='d-flex align-items-center justify-content-center crouse-icon'>
        <RxCross2 fontSize={16} color='#585C6A'/>
       </button>
      </div>
      <div className='d-flex align-items-center wrper-contant'>
      <div className='d-flex align-items-center justify-content-between main-contentwreper '>
       <p className='mb-0 content-title'>Microdermabrasion</p>
      
       </div>
       <button className='d-flex align-items-center justify-content-center crouse-icon'>
        <RxCross2 fontSize={16} color='#585C6A'/>
       </button>
      </div>
      <div className='d-flex align-items-center wrper-contant'>
      <div className='d-flex align-items-center justify-content-between main-contentwreper '>
       <p className='mb-0 content-title'>Laser Treatments</p>
      
       </div>
       <button className='d-flex align-items-center justify-content-center crouse-icon'>
        <RxCross2 fontSize={16} color='#585C6A'/>
       </button>
      </div>
      <div className='d-flex align-items-center '>
      <div className='d-flex align-items-center justify-content-between main-contentwreper '>
       <p className='mb-0 content-title'>Light Therapies</p>
      
       </div>
       <button className='d-flex align-items-center justify-content-center crouse-icon'>
        <RxCross2 fontSize={16} color='#585C6A'/>
       </button>
      </div>
      </div>
      <div className='d-flex align-items-center gap-2 mt-1 px-2'>
      <select className="select-field" value={selectedField} onChange={handleFieldChange}>
        <option value="">Select Treatment...</option>
        <option value="orthopedics">Orthopedics</option>
        <option value="cardiology">Cardiology</option>
        <option value="neurology">Neurology</option>
      </select>
      <button className='d-flex align-items-center justify-content-center crouse-icon-FaPlus'>
        <FaPlus fontSize={16} color='#585C6A'/>
       </button>
      </div>
      <div className='d-flex align-items-center justify-content-center px-2 gap-3 mt-2'>
        <Button className='Cancel-button'>Cancel</Button>
        <Button className='Save-button'>Save</Button>
      </div>
    </>
  )
}

export default SkinImprovement
