import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoLogoSnapchat } from "react-icons/io"

const Navbar = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary" style={{backgroundColor:"#2f3e46", position:"fixed",width:"100%",zIndex:"1"}}>
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
          <IoLogoSnapchat style={{color:'white'}}/>
          </a>
         
          <span className="input-group-text border-0 " id="search-addon">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            style={{ width: "250px" ,backgroundColor:"#2F2F32",color:"white",border:'none'}}
            
          />
          <i className="fas fa-search" style={{position:"relative",right:"30px",color:"#979797"}}></i>
          </span>
        </div>

        <div className="d-flex align-items-center">

          <div className="dropdown" >
            <IoSettingsOutline style={{fontSize: "24px",color:"black", backgroundColor:"#979797",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>

          <div className="dropdown" style={{ fontSize: "24px",color:"#2F2F32"  }}>
            <MdOutlineEmail  style={{fontSize: "24px",color:"black", backgroundColor:"#979797",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>
          <div className="dropdown" style={{ fontSize: "24px" ,color:"#2F2F32" }}>
            <FaRegBell  style={{fontSize: "24px",color:"black", backgroundColor:"#979797",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}/>
          </div>

          <div className="dropdown">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              height="25"
              alt="Black and White Portrait of a Man"
              loading="lazy"
              style={{fontSize: "24px",color:"black", backgroundColor:"#979797",borderRadius:"50%",margin:"7px",width:"30px",height:"30px",padding:"4px"}}
            />
          </div>
        </div>
      </div>
    </nav>

    </>
   
  );
};

export default Navbar;
