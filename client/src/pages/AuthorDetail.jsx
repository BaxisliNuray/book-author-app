import { useParams } from 'react-router-dom'
import { getAuthorbyID } from '../api/reuests'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Row, Col } from 'antd';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AuthorDetail = () => {
    const[author,setAuthor] = useState({});
    const{id} = useParams();
    useEffect(()=>{
        getAuthorbyID(id).then(res=>{
          setAuthor(res);
      })
    },[id]);

    return (
        <>
         <Helmet>
            <title> AUTHOR DETAIL</title>
        </Helmet>
            <Container maxWidth="lg">
                <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}>
                    <Col key={author.id} className="gutter-row" span={6}>
                        <Card sx={{ maxWidth: 250, marginTop: '20px' }}>
                            <CardMedia
                                sx={{ height: 270, objectFit: 'cover' }}
                                image={author.img} />
                            <CardContent>
                                <Typography style={{ fontSize: '18px' }} gutterBottom variant="h5" component="div"><Link to='/authors' style={{ color: 'black' }}>
                                    {author.name}
                                </Link></Typography>
                                <Typography gutterBottom variant="p" component="div">AGE: {author.age}</Typography>
                                <Typography gutterBottom variant="p" component="div">GENRE: {author.genre}</Typography>
                                <Button size="small"  style={{ color: 'red' }}>DELETE</Button>
                                <Button size="small" style={{ color: 'green' }}>Edit</Button>
                                <Button size="small" style={{ color: 'babyblue' }}><Link to='/authors'>GO BACK</Link></Button>

                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AuthorDetail