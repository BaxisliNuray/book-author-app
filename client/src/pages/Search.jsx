import { TextField } from '@mui/material'
import React from 'react'

function Search({storage, setAuthors}) {
    let handleSearch = (e) => {
        const search = storage.current.filter(x=>x.name.toLowerCase().includes(e.target.value.toLowerCase().trim()))
        setAuthors(search)
    }
    return (
        <>
            <TextField style={{ marginTop: '3%' }} onChange={handleSearch} id="outlined-basic" label="Search..." variant="outlined" />
        </>
    )
}

export default Search