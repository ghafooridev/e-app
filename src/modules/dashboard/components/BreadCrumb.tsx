'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import { usePathname } from "next/navigation"


const BreadCrumb = () => {

  const pathName = usePathname()
  const breadcrumbItems = pathName.split('/');

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          return (
            <div key={item} className="flex items-center">
              <BreadcrumbItem>
                <Link href={`/${item}`}>{item}</Link>
              </BreadcrumbItem>
              {(index !== 0 && index !== breadcrumbItems.length - 1) && < BreadcrumbSeparator className="ml-2" />}
            </div>
          )
        })
        }

      </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumb