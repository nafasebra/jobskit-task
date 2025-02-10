import { withAuth } from 'next-auth/middleware';

// Protect specific routes
export default withAuth({
  pages: {
    signIn: '/login', // Redirect unauthenticated users here
  },
});

// Apply middleware to specific routes
export const config = {
  matcher: ['/dashboard/:path*', '/dashboard'], // Protect `/dashboard` and its subpaths
};
