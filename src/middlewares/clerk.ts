import { getUserById } from '@/modules/users/services'
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isPrivateRoute = createRouteMatcher(['/dashboard(.*)'])

export default clerkMiddleware(async (auth, request) => {

  if (isPrivateRoute(request)) {
    const _auth = await auth()
    const userId = _auth.userId
    const user = await getUserById(userId as string)
    if (!user) await auth.protect()
    if (!user?.privateMetadata?.isAdmin) return new Response('Forbidden', { status: 403 });
    await auth.protect()
  }

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}