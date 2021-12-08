import React from 'react'
import Head from 'next/head'
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'

export default function Layout({children}) {
    const classes = useStyles()
    return (
        <div>
            <Head>
                <title>Next Ecommerce Site</title>
            </Head>

            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>
                        E-Commerce Site
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container className={classes.main}>
                {children}
            </Container>


            <footer className={classes.footer}>
                <Typography>
                    All rights reserved - MkenyaDaima
                </Typography>
            </footer>
        </div>
    )
}