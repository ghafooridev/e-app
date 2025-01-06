'use client'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { uploadImage } from "../services"
import NoImage from "@/assets/images/noImage.jpg"
import Image from "next/image"

const UploadFile = () => {
  const onChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;
    if (files) uploadImage(files[0]!)
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" onChange={onChangeFile} />
      <Image width={100} height={100} src={NoImage} alt="product image" />
    </div>
  )
}
export default UploadFile