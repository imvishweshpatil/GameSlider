"use client"
import Image from "next/image";
import {Popover} from "@headlessui/react";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {XMarkIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const Navbar = () => {
    return (
        <Popover>
            <div className="header-container fixed w-full flex top-0 bg-black items-center px-6 py-2 h-14 z-50">
                <Image src={"/logo.png"} alt={"KIDAGAMES"} width={70} height={70}/>
                <div className="grow">
                    <div className={"hidden text-white sm:flex p-5"}>
                        <button className="ml-4">HOME</button>
                        <button className="ml-4">GAMES</button>
                        <button className="ml-4">PUBLISHING</button>
                        <button className="ml-4">ABOUT US</button>
                        <button className="ml-4">PRESS</button>
                        <button className="ml-4">CONTACT</button>
                    </div>
                </div>

                <div className="flex grow items-center justify-end sm:hidden">
                    <MagnifyingGlassIcon className="icons h-6 w-6 text-white" style={{marginRight:"20px"}}></MagnifyingGlassIcon>
                    <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-black-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden={"true"}></Bars3Icon>
                    </Popover.Button>
                </div>


                <Popover.Panel focus className={"absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"}>
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 w-100 h-100" style={{backgroundColor:"white"}}>
                        <div className="px-5 pt-5 pb-6">
                            <div className="flex items-center justify-between">
                                <Image src={"/logo.png"} alt={"handygames"} width={70} height={70}/>
                                <div className="-mr-2">
                                    <Popover.Button className={"inline-flex items-center justify-center rounded-md p-2 bg-white text-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus ring-inset foucs:ring-indigo-500"}>
                                        <span className={"sr-only"}>Close Menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden={"true"}></XMarkIcon>
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className={"grid gap-y-8"}>
                                    <button className="focus:outline-none focus:ring-2 focus-ring-inset focus:ring-gray-500 px-2">HOME</button>
                                    <button className="focus:outline-none focus:ring-2 focus-ring-inset focus:ring-gray-500 px-2">GAMES</button>
                                    <button className="focus:outline-none focus:ring-2 focus-ring-inset focus:ring-gray-500 px-2">PUBLISHING</button>
                                    <button className="focus:outline-none focus:ring-2 focus-ring-inset focus:ring-gray-500 px-2">ABOUT US</button>
                                    <button className="focus:outline-none focus:ring-2 focus-ring-inset focus:ring-gray-500 px-2">PRESS</button>
                                    <button className="focus:outline-none focus:ring-2 focus-ring-inset focus:ring-gray-500 px-2">CONTACT</button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
                <div className="hidden sm:block">
                    <MagnifyingGlassIcon className="icons h-6 w-6 text-white" style={{marginRight:"20px"}}></MagnifyingGlassIcon>
                </div>
            </div>
        </Popover>
    );
};

export default Navbar;