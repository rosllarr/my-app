"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Images from "./images";


export default function Page() {

    const [menuList, setMenuList] = useState([
        { name: "home", link: "/client" },
        { name: "product", link: "/product" }
    ]);

    const [isFullMenu, setIsfullMenu] = useState(true);

    useEffect(() => {
        console.log(window)

    }, [])

    return (
        <main className="flex">
            <div className={`bg-yellow-900 lg:bg-black h-screen p-5 ${isFullMenu ? "w-96" : "w-40"}`}>
                <div className="flex justify-between">
                    <div>Cloudnity</div>
                    <div onClick={() => setIsfullMenu(!isFullMenu)}>x</div>
                </div>
                <div className="flex flex-col mt-10">
                    {menuList.map((menu, index) => (
                        <Menu key={index} link={menu.link} name={menu.name} />
                    ))}
                </div>
            </div>
            <div className="p-5">
                <Images />
            </div>
        </main>
    );
}

function Menu({ link, name }) {
    return (
        <Link href={link} className="py-2 hover:font-bold">{name}</Link>
    )
}