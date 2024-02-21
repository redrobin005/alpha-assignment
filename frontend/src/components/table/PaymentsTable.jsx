import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import Axios from 'axios'
import PaymentsTableHead from './PaymentsTableHead';
import PaymentsTableBody from './PaymentsTableBody';


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
                <PaymentsTableHead></PaymentsTableHead>
                <PaymentsTableBody payments={payments}></PaymentsTableBody>
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