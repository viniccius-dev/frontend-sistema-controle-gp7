import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';

const mainListItems = [
    { text: 'Contagem', icon: <AssignmentRoundedIcon /> }
];

export function MenuContent() {
    return (
        <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between'}}>
            <List dense>
                {mainListItems.map((item, index) => (
                <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton selected={index === 0}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Stack>
    );
}