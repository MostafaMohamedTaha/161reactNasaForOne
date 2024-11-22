import React from 'react'
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Button, Navbar, NavbarBrand,  NavbarToggle} from "flowbite-react";
const NavbarComponent = () => {
    return (
        <div>

            <Navbar fluid >
                <NavbarBrand href="https://flowbite-react.com">
                    <img src="https://picsum.photos/2000/1100" className="mr-3 size-6 rounded-full " alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">nasa project</span>
                </NavbarBrand>
                <div className="flex md:order-2">
                    <NavbarToggle />
                </div>

                <Flowbite>
                    <DarkThemeToggle />
                </Flowbite>
                
            </Navbar>

        </div>
    )
}

export default NavbarComponent
