import '../App.css'
import PaymentsBanner from './PaymentsBanner';
import Sidebar from './sidebar/Sidebar';
import PaymentsTable from './table/PaymentsTable';
import Footer from './Footer';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function App() {
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
  console.log(regex.test('20/10/1998'))

  return (
    <>
      <Box display="flex">
        <PaymentsBanner
          setOpenSuccessAlert={setOpenSuccessAlert}
        ></PaymentsBanner>
        <Sidebar></Sidebar>
        <PaymentsTable></PaymentsTable>
      </Box>
      <Footer
        openSuccessAlert={openSuccessAlert}
        setOpenSuccessAlert={setOpenSuccessAlert}
      ></Footer>
    </>
  )
}