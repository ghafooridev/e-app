'use client';

import { FolderKanban, BaggageClaim, Users, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui"
import Link from "next/link"
import { usePathname } from "next/navigation"

const items = [
  {
    title: "Products",
    url: "/dashboard/products",
    icon: FolderKanban,
  },
  {
    title: "Invoices",
    url: "/dashboard/invoices",
    icon: BaggageClaim,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const SideBar = () => {
  const pathName = usePathname();
  const isCurrentPath = (path: string) => pathName.includes(path.toLowerCase())
  console.log(isCurrentPath('Products'))
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>digital shop</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`${isCurrentPath(item.title) && 'bg-primary text-white'}`}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
export default SideBar