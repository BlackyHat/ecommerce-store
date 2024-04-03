import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  // publicRoutes: req => !req.url.includes('/profile'),
  publicRoutes: ['((?!^/profile).*)'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
