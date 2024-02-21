import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import TopIcons from './TopIcons';
import MiddleIcons from './MiddleIcons';
import BottomIcons from './BottomIcons';

const drawerWidth = 60;

export default function Sidebar() {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: '#3780B6',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <TopIcons></TopIcons>
            <Toolbar />
            <MiddleIcons></MiddleIcons>
            <Toolbar />
            <BottomIcons></BottomIcons>
        </Drawer>
    );
}