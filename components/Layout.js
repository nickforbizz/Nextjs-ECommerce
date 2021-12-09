import React, { useContext } from 'react'
import Head from 'next/head'
import NLink from 'next/link'
import { AppBar, Container, createTheme, CssBaseline, Link,  Switch,  ThemeProvider,  Toolbar, Typography } from '@material-ui/core'
import useStyles from '../utils/styles'
import styles from './layout.module.css'
import { Store } from '../utils/Store'
import Cookies from 'js-cookie'

export default function Layout({ home, title, description, children}) {
    const classes = useStyles()
    const {state, dispatch} = useContext(Store)
    const {darkMode} = state;
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
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: '#f0c000',
          },
          secondary: {
            main: '#208080',
          },
        },
      });
    
      function darkModeHandler(){
          dispatch({
            type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON"
        })
        const newDarkMode = !darkMode;
        Cookies.set('darkMode', newDarkMode?'ON':'OFF')
      }
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
                            <Switch checked={darkMode} onChange={darkModeHandler}></Switch>
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
