import { Card, CardContent, Skeleton, Box } from '@mui/material';

const PostSkeleton = () => {
  return (
    <Card sx={{ maxWidth: "100%", mb: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Skeleton variant="circular" width={40} height={40} sx={{ mr: 2 }} />
          <Skeleton variant="text" width={120} height={24} />
        </Box>
        
        <Skeleton variant="rectangular" width="100%" height={200} sx={{ mb: 2 }} />
        
        <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="80%" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="60%" height={20} />
        
        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
          <Skeleton variant="rounded" width={60} height={24} />
          <Skeleton variant="rounded" width={60} height={24} />
          <Skeleton variant="rounded" width={60} height={24} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostSkeleton;