import React, { useEffect } from 'react'

// "use client";

import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
} from "react-icons/hi";



const Sidebar1 = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function fetchDataFromApi() {
            const Nasa_key = import.meta.env.VITE_NASA_API_KEY
            const url = `https://api.nasa.gov/planetary/apod` + `?api_key=${Nasa_key}`
            try {
                const res = await fetch(url)
                const apiData = await res.json()
                setData(apiData)
                console.log(apiData)
            } catch (err) {
                console.log(err.message)
            }
        }
        fetchDataFromApi()
    }, [])
    return (
        <div>
            <div className="flex min-h-[10vh] items-center justify-center">
                <Button onClick={() => setIsOpen(true)}>Show navigation</Button>
            </div>
            {
                data ?
                    (<Drawer open={isOpen} onClose={handleClose}>
                        <Drawer.Header title={data.title} titleIcon={() => <></>} />
                        <Drawer.Items>
                            <Sidebar
                                aria-label="Sidebar with multi-level dropdown example"
                                className="[&>div]:bg-transparent [&>div]:p-0"
                            >
                                <div className="flex h-full flex-col justify-between py-2">
                                    <div>
                                        <form className="pb-3 md:hidden">
                                            <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                                        </form>
                                        <Sidebar.Items>
                                            <Sidebar.ItemGroup>
                                                <Sidebar.Item >
                                                Copyright :{data.copyright}
                                                </Sidebar.Item>
                                                <Sidebar.Item  >
                                                Date: {data.date}
                                                </Sidebar.Item>
                                                <Sidebar.Item  >
                                                <img src={data.hdurl} alt="" />
                                                </Sidebar.Item>


                                                <Sidebar.ItemGroup className='dark:text-white'>
                                                    <p className='flex justify-center capitalize text-2xl'>explanation</p>
                                                    {data.explanation}
                                                </Sidebar.ItemGroup>


                                            </Sidebar.ItemGroup>
                                            <Sidebar.ItemGroup>
                                                <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                                                    Docs
                                                </Sidebar.Item>
                                                <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
                                                    Components
                                                </Sidebar.Item>
                                                <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                                                    Help
                                                </Sidebar.Item>
                                            </Sidebar.ItemGroup>
                                        </Sidebar.Items>
                                    </div>
                                </div>
                            </Sidebar>
                        </Drawer.Items>
                    </Drawer>) :
                    <Drawer open={isOpen} onClose={handleClose}>
                        <Drawer.Header title="MENU" titleIcon={() => <></>} />
                        <Drawer.Items>
                            <Sidebar
                                aria-label="Sidebar with multi-level dropdown example"
                                className="[&>div]:bg-transparent [&>div]:p-0"
                            >
                                <div className="flex h-full flex-col justify-between py-2">
                                    <div>
                                        <form className="pb-3 md:hidden">
                                            <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                                        </form>
                                        <Sidebar.Items>
                                            <Sidebar.ItemGroup>
                                                <Sidebar.Item href="/" icon={HiChartPie}>
                                                    Dashboard
                                                </Sidebar.Item>
                                                <Sidebar.Item href="/e-commerce/products" icon={HiShoppingBag}>
                                                    Products
                                                </Sidebar.Item>
                                                <Sidebar.Item href="/users/list" icon={HiUsers}>
                                                    Users list
                                                </Sidebar.Item>
                                                <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                                                    Sign in
                                                </Sidebar.Item>
                                                <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                                                    Sign up
                                                </Sidebar.Item>
                                            </Sidebar.ItemGroup>
                                            <Sidebar.ItemGroup>
                                                <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                                                    Docs
                                                </Sidebar.Item>
                                                <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
                                                    Components
                                                </Sidebar.Item>
                                                <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                                                    Help
                                                </Sidebar.Item>
                                            </Sidebar.ItemGroup>
                                        </Sidebar.Items>
                                    </div>
                                </div>
                            </Sidebar>
                        </Drawer.Items>
                    </Drawer>
            }


        </div>
    )
}

export default Sidebar1
