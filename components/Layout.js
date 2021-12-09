import React from 'react'
import Head from 'next/head'
import NLink from 'next/link'
import { AppBar, Container, createTheme, CssBaseline, Link,  ThemeProvider,  Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'
import styles from './layout.module.css'

export default function Layout({ home, title, description, children}) {
    const classes = useStyles()
    const theme = createTheme ({
        typography: {
          h1: {
            fontSize: '1.6rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
          h2: {
            fontSize: '1.4rem',
            fontWeight: 400,
            margin: '1rem 0',
          },
        },
        palette: {
          type: 'light',
          primary: {
            main: '#f0c000',
          },
          secondary: {
            main: '#208080',
          },
        },
      });

    return (
        <div>
            <Head>
                <title>{ title ? `${title} - Next Ecommerce Siteb`: `Next Ecommerce Site` }</title>
                {description && <meta name='description' content={description}></meta>}
            </Head>

            <ThemeProvider theme={theme}>
                <CssBaseline/>
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

                    
                    {!home && (
                        <div className={styles.backToHome}>
                        <Link href="/">
                            <a> ← Back to home</a>
                        </Link>
                        </div>
                    )}
                </Container>



                <footer className={classes.footer}>
                    <Typography>
                        All rights reserved - MkenyaDaima
                    </Typography>
                </footer>
            </ThemeProvider>
            
        </div>
    )
}
