import React, { useState } from "react";
import Sidebar from "./Sidebar";
import SidebarComp from "./SidebarComp";
import Admin from "./Admin";
import Produit from "./Produit";

export default function Dashbord(){
    const [activePage, setActivePage] = useState("Admin"); // "admin" par défaut


    return (<div className="flex">
        <Sidebar setActivePage={setActivePage} />   
        <div className="flex-1 p-4">
          <SidebarComp>
            {activePage === "Admin" ? <Admin/> : <Produit />}
          </SidebarComp>
        </div>
      </div>)

}