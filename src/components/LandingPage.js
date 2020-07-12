import React from 'react'
import Lottie from 'react-lottie'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonArrow from '../components/ui/ButtonArrow'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import animationData from '../animations/landinganimation/data'
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg'
import webSitesIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'

const useStyles = makeStyles(theme => ({

    animation: {
        maxWidth: '50em', 
        minWidth: "21em",
        marginTop: "2em", 
        marginLeft: "10%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate, 
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50, 
        height: 45,
        width: 145, 
        marginRight: 40, 
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }, 
    buttonContainer: {
        marginTop: '1em'
    }, 
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45, 
        width: 145
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
    mainContainer: {
        marginTop: '5em', 
        [theme.breakpoints.down('md')]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "2em"
        }
    }, 
    heroTextContainer: {
        minWidth: '21.5em', 
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.common.orange
    }, 
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
        marginTop: '12em',
        [theme.breakpoints.down('sm')]: {
            padding: 25
        }
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    },
    revolutionCard: {

        
    }

}))

export default function LandingPage() {
        const classes = useStyles()
        const theme = useTheme()
        const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        }

        return (

            <Grid container direction="column" className={classes.mainContainer}> 
                <Grid item> {/* {--------Hero Block--------} */}
                    <Grid container justify="flex-end" alignItems="center" direction="row">
                        <Grid sm item className={classes.heroTextContainer}>
                            <Typography variant='h2' align="center"> Bringing West Coast Technology < br/> to the MidWest</Typography>
                            <Grid container justify="center" className={classes.buttonContainer}>
                                <Grid item>
                                    <Button variant='contained' className={classes.estimateButton}>
                                        Free Estimate
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant='outlined' className={classes.learnButtonHero}>
                                      <span style={{marginRight:10}}> Learn More </span>
                                        <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item className={classes.animation}> 
                        <Lottie  options={defaultOptions} height={'100%'} width={'100%'} />
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
                        <Button variant ="outlined" className={classes.learnButton}>
                        <span style={{marginRight:10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                        <Grid item>
                            <img alt="custom software icon" src={customSoftwareIcon} className={classes.icon}/>
                        </Grid>
                </Grid> 
            </Grid>


            <Grid item> {/* {-------ios/android Block-------} */}
                <Grid justify={matchesSM ? 'center': 'flex-end'} container direction="row" className={classes.serviceContainer}> 
                    <Grid item style={{ textAlign: matchesSM ? "center": undefined}}>
                        <Typography variant="h4">
                            iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access. Extend Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create standalone app{matchesSM ? null: <br/>} with either mobile platform
                        </Typography>
                        <Button variant ="outlined" className={classes.learnButton}>
                        <span style={{marginRight:10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                        <Grid item style={{marginRight: matchesSM ? 0: '5em'}}>
                            <img alt="mobile app icon" src={mobileAppsIcon} className={classes.icon}/>
                        </Grid>
                </Grid> 
            </Grid>


            <Grid item> {/* {-------website Block-------} */}
                <Grid justify={matchesSM ? 'center': undefined} container direction="row" className={classes.serviceContainer}> 
                    <Grid item style={{marginLeft: matchesSM ? 0: '5em', textAlign: matchesSM ? "center": undefined}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optomized for Search Engine, built for speed.
                        </Typography>
                        <Button variant ="outlined" className={classes.learnButton}>
                        <span style={{marginRight:10}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                        <Grid item>
                            <img alt="website icon" src={webSitesIcon} className={classes.icon}/>
                        </Grid>
                </Grid> 
            </Grid>


           {/* revolution card block */}
<Grid item>
<Grid container alignItems="center" justify="center" style={{height: '100em'}}>
<Card className={classes.revolutionCard}>
<CardContent>
    <Grid container direction="column" style={{textAlign:"center"}}>
        <Grid item>
            <Typography variant="h3">
                The Revolution
            </Typography>
        </Grid>
        <Grid item >
            <Typography variant="subtitle1">
            Visionary insights coupled with cutting-edge technology is a recipe for revolution. 
            </Typography>
            <Button variant='outlined' className={classes.learnButtonHero}>
                    <span style={{marginRight:10}}> Learn More </span>
                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                </Button>
        </Grid>
    </Grid>
</CardContent>
</Card>

<div className={classes.revolutionBackground} />
</Grid>
              
           </Grid>


            </Grid>
        

        )
}