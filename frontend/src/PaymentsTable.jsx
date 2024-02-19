import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import { Typography } from '@mui/material';


export default function PaymentsTable() {
    const [payments, setPayments] = useState([])

    useEffect(() => {
        Axios.get('http://localhost:3000/payments')
            .then((res) => {
                setPayments(res.data)
            })
            .catch(function (err) {
                console.log(err);
            });
    }, [])

    return (
        <TableContainer component={Paper} style={{ marginTop: 80 }}>
            <Table stickyHeader >
                <TableHead>
                    <TableRow>
                        <TableCell>Payment ID</TableCell>
                        <TableCell align="left">Recipient</TableCell>
                        <TableCell align="left">Amount</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Reference</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {payments.length > 0 && payments.map((payment) => (
                        <TableRow
                            key={payment.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {`P-ID${payment.id}`}
                            </TableCell>
                            <TableCell align="left">{payment.recipient}</TableCell>
                            <TableCell align="left">{payment.amount}</TableCell>
                            <TableCell align="left">{payment.date}</TableCell>
                            <TableCell align="left">{payment.reference}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        {/* Pagination here with /<TablePagination></TablePagination> */}
                    </TableRow>
                </TableFooter>
            </Table>
            {payments.length === 0 &&
                <Typography>No payments available, please create new payments to see data.</Typography>
            }
        </TableContainer>
    )
}