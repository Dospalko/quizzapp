"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";


const Navbar = () => {
 

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2">
      <ul className="flex">
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

  
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
  
      </ul>

    
     
     
        <div>
       
        </div>
   
    </div>
  );
};

export default Navbar;