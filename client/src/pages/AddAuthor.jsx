import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { Helmet } from 'react-helmet'
import { useFormik } from 'formik'
import { ArtistValidation } from '../validation/Schema';
import { postAuthor } from '../api/reuests';
function AddAuthor() {
    const handleSubmit = (values, actions) => {
        postAuthor(values)
        actions.resetForm()
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            genre: '',
            img: '',
            female: 'false',
            male: 'true'
        },
        validationSchema: ArtistValidation,
        onSubmit: handleSubmit
    })

    return (
        <>
            <Helmet>
                <title>ADD AUTHORS</title>
            </Helmet>
            <form onSubmit={formik.handleSubmit} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} >
                <TextField
                    className={formik.errors.name && formik.touched.name ? "input-error" : ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="name"
                    value={formik.values.name}
                    type='text' style={{ display: 'block' }} id="outlined-basic" label="Name" variant="outlined" /> <br />
                {(formik.errors.name && formik.touched.name) && <small style={{ color: "red" }}>{formik.errors.name}</small>}
                <TextField
                    className={formik.errors.age && formik.touched.age ? "input-error" : ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="age"
                    value={formik.values.age}
                    type='number' style={{ display: 'block' }} id="outlined-basic" label="Age" variant="outlined" /><br />
                {(formik.errors.age && formik.touched.age) && <small style={{ color: "red" }}>{formik.errors.age}</small>}

                <TextField

                    className={formik.errors.genre && formik.touched.genre ? "input-error" : ""}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="genre"
                    value={formik.values.genre}
                    type='text' style={{ display: 'block' }} id="outlined-basic" label="Genre" variant="outlined" /><br />
                {(formik.errors.genre && formik.touched.genre) && <small style={{ color: "red" }}>{formik.errors.genre}</small>}

                <TextField

                    className={formik.errors.img && formik.touched.img ? "input-error" : ""}

                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="img"
                    value={formik.values.img}
                    type='url' style={{ display: 'block' }} id="outlined-basic" label="Image" variant="outlined" /><br />
                {(formik.errors.img && formik.touched.img) && <small style={{ color: "red" }} >{formik.errors.img}</small>}

                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                            onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value={formik.values.female}
                            name='female'
                            type='checkbox' control={<Radio />} label="Female" />
                        {formik.errors.female && formik.touched.female && (
                            <small style={{ color: "red" }}>{formik.errors.female}</small>)}

                        <FormControlLabel
                            onChange={formik.handleChange} onBlur={formik.handleBlur}
                            value={formik.values.male}
                            name="male"
                            type='checkbox' control={<Radio />} label="Male" />
                        {formik.errors.male && formik.touched.male && (
                            <small style={{ color: "red" }}>{formik.errors.male}</small>)}

                    </RadioGroup>
                </FormControl>
                <Button size="small" disabled={Object.keys(formik.errors).length > 0} style={{ color: 'blue', display: 'flex', justifyContent: 'start' }}>Add</Button>




            </form>
        </>
    )
}

export default AddAuthor