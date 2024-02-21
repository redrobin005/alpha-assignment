import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import SuccessAlert from './SuccessAlert';


export default function Footer({openSuccessAlert, setOpenSuccessAlert}) {
    return (
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <SuccessAlert
        openSuccessAlert={openSuccessAlert}
        setOpenSuccessAlert={setOpenSuccessAlert}
      ></SuccessAlert>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="© Copyright Footer" />
        </BottomNavigation>
      </Paper>
    )
}