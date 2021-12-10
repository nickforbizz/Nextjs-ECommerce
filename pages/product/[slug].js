import React from 'react'
import {useRouter} from 'next/router'
import data from '../../utils/data'
import styles from './product.module.css'
import Layout from '../../components/Layout'
import { Button, Card, Grid, List, ListItem, Typography } from '@material-ui/core'
import Image from 'next/image'

export default function Product() {
    const router = useRouter()
    const {slug} = router.query
    const product = data.products.find(a => a.slug === slug)

    if(!product){
        return (
            <Layout >
                <div className={styles.page404}>
                    404 | Product Not Found
                </div>
            </Layout>
        )
    }
    return (
        <Layout title={product.name} description={product.description}>
            <Grid container spacing={1} className={styles.m5}>
                <Grid item md={6} xs={12}>
                    <Image src={product.image}
                           alt={product.name}
                           height={640}
                           width={640}
                           layout='responsive'/>
                </Grid>

                <Grid item md={3} xs={12}>
                         <Typography component="h1" variant="h1"> {product.name} </Typography>
                    <List>
                        <ListItem>Category: {product.category}</ListItem>
                        <ListItem>Brand: {product.brand}</ListItem>
                        <ListItem>Ratings: {product.rating} stars ({product.numReviews} reviews) </ListItem>
                        <ListItem>Description: 
                            <Typography> {product.description} </Typography>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}> <Typography> Price </Typography> </Grid>
                                    <Grid item xs={6}> <Typography> $ {product.price} </Typography> </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}> <Typography> Status </Typography> </Grid>
                                    <Grid item xs={6}> <Typography> {product.countInStock>0?'In Stock': 'Unavailable'} </Typography> </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button type='button' fullWidth variant='contained' color='primary'>Add To Cart</Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}
