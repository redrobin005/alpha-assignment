import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';


export default function ReferenceField({ handleChange, formFields, formErrors }) {

    return (
        <>
            <InputLabel
                htmlFor={"reference"}
                sx={{ marginTop: 2 }}
            >
                <Typography>Reference</Typography>
            </InputLabel>
            <TextField
                name="reference"
                label="Type reference"
                fullWidth
                sx={{ marginTop: 1 }}
                value={formFields.reference}
                onChange={handleChange}
                error={formErrors.reference.error}
                helperText={formErrors.reference.helperText}
            />
        </>
    )

}