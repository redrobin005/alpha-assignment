import './App.css'
import PaymentsBanner from './PaymentsBanner';
import Sidebar from './Sidebar';
import PaymentsTable from './PaymentsTable';
import Footer from './Footer';
import Box from '@mui/material/Box';


export default function App() {

  return (
    <>
      <Box display="flex">
        <PaymentsBanner></PaymentsBanner>
        <Sidebar></Sidebar>
        <PaymentsTable></PaymentsTable>
      </Box>
      <Footer></Footer>
    </>
  )
}