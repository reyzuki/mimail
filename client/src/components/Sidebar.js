import React from 'react';
import {Button} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import NearMeIcon from "@material-ui/icons/NearMe";
import SidebarOption from "./SidebarOption";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
      <div className='sidebar'>
    <Button startIcon={<AddIcon fontSize="large"/>} className='sidebar_compos'>Compose</Button>
  
     <SidebarOption Icon={InboxIcon} title="Inbox" number={21} selected={true}/>
     <SidebarOption Icon={NearMeIcon} title="Sent" number={30}/>
     <SidebarOption Icon={StarIcon} title="Starred" number={14}/>
     <SidebarOption Icon={ExpandMoreIcon} title="More" number={3}/>
     
  </div>

 
  )
  
}

export default Sidebar;
