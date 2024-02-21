import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import NewPaymentForm from '../form/NewPaymentForm';
import NewPaymentConfirmation from './NewPaymentConfirmation';
import Axios from 'axios'
import DialogHeader from './DialogHeader';


export default function NewPaymentDialog({
    open, handleClose, page, setPage,
    handleChange, formFields,
    formErrors, setFormErrors,
    setOpenSuccessAlert
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
                    setOpenSuccessAlert(true)
                } else {
                    console.log('Unsuccessful payment creation')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            PaperProps={{
                component: 'form',
            }}
        >
            <DialogHeader page={page} handleClose={handleClose}></DialogHeader>
            <Divider></Divider>
            {
                page === 0 &&
                <NewPaymentForm
                    handleChange={handleChange}
                    formFields={formFields} formErrors={formErrors}
                    handleNext={handleNext}>
                </NewPaymentForm>
            }
            {
                page === 1 &&
                <NewPaymentConfirmation 
                formFields={formFields} 
                handleSubmit={handleSubmit}>
                </NewPaymentConfirmation>
            }
        </Dialog>
    )

}