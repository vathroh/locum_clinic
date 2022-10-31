import React from "react";
import {
  ProSidebarProvider,
  Menu,
  MenuItem,
  Sidebar,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
// import "./sidebar.css";


const SideBar = () => {
  return (
    <div style={{ backgroundColor: '#002F43', width: '220px', height: '100%', position: 'absolute' }}>
      <ProSidebarProvider>
        <Sidebar style={{ backgroundColor: '#002F43', width: '220px', height: '100%' }}>
          <div className="logotext">
            <p>Logo</p>
          </div>
        </Sidebar>
        <Sidebar style={{ backgroundColor: '#002F43', width: '220px', height: '100%' }}>
          <Menu iconShape="square">
            <MenuItem active={true} icon={<FiHome />}>
              Home
            </MenuItem>
            <MenuItem icon={<FaList />}>Category</MenuItem>
            <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
            <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
            <MenuItem icon={<BiCog />}>Settings</MenuItem>
          </Menu>
        </Sidebar>
        <Sidebar style={{ backgroundColor: '#002F43', width: '220px', height: '100%' }}>
          <Menu iconShape="square">
            <MenuItem icon={<FiLogOut />} onClick={console.log('logout')}>Logout</MenuItem>
          </Menu>
        </Sidebar>
      </ProSidebarProvider>
    </div>
  );
};

export default SideBar;