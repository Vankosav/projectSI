"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 bg-gray-800 text-white shadow-lg z-50">
      {/* Company Logo */}
      <div className="text-lg font-bold logo">
      <a href="#home" className="w-full">
      <img src="/Logo.png" alt="Sapper Intelligence Logo" className="h-12" />
      </a>
      </div>

      {/* Dropdown Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="p-2">
            {/* Hamburger Icon */}
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
              <span className="block h-0.5 w-6 bg-white"></span>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-700 text-white w-48">
          <DropdownMenuItem>
            <a href="#home" className="w-full">
              Home
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#about" className="w-full">
              About
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a href="#contact" className="w-full">
              Contact
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
