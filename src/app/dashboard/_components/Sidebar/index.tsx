import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  useMediaQuery,
} from '@mui/material';
import { Dashboard, Bookmark, WorkOutline } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStore from '@/store/index';
import Image from 'next/image';

const SIDEBAR_WIDTH = 240;

const menuItems = [
  {
    text: 'داشبورد',
    icon: <Dashboard />,
    path: '/dashboard',
  },
  {
    text: 'بوک مارک ها',
    icon: <Bookmark />,
    path: '/dashboard/bookmarks',
  },
  {
    text: 'لیست جاب ها',
    icon: <WorkOutline />,
    path: '/joblist',
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isMenuOpen, setMenuOpen } = useStore();
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  ); // Check for small screens

  return (
    <Drawer
      open={isMenuOpen}
      onClose={() => setMenuOpen(false)}
      variant={isSmallScreen ? 'temporary' : 'permanent'} // Temporary drawer for small screens
      anchor="right"
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          backgroundColor: 'secondary.main',
          direction: 'rtl',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 3 }}>
        <Box
          sx={{
            marginBottom: 3,
          }}
        >
          <Box sx={{ position: 'relative', width: '100%', height: '40px' }}>
            <Image
              src="/logo.webp"
              alt="Logo"
              fill
              style={{ objectFit: 'contain' }} // Ensures the image fits within the container
            />
          </Box>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              component={Link}
              href={item.path}
              sx={{
                color: 'white',
                direction: 'rtl',
                backgroundColor:
                  pathname === item.path
                    ? 'rgba(0, 0, 0, 0.04)'
                    : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40, color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
