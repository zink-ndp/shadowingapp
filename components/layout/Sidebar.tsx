"use client";

import React, { useState } from "react";

// icons
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import HomeFilledIcon from "@mui/icons-material/HomeFilled";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

import { usePathname } from "next/navigation";
import Link from "next/link";

function Sidebar() {
  const url = "/dashboard";
  const [expanded, setExpanded] = useState(true);

  const links = [
    { name: "Home", href: url + "", icon: <HomeFilledIcon /> },
    {
      name: "My library",
      href: url + "/library",
      icon: <VideoLibraryIcon />,
    },
    {
      name: "Progress",
      href: url + "/progress",
      icon: <TimelineOutlinedIcon />,
    },
  ];

  const pathname = usePathname();

  return (
    <div
      className={` ${expanded ? "w-80" : "w-24  items-center "} flex flex-col p-6 bg-white border-r border-gray-200 transition-all duration-400`}
    >
      <div className="flex items-center mb-8 relative">
        <div className="bg-violet-500 text-white rounded-lg p-2">
          <TranslateOutlinedIcon />
        </div>
        <div className={` ${expanded ? "flex" : "hidden"} flex-col`}>
          <span className="ml-2 text-xl font-bold">ShadowPlayer</span>
          <span className="ml-2 text-xs font-bold text-violet-500">
            LEVEL: N2
          </span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`${expanded ? "rotate-90" : "-rotate-90"} absolute -right-9 w-6 h-6 rounded-full transition-all duration-200 hover:opacity-50`}
        >
          <ExpandCircleDownIcon className="text-violet-400 text-xl" />
        </button>
      </div>

      <nav className="space-y-4 flex-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block ${pathname === link.href ? "text-violet-500 bg-violet-200/50 font-semibold" : "text-gray-500"} font-medium flex items-center gap-3 rounded-xl px-4 py-2 hover:opacity-75 transition-all duration-200 ease-in-out`}
          >
            {link.icon} {expanded && link.name}
          </Link>
        ))}
      </nav>
      <hr className="text-gray-300 " />
      <div className={`${expanded ? "flex-row" : "flex-col"} flex gap-2 items-center py-4`}>
        <div className="h-12 w-12 rounded-full bg-violet-100 text-violet-500 flex items-center justify-center">
          <PersonIcon />
        </div>
        <div className={`${expanded ? "flex flex-col flex-1" : "hidden"}`}>
          <span className="font-semibold">Zin Zin</span>
          <span className="text-gray-600 text-sm">Premium Member</span>
        </div>
        <button>
          <LogoutIcon className="text-gray-500 hover:text-red-400 transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
