import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import SignInPage from './Routes/SignInPage';
import RegisterPage from './Routes/RegisterPage';
import { Box, CssBaseline } from '@mui/material';



const route = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage/>
  },

  {
    path: "/registration",
    element: <RegisterPage/>
  },
])

function App() {
  return(
    <>
      <CssBaseline/>
      <Box sx={{overflow: 'auto'}}>
        <RouterProvider router={route}/>
        {/* <SignInPage/> */}
        {/* <RegisterPage/> */}
      </Box>
    </>
  );
}

export default App;
