import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['((?!^/profile).*)', '((?!^/new-car).*)'],
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
