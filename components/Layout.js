import React from 'react'
import Head from 'next/head'
import NLink from 'next/link'
import { AppBar, Container, Link, Toolbar, Typography } from '@material-ui/core'
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
                    <NLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand}>
                                E-Commerce Site
                            </Typography>
                        </Link>
                    </NLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NLink>
                        <NLink href="/login" passHref>
                            <Link>Login</Link>
                        </NLink>
                    </div>
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
