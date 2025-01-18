import React,{useState} from 'react'

import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

import SearchBox from "../../components/SearchBox"
import { IoIosNotificationsOutline } from "react-icons/io";
import UserImg from"../../assets/images/Rectangle.png"
import Logo from"../../assets/images/logo.png"
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { IoMdMore } from "react-icons/io";
import Logout from '@mui/icons-material/Logout';
import { BsShieldLock } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { Divider } from '@mui/material';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationDropDown, setnotificationDropDown] = useState(null);
 
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const notificationopen = Boolean(notificationDropDown);
  const handleClickNotification = (event) => {
    setnotificationDropDown(event.currentTarget);
  };
  const handleCloseNotification = () => {
    setnotificationDropDown(null);
  };

 

  return (
    <header className='d-flex align-items-center'>
 <div className='container-fluid w-100 '>
     <div className='row d-flex align-items-center w-100'>
   <div className='col-sm-4 '>
    <Link to="/" className='logo-link d-flex align-items-center'>
   
   <img src={Logo} width={150} height={23} alt='logo'/>
    </Link>
   </div>

   <div className='col-sm-4 '>
   
   <SearchBox/>
   </div>
   <div className='col-sm-4 d-flex align-items-center justify-content-end gap-2 '>
 
  
 


 





   <Button   onClick={handleClickNotification} className='manue-btn'>
   <IoIosNotificationsOutline color='#6968EC' fontSize={25} /> 

   <p className='active-notification'></p>
   </Button>


    {/* user notificationDropDown manue  */}
    <Menu
        anchorEl={notificationDropDown}
        id="account-menu"
        open={notificationopen}
        onClose={handleCloseNotification}
        onClick={handleCloseNotification}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem  onClick={handleCloseNotification}>
        <div className='w-100'>

         <div className='d-flex align-items-center justify-content-between  mb-2'>
          <p className='mb-0 notification  '> Notifications <span>(23)</span></p>
          <IoIosSettings className='fs-4' color='#5e5d72'/>
          </div>
          <Divider/>

        
        </div>
        </MenuItem>

        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
      {[...new Array(5)].map((_, index) => {
       return (
      <MenuItem key={index} onClick={handleCloseNotification}>
        <Link to="" className="manue-notificaton">
          <div className="d-flex align-items-center justify-content-between gap-5">
            <div className="d-flex align-items-center gap-2">
              <img
                className="user-img-notification"
                width={30}
                height={30}
                src={UserImg}
                alt="user-img"
              />
              <p className="notification-heading mb-0">
                <b>Muhammad</b> added to his
                <br />
                favorite list <b>Leather belt</b>
                <br />
                <b>steve madden</b>
              </p>
            </div>
            <IoMdMore className="fs-4" color="#5e5d72" />
          </div>
        </Link>
      </MenuItem>
    );
  })}
</div>

       


       
        
      </Menu>
      {/* end */}

   <Button onClick={handleClick} className='d-flex align-items-center gap-3 text-black'>
     <div className='user-img'>
      <img width={40} height={40} src={UserImg} alt='user-img'  />
     </div>
     <div className='d-flex align-items-center gap-3'>
      <div className=''>
      <p className='mb-0 user-title'>Afaq Ali Khan</p>
      <p className='mb-0 username'>@afaqali</p>
      </div>
     
      <RiArrowDropDownLine color='#AEB2BF' className='fs-3'/>
     </div>
   </Button>
   {/* user profile manue  */}
   <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <RxAvatar fontSize="medium" />
          </ListItemIcon>
          MY Acount
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <BsShieldLock fontSize="medium" />
          </ListItemIcon>
          Reset Password
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
   </div>
     </div>
    </div>
    </header>
   
  )
}

export default Header
