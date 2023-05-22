import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Helmet} from 'react-helmet'
import { Typography } from '@mui/material';
function Home() {
    return (
        <>
        <Helmet>
            <title>HOME</title>
        </Helmet>
            <Box style={{marginTop:'100px'}} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography style={{
                            fontSize:'70px',
                            marginTop:'40px'
                        }}>
                            Discover the <br /> Book Treasure
                        </Typography>
                        
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img style={{marginTop:'-80px'}} width='100%'  src="https://cdn3d.iconscout.com/3d/premium/thumb/stack-of-books-5158323-4315372.png" alt="" />
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}

export default Home