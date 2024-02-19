import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import NewPaymentForm from './NewPaymentForm';
import NewPaymentConfirmation from './NewPaymentConfirmation';
import Axios from 'axios'

const steps = ['Details', 'Summary'];

export default function NewPaymentDialog({
    open, handleClose, page, setPage,
    handleChange, formFields,
    formErrors, setFormErrors
}) {

    // form validation
    const handleNext = () => {
        let valid = true

        Object.keys(formFields).forEach(name => {
            if (!formFields[name]) {
                valid = false
                setFormErrors(prevErrors => {
                    return ({ ...prevErrors, [name]: { 'error': true, 'helperText': `*Required` } })
                })
            } else {
                setFormErrors(prevErrors => {
                    return ({ ...prevErrors, [name]: { 'error': false, 'helperText': '' } })
                })
            }
        });

        if (valid) { setPage(1) }
    }

    const handleSubmit = () => {
        // change date from date object to locale string for db storage
        formFields = {
            ...formFields,
            ['date']: formFields['date']['$d'].toLocaleDateString("en-GB")
        }

        Axios.post("http://localhost:3000/payments", formFields)
            .then(res => {
                if (res.status === 201) {
                    console.log('Payment successfully created!')
                    window.location.reload()
                    // show success alert
                } else {
                    console.log('Unsuccessful payment creation')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                PaperProps={{
                    component: 'form',
                }}
            >
                <DialogTitle sx={{ textAlign: 'center' }}>New Payment</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Box sx={{ width: '100%', marginBottom: 3 }}>
                    <Stepper activeStep={page} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Divider></Divider>
                {
                    page === 0 &&
                    <NewPaymentForm
                        handleChange={handleChange}
                        formFields={formFields} formErrors={formErrors}
                        handleNext={handleNext}>
                    </NewPaymentForm>
                }
                {page === 1 && <NewPaymentConfirmation formFields={formFields} handleSubmit={handleSubmit}></NewPaymentConfirmation>}
            </Dialog>
        </>
    )

}