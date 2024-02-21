import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';


export default function RecipientField({ handleChange, formFields, formErrors }) {

    return (
        <>
            <InputLabel
                htmlFor={"recipient"}
            >
                <Typography>Recipient</Typography>
            </InputLabel>
            <TextField
                name="recipient"
                label="Type recipient name"
                fullWidth
                sx={{ marginTop: 1 }}
                value={formFields.recipient}
                onChange={handleChange}
                error={formErrors.recipient.error}
                helperText={formErrors.recipient.helperText}
            />
        </>
    )

}