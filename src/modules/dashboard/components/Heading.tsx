import { Button } from '@/components/ui'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
import React, { FC } from 'react'

interface HeadingProps {
  title: string
  link?: string
  count?: number
}

const Heading: FC<HeadingProps> = ({ title, count, link }) => {
  return (
    <div className='flex justify-between w-full bg-gray-300 p-4 rounded-lg'>
      <div className='flex gap-2 items-center'>
        <h1 className='text-lg font-bold'>{title}</h1>
        <span className='bg-primary text-white font-semibold w-6  h-6 text-center rounded-full'>{count}</span>
      </div>
      {link && <Button asChild>
        <Link href={link} >
          <CirclePlus /> Add New Item
        </Link>
      </Button>}
    </div>
  )
}

export default Heading