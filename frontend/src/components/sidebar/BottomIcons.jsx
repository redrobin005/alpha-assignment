import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function BottomIcons() {
    return (
        <List sx={{ mt: 10 }}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <NotificationsIcon></NotificationsIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon></SettingsIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon></AccountCircleIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
        </List>
    );
}