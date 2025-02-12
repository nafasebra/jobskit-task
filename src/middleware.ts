import { withAuth } from 'next-auth/middleware';

// Protect specific routes
export default withAuth({
  pages: {
    signIn: '/login',
  },
});
// Apply middleware to specific routes
export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'], // Protect `/dashboard` and its subpaths
};
