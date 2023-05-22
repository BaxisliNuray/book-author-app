import * as yup from 'yup'

export const ArtistValidation = yup.object().shape({
    name: yup.string().min(3, "name cant be less than 3").required("name REQUIRED"),
    age: yup.number().integer().positive().required("age REQUIRED"),
    genre:yup.string().required("genre REQUIRED"),
    img:yup.string().max(100,"URL can not be this much").required("ulr REQUIRED"),
    female:yup.boolean().oneOf([false]).required("ve yene error"),
    male:yup.boolean().oneOf([true]).required("ve yene error")
})