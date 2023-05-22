import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, Container } from '@mui/material';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: '#fffbf7', boxShadow: 'none' }} position="static">
                    <Container>
                        <Toolbar style={{ display: 'flex' }} >
                            <Link style={{
                                color: 'black',
                                fontFamily: 'Impact',
                                fontSize: '35px',
                                textDecoration:'none'
                            }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                BOOKS
                            </Link>
                            <div style={{display:'flex',margin:'0 auto '}}>
                                <Button><Link style={{textDecoration:'none',color:'black'}} to='/authors'>Authors</Link></Button>
                                <Button><Link style={{textDecoration:'none',color:'black'}} to='/add-author'>Add Authors</Link></Button>

                            </div>
                        </Toolbar>
                        <div style={{borderBottom:'1px solid #DADEDF'}}></div>
                    </Container>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar