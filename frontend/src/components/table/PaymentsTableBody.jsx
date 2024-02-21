import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


export default function PaymentsTableBody({ payments }) {
    return (
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
                    <TableCell align="left">{payment.currency}{payment.amount}</TableCell>
                    <TableCell align="left">{payment.date}</TableCell>
                    <TableCell align="left">{payment.reference}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    )
}