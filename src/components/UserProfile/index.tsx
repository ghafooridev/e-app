import { userIsAdmin } from '@/modules/users/services'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import UserMenu from '../UserMenu';

const UserProfile = async () => {
  const isAdmin = await userIsAdmin();
  console.log(isAdmin)
  return (
    <div>
      <SignedIn>
        {isAdmin ? <UserMenu /> : <UserButton />}
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div >
  )
}

export default UserProfile