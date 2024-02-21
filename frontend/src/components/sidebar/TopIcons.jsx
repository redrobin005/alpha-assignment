import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SearchIcon from '@mui/icons-material/Search';


export default function TopIcons() {
    return (
        <List sx={{ mt: 1 }}>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <EmojiEmotionsIcon></EmojiEmotionsIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ mt: 5 }}>
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon></SearchIcon>
                    </ListItemIcon>
                    <ListItemText />
                </ListItemButton>
            </ListItem>
        </List>
    );
}