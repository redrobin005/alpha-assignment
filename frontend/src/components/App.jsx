import '../App.css'
import PaymentsBanner from './PaymentsBanner';
import Sidebar from './sidebar/Sidebar';
import PaymentsTable from './table/PaymentsTable';
import Footer from './Footer';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function App() {
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

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