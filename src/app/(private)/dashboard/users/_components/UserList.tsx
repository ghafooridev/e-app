
'use client';

import { useOptimistic } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui";
import { banUnBanUser, deleteUser } from '../_services'

import { Check, Trash2, X } from "lucide-react";
import { User } from "@clerk/nextjs/server";
import Heading from "@/modules/dashboard/components/Heading";


const BanUnBanAction = (props: { userId: string, banned: boolean }) => {
  const { userId, banned } = props;

  const [currentStatus, setCurrentStatus] = useOptimistic(banned, (state, newState) => {
    return newState as boolean
  })


  const handleBanUnBanUser = async (formData: FormData) => {
    setCurrentStatus(formData.get('banned'))
    await banUnBanUser(formData)
  }

  return (
    <form action={handleBanUnBanUser} className="flex justify-center gap-2 items-center">
      <input type="hidden" name="id" defaultValue={userId || ''} />
      <input type="hidden" name="banned" defaultValue={String(banned) || ''} />
      {currentStatus ?
        <Button variant="ghost"><X className="text-red-500" /></Button> : <Button variant="ghost"><Check className="text-green-500" /></Button>}
    </form>)
}


const DeleteAction = (props: { userId: string }) => {
  const { userId } = props
  return (


    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" >
          <Trash2 />
        </Button>

      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </DialogDescription>
          <DialogFooter>
            <form action={deleteUser} className="flex justify-center gap-2 items-center">
              <input type="hidden" name="id" defaultValue={userId || ''} />
              <Button variant="destructive" >
                <Trash2 /> Remove This User
              </Button>
            </form>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}


const UserList = ({ data, userCount }: { data: User[], userCount: number }) => {
  return (
    <div>
      <Heading title="Users" />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead >First Name</TableHead>

            <TableHead className="text-center">Last Name</TableHead>
            <TableHead className="text-center">Email</TableHead>
            <TableHead className="text-center">Action</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell >{item.firstName}</TableCell>
              <TableCell className="text-center">{item.lastName}</TableCell>
              <TableCell className="text-center">{item.emailAddresses[0].emailAddress}</TableCell>

              <TableCell className="text-center flex justify-center gap-2">
                <BanUnBanAction userId={item.id as string} banned={item.banned} />
                <DeleteAction userId={item.id as string} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">{userCount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>

  )
}
export default UserList