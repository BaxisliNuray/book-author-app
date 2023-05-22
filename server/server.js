const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
PORT = process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());


const authors = [
    {
        id: 1,
        name: 'Osamu Dazai',
        age: 38,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osamu_Dazai.jpg/640px-Osamu_Dazai.jpg',
        genre: 'Biography',
        isMale: true,
        isDead: true
    },
    {
        id: 3,
        name: 'Nene',
        age: 20,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Osamu_Dazai.jpg/640px-Osamu_Dazai.jpg',
        genre: 'oijdoiajd',
        isMale: false,
        isDead: false
    }
]





let id = undefined
if (authors.length == 0) {
    id = 1
}
else {
    let maxid = authors.sort((a, b) => b.id - a.id)[0].id
    id = ++maxid
}

app.get('/api', (req, res) => {
    res.send("WELCOME TO THIS API WHICH IS ABOUT AUTHORS ")
})
// CRUD

// get all authors
app.get('/api/authors', (req, res) => {
    const { name } = req.query
    if (name === undefined) {
        res.status(200).send(authors)

    }
    else {
        let search = authors.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim()))
        res.status(200).send(search)
    }

})

//get author by id
app.get('/api/authors/:id', (req, res) => {
    const ID = req.params.id
    const oneAuthor = authors.find((data) => data.id == ID)
    if (oneAuthor === undefined) {
        res.status(404).send("data not found")
        return
    }
    else {
        res.status(200).send(oneAuthor)
        return
    }
})

// delete author by id
app.delete("/api/authors/:id", (req, res) => {
    const id = req.params.id;
    const oneAuthor = authors.find((data) => data.id === parseInt(id));
    if (oneAuthor === undefined) {
        res.status(404).send("no such product found!");
        return;
    } else {
        const idx = authors.indexOf(oneAuthor);
        authors.splice(idx, 1);
        res.status(202).send("product deleted successfully!");
    }
});
// post author
app.post("/api/authors", (req, res) => {
    const { id, name, age, img, genre, isMale, isDead } = req.body
    const newAuthor = {
        id: id,
        name: name,
        age: age,
        img: img,
        genre: genre,
        isMale: isMale,
        isDead: isDead

    }
    id++
    authors.push(newAuthor)
    res.send("data posted")
})

// put
app.put("/api/authors/:id", (req, res) => {
    const id = req.params.id;
    const { name, age, img, genre, isMale, isDead } = req.body
    const existedAuthor = authors.find((x) => x.id == id);
    if (existedAuthor == undefined) {
        res.status(404).send("author not found!");
    } else {
        if (name) {
            existedAuthor.name = name;
        }
        if (age) {
            existedAuthor.age = age;
        }
        if (img) {
            existedAuthor.img = img;
        }
        if (genre) {
            existedAuthor.genre = genre;
        }
        if (isMale) {
            existedAuthor.isMale = isMale;
        }
        if (isDead) {
            existedAuthor.isDead = isDead;
        }
        res.status(200).send(` ${existedAuthor.name}`);
    }
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})