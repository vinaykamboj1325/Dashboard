import React from "react";

import { IoHomeOutline } from "react-icons/io5";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { LuWallet } from "react-icons/lu";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const Leftbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" style={{backgroundColor:"#2f3e46" , width:"50px",height:"100vh", display:"flex",alignItems:"flex-start",justifyContent:"center",position:"fixed"}}>
      <div className="container-fluid" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",marginTop:"80px",padding:'0px'}}>
       
        <div className="d-flex align-items-center" style={{display:"flex",flexDirection:"column",alignItems:"centre",justifyContent:"center"}}>

          <div className="dropdown" >
            <IoHomeOutline style={{fontSize: "24px",color:"white",fontWeight:"900",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>

          <div className="dropdown" style={{ fontSize: "24px",color:"#2F2F32"  }}>
            <BsFileEarmarkBarGraph  style={{fontSize: "24px",color:"white",fontWeight:"900",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>
          <div className="dropdown" style={{ fontSize: "24px" ,color:"#2F2F32" }}>
            <TbReportAnalytics  style={{fontSize: "24px",color:"white",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>
          <div className="dropdown" style={{ fontSize: "24px" ,color:"#2F2F32" }}>
            <LuWallet  style={{fontSize: "24px",color:"white",fontWeight:"900",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>
          <div className="dropdown" style={{ fontSize: "24px" ,color:"#2F2F32" }}>
            <RiShoppingBag4Line  style={{fontSize: "24px",color:"white",fontWeight:"900",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>

        
        </div>

        <div className="logout" style={{display:"flex",position:"absolute",bottom:"20px"}}>
           <FiLogOut style={{fontSize: "24px",color:"white",fontWeight:"900",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
        </div>
      </div>
    </nav>
  );
};

export default Leftbar;