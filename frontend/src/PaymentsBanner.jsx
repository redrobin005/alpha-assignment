import Button from '@mui/material/Button';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NewPaymentDialog from './NewPaymentDialog';
import { useState } from 'react';


const drawerWidth = 60;

export default function PaymentsBanner() {
    const [open, setOpen] = useState(false)
    const [page, setPage] = useState(0)
    const [formFields, setFormFields] = useState({
        'recipient': '',
        'currency': '',
        'amount': '',
        'date': null,
        'reference': '',
    })
    const [formErrors, setFormErrors] = useState({
        'recipient': {'error': false, 'helperText': ''},
        'currency': {'error': false, 'helperText': ''},
        'amount': {'error': false, 'helperText': ''},
        'date': {'error': false, 'helperText': ''},
        'reference': {'error': false, 'helperText': ''},
    })

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        setFormFields({
            'recipient': '',
            'currency': '',
            'amount': '',
            'date': null,
            'reference': '',
        })
        setPage(0)
    };

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFields({ ...formFields, [name]: value })
    }

    return (
        <AppBar
            position="fixed"
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
                backgroundColor: 'white',
            }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black' }}>
                    Payments
                </Typography>
                <Button
                    variant="contained"
                    sx={{backgroundColor: '#3780B6'}}
                    startIcon={<ControlPointIcon />}
                    onClick={handleOpen}>
                    New Payment
                </Button>
                <NewPaymentDialog
                    open={open}
                    handleClose={handleClose}
                    page={page}
                    setPage={setPage}
                    formFields={formFields}
                    handleChange={handleChange}
                    formErrors={formErrors}
                    setFormErrors={setFormErrors}
                ></NewPaymentDialog>
            </Toolbar>
        </AppBar>
    )
}