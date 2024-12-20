"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 bg-[black] bg-opacity-80 text-white shadow-lg z-50">
      {/* Company Logo */}
      <div className="text-lg font-bold logo">
        <a href="/" className="w-full">
          <img src="/logo.png" alt="Sapper Intelligence Logo" className="h-12 w-auto" />
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
          <Link href="/" className="w-full">
              Home Page
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact" className="w-full">
              Contact Us
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
};

export default Navbar;
