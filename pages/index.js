import NLink from 'next/link'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import data from '../utils/data'

export default function Home() {
  return (
   <Layout home>
     <h2> Products </h2>

     <Grid container spacing={3}>
       {(data.products.length > 0) ? 
       <>
        {data.products.map((item, i) => (
          <Grid item md={4} key={i}>
              <Card>
                <NLink href={`/product/${item.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia component='img' image={item.image} title={item.title}></CardMedia>
                    <CardContent>
                      <Typography>{item.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NLink>
                <CardActions>
                  <Typography>$ {item.price} </Typography>
                  <Button size='small' color='primary'>Add To Cart</Button>
                </CardActions>
              </Card>
          </Grid>
        ))}
        </>
        : 'Loading .... '}
     </Grid>
   </Layout>
  )
}
