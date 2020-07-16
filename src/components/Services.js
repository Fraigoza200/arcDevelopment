import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'


import ButtonArrow from './ui/ButtonArrow'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import webSitesIcon from '../assets/websiteIcon.svg'


const useStyles = makeStyles(theme => ({
    subtitle: {
        marginBlock: '1em'
    }, 
    icon:{
        marginLeft: '2em', 
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    }, 
    serviceContainer: {
        marginTop: '10em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem', 
        height: 35, 
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    }

}))

export default function Services(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Grid container direction="column" style={{marginLeft: matchesSM ? 0 : '5em', marginTop: matchesSM ? '1em' : '2em'}}>
            <Grid item>
                <Typography variant='h2' gutterBottom  align={matchesSM ? 'center' : undefined }>
                    Services
                </Typography>
            </Grid>

<Grid item> {/* {-------ios/android Block-------} */}
                <Grid justify={matchesSM ? 'center': 'flex-end'} container direction="row" className={classes.serviceContainer} style={{marginTop: matchesSM ? '1em' : '5em'}}> 
                    <Grid item style={{ textAlign: matchesSM ? "center": undefined, width: matchesSM ? undefined : '35em'}} >
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Extend Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create standalone app{matchesSM ? null: <br/>} with either mobile platform
                        </Typography>
                        <Button component={Link} to='/mobileapps' variant ="outlined" className={classes.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(2)}}>
                        <span style={{marginRight:10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                        <Grid item style={{marginRight: matchesSM ? 0: '5em'}}>
                            <img alt="mobile app icon" src={mobileAppsIcon} className={classes.icon} width='250em'/>
                        </Grid>
                </Grid> 
            </Grid>



             <Grid item> {/* {-------Custom Software Block-------} */}
                <Grid justify={matchesSM ? 'center': undefined} container direction="row" className={classes.serviceContainer}> 
                    <Grid item style={{marginLeft: matchesSM ? 0: '5em', textAlign: matchesSM ? "center": undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solutions, from investigation to {" "} <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button component={Link} to='/customsoftware' variant ="outlined" className={classes.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}>
                        <span style={{marginRight:10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                        <Grid item>
                            <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon}/>
                        </Grid>
                </Grid> 
            </Grid>


           


            <Grid item> {/* {-------website Block-------} */}
                <Grid justify={matchesSM ? 'center': 'flex-end'} container direction="row" className={classes.serviceContainer} style={{marginBottom: '10em'}}> 
                    <Grid item style={{ textAlign: matchesSM ? "center": undefined, width: matchesSM ? undefined : '35em'}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optomized for Search Engine, built for speed.
                        </Typography>
                        <Button component={Link} to='/websites' variant ="outlined" className={classes.learnButton} onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}>
                        <span style={{marginRight:10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                        <Grid item style={{marginRight: matchesSM ? 0: '5em',}}>
                            <img alt="website icon" src={webSitesIcon} className={classes.icon} width='250em'/>
                        </Grid>
                </Grid> 
            </Grid>

        </Grid>
    )
}
