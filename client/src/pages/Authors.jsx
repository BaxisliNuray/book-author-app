import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container} from '@mui/material';
import { Row, Col } from 'antd';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { deleteAuthorbyID, getAllAuthors } from '../api/reuests';
import Swal from "sweetalert2";
import Search from "../pages/Search"
import { Helmet } from 'react-helmet';

const Home = () => {
  const [authors, setAuthors] = useState([])
  const storage=React.useRef([])

  useEffect(() => {
    getAllAuthors().then(resp => {
      setAuthors(resp)
      storage.current=resp
    })
  }, [])

 

  return (

    <>
      <Helmet>
        <title> AUTHORs</title>
      </Helmet>
      <Container maxWidth="lg">
      <Search storage={storage} setAuthors={setAuthors}/>
        <Row
          gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}>
          {authors && authors.map((author) => {

            return <Col key={author.id} className="gutter-row" span={6}>
              <Card sx={{ maxWidth: 250, marginTop: '20px' }}>
                <CardMedia
                  sx={{ height: 270, objectFit: 'cover' }}
                  image={author.img} />
                <CardContent>
                  <Typography style={{ fontSize: '18px' }} gutterBottom variant="h5" component="div"><Link to={`/author/${author.id}`} style={{ color: 'black' }}>
                    {author.name}
                  </Link></Typography>
                  <Typography gutterBottom variant="p" component="div">AGE: {author.age}</Typography>
                  <Typography gutterBottom variant="p" component="div">GENRE: {author.genre}</Typography>
                  <Typography gutterBottom variant="p" component="div">{author.isDead}</Typography>
                  <Button size="small" style={{ color: 'red' }}
                    onClick={() => {
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, delete it!",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteAuthorbyID(author.id).then((res) => {
                            Swal.fire(
                              `${res.name} Deleted!`,
                              "Your artist has been deleted.",
                              "success"
                            );
                          });
                          setAuthors(
                            authors.filter((x) => x.id !== author.id)
                          );
                        }
                      });
                    }}
                    variant="outlined"
                    color="warning"
                  >
                    DELETE</Button>
                  <Button size="small" style={{ color: 'green' }}>Edit</Button>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Col>
          })}
        </Row>
      </Container>
    </>
  );
}



export default Home