import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GroupsIcon from '@mui/icons-material/Groups';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import PaymentsIcon from '@mui/icons-material/Payments';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export default function MiddleIcons() {
    return (
        <List sx={{ mt: 1 }}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon></HomeIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountBalanceIcon></AccountBalanceIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <GroupsIcon></GroupsIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ShuffleIcon></ShuffleIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <LegendToggleIcon></LegendToggleIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PaymentsIcon></PaymentsIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <TrendingUpIcon></TrendingUpIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <HelpOutlineIcon></HelpOutlineIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
        </List>
    );
}