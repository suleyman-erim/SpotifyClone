/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "Icon";

export default function Auth() {
  const user = {
    name: "Süleyman Erim",
    avatar:
      "https://e1.pxfuel.com/desktop-wallpaper/746/626/desktop-wallpaper-cool-profile-gaming-gaming-profile.jpg",
  };

  return (
    <Menu as="nav" className={"relative"}>
      {({open}) => (
        <>
          <Menu.Button
            className={
              `flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`
            }
          >
            <img
              src={user.avatar}
              className=" w-8 h-8 rounded-full p-0.5 mr-2"
            ></img>
            <span className=" text-sm font-semibold mr-2">{user.name}</span>
            <span className={open && 'rotate-180'}>
            <Icon size={16} name="downDir"></Icon>
            </span>
          </Menu.Button>
          <Menu.Items
            className={
              "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
            }
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex justify-between items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-10"}`}
                  href="#"
                >
                  Account 
                  <Icon size={16} name="external"></Icon>
                </a>
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                  Profile 
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` h-10 flex items-center px-2 text-sm rounded ${active && "bg-white bg-opacity-20"}`}
                  href="#"
                >
                  Log Out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
}
