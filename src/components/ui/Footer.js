import React from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import footerAdornment from '../../assets/Footer Adornment.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: 'relative'

    },
    adornment: {
        width: '25em',
        verticalAlign:'bottom',
        [theme.breakpoints.down('md')]: {
            width:'21em'
        },
        [theme.breakpoints.down('xs')]: {
            width:'15em'
        }
    },
    mainContainer: {
        position: 'absolute',

    },
    link:{
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none'
    },
    gridItem:{
        margin: '3em'
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]: {
            height: '2.5em',
            width: '2.5em'
        }
    }, 
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        [theme.breakpoints.down('xs')]: {
            right: '0.6em'
        }
    }
}))

export default function Footer(props) {

    const classes = useStyles()

    return ( 
    <footer className={classes.footer}>
        <Hidden mdDown>
          <Grid container justify="center" className={classes.mainContainer}>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column">
                    <Grid component={Link} onClick={() => {props.setValue(0); props.setSelectedIndex(0)}} to="/" item className={classes.link}>
                        Home
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(0)}} to="/services" item className={classes.link}>
                        Services
                    </Grid>
                    <Grid component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}} to="/customsoftware" item className={classes.link}>
                        Custom Software Development
                    </Grid>
                    <Grid component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} to="/mobileapps" item className={classes.link}>
                        iOS/Android App Development
                    </Grid>
                    <Grid component={Link} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}} to="/websites" item className={classes.link}>
                        Website Development
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid component={Link} onClick={() => props.setValue(2)} to="/revolution" item className={classes.link}>
                            The Revolution
                        </Grid>    
                    <Grid component={Link} onClick={() => props.setValue(2)} to="/revolution" item className={classes.link}>
                            Vision
                        </Grid>    
                    <Grid component={Link} onClick={() => props.setValue(2)} to="/revolution" item className={classes.link}>
                            Technology
                        </Grid>    
                    <Grid component={Link} onClick={() => props.setValue(2)} to="/revolution" item className={classes.link}>
                            Process
                        </Grid>    
                </Grid>

            </Grid>

            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid component={Link} onClick={() => props.setValue(3)} to="/about" item className={classes.link}>
                        About Us
                    </Grid>
                    <Grid component={Link} onClick={() => props.setValue(3)} to="/about"  item className={classes.link}>
                        History
                    </Grid>
                    <Grid component={Link} onClick={() => props.setValue(3)} to="/about"  item className={classes.link}>
                        Team
                    </Grid>
                </Grid>
            </Grid>

            <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}> 
                <Grid component={Link} onClick={() => props.setValue(4)} to="/contact"  item className={classes.link}> Contact Us </Grid>
            </Grid>
            </Grid>
        </Grid>
       </Hidden> 
        <img 
        alt="black decorative slash" 
        src={footerAdornment} 
        className={classes.adornment}/>
        
        <Grid container spacing={2} justify="flex-end" className={classes.socialContainer}>
            <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferer" target="_blank"> 
            <img alt="facebook Logo" src={facebook} className={classes.icon}/>
            </Grid>
            <Grid item component={'a'} href="https://www.twitter.com" rel="noopener noreferer" target="_blank"> 
            <img alt="Twitter Logo" src={twitter} className={classes.icon}/>
            </Grid>
            <Grid item component={'a'} href="https://www.instagram.com" rel="noopener noreferer" target="_blank"> 
            <img alt="Instagram Logo" src={instagram} className={classes.icon}/>
            </Grid>
        </Grid>
    </footer>
    )
}