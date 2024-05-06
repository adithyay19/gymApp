import { Autocomplete, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { useState } from "react";

function RegisterPage() {
    
    const blood = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];
    // const [imgURL, setImgURL] = useState("");

    // const handleUpload = () => {
        // var file = "";
    // };


    return(
        <Container
            component="main"
            maxWidth="xs"
        >
            <CssBaseline>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'center',
                        alignItems: 'center',
                        marginTop: 8
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                    >
                        Register
                    </Typography>
                    <Box
                        component="form" noValidate sx={{mt:3}}
                    >
                        <Grid
                            container
                            spacing={2}

                            
                        >
                            <Grid
                                item
                                sm={5}
                            >
                                
                            
                                <Button
                                    component="label"
                                    variant="contained"
                                    fullWidth
                                    
                                    startIcon={<CloudUploadIcon />}
                                >
                                    Upload Image
                                    <input
                                        type="file"
                                        style={{
                                            clip: 'rect(0 0 0 0)',
                                            clipPath: 'inset(50%)',
                                            height: 1,
                                            // width: 1,
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap'
                                            
                                        }}
                                    />
                            </Button>
                            </Grid>
                            <Grid
                                item 
                                xs={10}
                                
                            >
                                <TextField
                                    required
                                    fullWidth
                                    id="fullname"
                                    label="Full Name"
                                    name="fullName"
                                    autoComplete="name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid
                                item 
                                xs={10}
                                sm={10}
                            >
                                <TextField
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    autoComplete="tel"
                                />
                            </Grid>
                            <Grid  
                                item 
                                xs={10}
                                sm={10}
                            >
                                <TextField
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid  
                                item 
                                xs={10}
                                sm={10}
                            >
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker 
                                            label="Date of Birth" 
                                            format="DD-MM-YYYY"
                                            sx={{
                                                minWidth: '100%',
                                                maxWidth: '100%'
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </Grid>
                            <Grid
                                item 
                                xs={10}
                                sm={10}
                            >
                                <Autocomplete
                                    fullWidth
                                    disablePortal
                                    id="bloodGroup"
                                    options={blood}
                                    renderInput={(params) => <TextField
                                        {...params}
                                        fullWidth
                                        required
                                        label="Blood Group"
                                        name="bloodGroup"
                                    />}
                                />
                            </Grid>
                            <Grid
                                item 
                                xs={10}
                                
                            >
                                <TextField
                                    fullWidth
                                    multiline
                                    id="address"
                                    label="Address"
                                    name="address"
                                    autoComplete="street-address"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </CssBaseline>
        </Container>
    );
}

export default RegisterPage;