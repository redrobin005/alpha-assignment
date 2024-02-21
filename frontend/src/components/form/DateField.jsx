import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Typography from '@mui/material/Typography';

export default function DateField({ handleChange, formFields, formErrors }) {
    return (
        <Grid container >
            <Grid item xs={5.5}>
                <InputLabel
                    htmlFor={"date"}
                    sx={{ marginTop: 2 }}
                >
                    <Typography>Value Date</Typography>
                </InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            name="date"
                            value={formFields.date}
                            onChange={
                                date => handleChange({
                                    target: {
                                        name: 'date', value: dayjs(date)
                                    }
                                })}
                            format="DD-MM-YYYY"
                            slotProps={{
                                textField: {
                                    error: formErrors.date.error,
                                    helperText: formErrors.date.helperText,
                                },
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </Grid>
        </Grid>
    )
}