'use client'
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { LayoutDashboard, CalendarDays, ListTodo } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
export default function SideBar(){
const pathname = usePathname();
const linkClasses =
  "w-full rounded-lg px-4 py-3 data-[active]:bg-(--accent)/25  data-[active]:text-white";
      return (
    <section className=" flex flex-col items-baseline justify-between h-full p-4 border-r-2 border-[#25334A] rounded-2xl w-full">
        <div className="h-1/5 flex flex-col justify-center items-center w-full">
            <div className="flex justify-around align-middle items-center mt-auto">
                <img src="./logo.png" alt="logo app" className="w-auto h-20 mr-2" />
                <h3 className="text-(--primary) font-bold text-4xl">Minuta <span className="text-(--accent)">OS</span></h3>
            </div>
            <p className="mt-auto text-(--primary)/70 font-bold">Espacio de trabajo</p>
        </div>
      <NavigationMenu
        orientation="vertical"
        className="w-full h-3/5 max-w-none flex-none items-start justify-between  gap-5"
      >
        <NavigationMenuList className="w-full h-3/4 flex-col items-stretch gap-10">
          <NavigationMenuItem>
            <NavigationMenuLink
              active={pathname === "/"}
              className={`${linkClasses} flex-row items-center gap-3`}
              render={<Link href="/" />}
            >
              <LayoutDashboard className="size-6 shrink-0" aria-hidden="true" />
              <span>DASHBOARD</span>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              active={pathname === "/meetings"}
              className={`${linkClasses} flex-row items-center gap-3`}
              render={<Link href="/meetings" />}
            >
              <CalendarDays className="size-6 shrink-0" aria-hidden="true" />
              REUNIONES
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              active={pathname === "/pending"}
              className={`${linkClasses} flex-row items-center gap-3`}
              render={<Link href="/pending" />}
            >
              <ListTodo className="size-6 shrink-0" aria-hidden="true" />
              PENDIENTES
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              active={pathname === "/ask"}
              className={`w-full rounded-lg px-3 py-2 data-[active]:bg-(--accent)/25  data-[active]:text-white  flex-row items-center justify-baseline gap-1 mt-[-10`}
              render={<Link href="/ask" />}
            >
              <Image
                  src="/logo-icon.png"
                  alt=""
                  width={85}
                  height={85}
                  className="size-12 shrink-0 object-contain ml-[-9]"
                  aria-hidden="true"
                />
              PREGUNTAR A IA
            </NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
      <div className=" w-full h-1/5 border-solid border-t-2 border-[#25334A] p-2 flex justify-between py-5">
        
      </div>
    </section>
  )
}

