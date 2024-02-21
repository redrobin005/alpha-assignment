import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function PaymentsTableHead() {
    return (
        <TableHead>
            <TableRow>
                <TableCell>Payment ID</TableCell>
                <TableCell align="left">Recipient</TableCell>
                <TableCell align="left">Amount</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Reference</TableCell>
            </TableRow>
        </TableHead>
    )
}