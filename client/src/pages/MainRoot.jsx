import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

function MainRoot() {
    return (
        <>
            <Navbar />
            <Container maxWidth='lg'>
            <Outlet />
            </Container>


        </>
    )
}

export default MainRoot