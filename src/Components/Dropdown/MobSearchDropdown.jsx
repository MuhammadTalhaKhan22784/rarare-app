 import React, { useEffect, useState } from "react";
 import { Link } from "react-router-dom";
 import search2 from "../../Assets/Icon feather-search.png";
 import mobSearchIcon from "../../Assets/mob-search.png";
 
 import { Icon, InlineIcon } from "@iconify/react";
 import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";
 
 const MobSearchDropdown = () => {
   const [open, setOpen] = useState(false);
   const handleClick = ()=>{
     setOpen(false)
   }
   useEffect(()=>{
     window.addEventListener("click",handleClick);
     return()=>window.removeEventListener("click",handleClick);
   },[])
   return (
     <React.Fragment>
       <div className="dropdown search-dropdown mob-search-dropdown">
         <Link
           className="nav-link dropdown-toggle"
           to="#"
           id="dropdownMenuButton1"
           onClick={(e)=>{
             e.stopPropagation()
             setOpen(!open)
           }}
         >
           <img src={mobSearchIcon} alt=""/>
         </Link>
         {/* <button
           className="btn se_btn dropdown-toggle d-flex text_black"
           type="button"
           id="dropdownMenuButton1"
           data-bs-toggle="dropdown"
           aria-expanded="false"
         >
           Search
         </button> */}
         {open && <div onClick={(e)=> e.stopPropagation()}
           className="dropdown-menu search_menu show"
         >
           <div className="search_main">
             <div className="sinput1 border_solid bluegreen_border">
               <img src={search2} alt="" />
               <input
                 className="search_finput text_lightgray"
                 type="text"
                 placeholder="Search the community"
               />
             </div>
             <div className="sinput2 border_solid bluegreen_border">
               <img src={search2} alt="" />
               <input
                 className="search_sinput text_lightgray"
                 type="text"
                 placeholder="Search the community"
               />
             </div>
             {/* <div className="search_btn">
               <button className="bg_lightgreen text-white">Search</button>
             </div> */}
           </div>
        
           <div className="advance-filter mob-advance-filter">
             <li className="nav-item">
               {/* <Link to="#" className="nav-link">
                 <span className="menu-title">Advamce Filter</span>
                 <Icon
                   className="fs-5 down_arrow"
                   icon={baselineKeyboardArrowDown}
                 />
               </Link> */}
 
               <div className="af_submenu">
                 <ul className="af_submenu-item text_lightgray">
                   <div className="af_smi_1">
                     <li>
                       <div className="s_checkbox">
                         <label className="sc_label text_lightgray">
                           <input type="checkbox" name="key" value="value" />
                           <span className="text_black fw-bold">All </span>
                         </label>
                       </div>
                     </li>
                     <li>
                       <div className="s_checkbox">
                         <label className="sc_label text_lightgray">
                           <input type="checkbox" name="key" value="value" />
                           <span className="text_black fw-bold">Rants </span>
                         </label>
                       </div>
                     </li>
                     <li>
                       <div className="s_checkbox">
                         <label className="sc_label text_lightgray">
                           <input type="checkbox" name="key" value="value" />
                           <span className="text_black fw-bold">Raves </span>
                         </label>
                       </div>
                     </li>
                     <li>
                       <div className="s_checkbox">
                         <label className="sc_label text_lightgray">
                           <input type="checkbox" name="key" value="value" />
                           <span className="text_black fw-bold">Surveys </span>
                         </label>
                       </div>
                     </li>
                     <li>
                       <div className="s_checkbox">
                         <label className="sc_label text_lightgray">
                           <input type="checkbox" name="key" value="value" />
                           <span className="text_black fw-bold">Polls </span>
                         </label>
                       </div>
                     </li>
                     <li>
                       <div className="s_checkbox">
                         <label className="sc_label text_lightgray">
                           <input type="checkbox" name="key" value="value" />
                           <span className="text_black fw-bold">
                             Delibrations{" "}
                           </span>
                         </label>
                       </div>
                     </li>
                   </div>
                   <div className="af_smi_2">
                     <button className="bg_lightgreen border_none text-white">Search</button>
                     <span className="text_darkblue fw-bold">Hide Filters</span>
                   </div>
                 </ul>
               </div>
             </li>
           </div>
       
         </div>}
       </div>
 
       {/*     
       <li
         className="nav-item position_relative"
         onClick={() => {
           setVal("0");
         }}
       >
         <Link to="#" className="nav-link">
           <button className="dsadad">
             <img src={EN} alt="" /> <span>EN</span>
             <Icon
               className="fs-5 down_arrow"
               icon={baselineKeyboardArrowDown}
             />
           </button>
         </Link>
         <div
           className="submenu .lang_submenu"
           style={{ display: val === "0" ? "block" : "none" }}
         >
           <ul className="submenu-item .lang_item text_lightgray">
             <h2>Select a Language</h2>
             <li className="nav-item">
               
               <button className="lngdrpdwn_btn">
                 <img src={EN} alt="" /> <span>EN</span>
                 <Icon className="fs-5 down_arrow" />
               </button>
             </li>
             <li className="nav-item">
               <button className="lngdrpdwn_btn">
                 <img src={FR} alt="" /> <span>EN</span>
                 <Icon className="fs-5 down_arrow" />
               </button>
             </li>
           </ul>
         </div>
       </li>
      */}
     </React.Fragment>
   );
 };
 
 export default MobSearchDropdown;
 