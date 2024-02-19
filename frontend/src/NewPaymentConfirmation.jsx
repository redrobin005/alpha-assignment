import { useState } from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { DialogContent, DialogActions } from '@mui/material';


export default function NewPaymentConfirmation({ formFields, handleSubmit }) {

    const fieldNames = {
        'recipient': 'Recipient Name',
        'currency': 'Currency',
        'amount': 'Amount',
        'date': 'Value Date',
        'reference': 'Reference',
    }

    return (
        <>
            <DialogContent>
                <Card sx={{ backgroundColor: '#F6F6F6' }}>
                    <CardContent sx={{ marginTop: 1, marginBottom: 2 }}>
                        <Typography>
                            <strong>Payment Summary</strong>
                        </Typography>
                        {Object.keys(formFields).map(name => {
                            return (
                                <>
                                    <Grid container sx={{ justifyContent: "space-between", marginTop: 2 }} >
                                        <Grid>
                                            <Typography sx={{ fontSize: 14 }} key={name}>
                                                {fieldNames[name]}
                                            </Typography>
                                        </Grid>
                                        <Grid>
                                            <Typography sx={{ fontSize: 14 }} key={name}>
                                                {name === 'date' ? formFields[name]['$d'].toLocaleDateString("en-GB")
                                                    : formFields[name]}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Divider key={name}></Divider>
                                </>
                            )
                        })}
                    </CardContent>
                </Card>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={handleSubmit}>Complete</Button>
            </DialogActions>
        </>
    )

}