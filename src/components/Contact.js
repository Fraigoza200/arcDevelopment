import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import ButtonArrow from './ui/ButtonArrow'

import background from '../assets/background.jpg'
import mobileBackground from '../assets/mobileBackground.jpg'
import phoneIcon from '../assets/phone.svg'
import emailIcon from '../assets/email.svg'
import airplane from '../assets/send.svg'

const useStyles = makeStyles(theme => ({
    background:{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
       paddingBottom: '10em',
       [theme.breakpoints.down('md')]: {
           backgroundImage: `url(${mobileBackground})`
       }
    },
    estimateButton: {
        ...theme.typography.estimate, 
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: '1.5rem',
        marginRight: '5em',
        marginLeft: '2em',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
            marginRight: 0
        }

},
    learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem', 
    height: 35, 
    padding: 5,
    [theme.breakpoints.down('md')]: {
        marginBottom: '2em'
    }
},

    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: '5em',
        borderRadius: 5,

    },
    sendButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 45,
        width: 245,
        fontSize: '1rem',
        backgroundColor: theme.palette.common.orange,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    }

}))

export default function Contact(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [message,setMessage] = useState('')


    return (
        <Grid container direction="row">
            <Grid item container alignItems="center" direction="column" justify="center" lg={4} xl={3} style={{marginBottom: matchesMD ? '5em' : 0, marginTop: matchesSM ? '1em' : matchesMD ? '5em' : 0}}>
           <Grid item>
               <Grid container direction='column'>
               <Grid item>
                 <Typography align={matchesMD ? 'center' : undefined} variant="h2" style={{LineHeight:1}}>Contact Us</Typography>
                 <Typography align={matchesMD ? 'center' : undefined} variant="body1" style={{color:theme.palette.common.blue}}>We're Here</Typography>
             </Grid>
             <Grid item container style={{marginTop:'2em'}}>
                <Grid item>
                    <img src={phoneIcon} alt="Phone" style={{marginRight: '0.5em'}} />
                </Grid>
                <Grid item>
                    <Typography variant="body1" style={{color: theme.palette.common.blue,fontSize:'1rem'}}>(714)560-3749</Typography>
                </Grid>
             </Grid>
             <Grid item container style={{marginBottom: '2em'}}>
                <Grid item>
                    <img src={emailIcon} alt="Envelope" style={{marginRight: '0.5em', verticalAlign: 'bottom'}} />
                </Grid>
                <Grid item>
                    <Typography variant="body1" style={{color: theme.palette.common.blue, fontSize:'1rem'}}>raigoza.frankie@gmail.com</Typography>
                </Grid>
             </Grid>
             <Grid item container direction='column' style={{maxWidth: '20em'}}>
                 <Grid item style={{marginBottom: '0.5em'}}>
                     <TextField label="Name" id="name"  fullWidth value={name} onChange={(event) => setName(event.target.value)}/>
                 </Grid>
                 <Grid item style={{marginBottom: '0.5em'}}>
                 <TextField label="Email" id="email" fullWidth value={email} onChange={(event) => 
                     setEmail(event.target.value) } />
                 </Grid>
                 <Grid item style={{marginBottom: '0.5em'}}>
                 <TextField label="Phone" fullWidth id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                 </Grid>
             </Grid>
             <Grid item style={{maxWidth: '20em'}}>
                 <TextField value={message} fullWidth multiline rows={10} id='message' onChange={(event) => setMessage(event.target.value)} className={classes.message} InputProps={{disableUnderline:true}} />
             </Grid>
             <Grid item container justify="center" style={{marginTop: '2em'}}>
                 <Button variant='contained' className={classes.sendButton}>Send Message <img src={airplane} alt='paper airplane' style={{marginLeft: '1em'}}/></Button>
             </Grid>
               </Grid>
           </Grid>
            </Grid>
            <Grid item container direction={matchesMD ? 'column' : 'row'} alignItems="center" justify={matchesMD ? 'center' : undefined} className={classes.background} lg={8} xl={9}>
            <Grid item style={{ marginLeft: matchesMD ? 0 :'3em,', textAlign: matchesMD ? 'center': 'inherit'}}>
            <Grid container direction="column">
                <Grid item>
                    <Typography align={matchesMD ? 'center' : undefined} variant="h2" style={{marginLeft: matchesSM ? 0: '2em'}}>Simple SoftWare.<br /> Revolutionary Results.</Typography>
                    <Typography align={matchesMD ? 'center' : undefined} variant="subtitle2" style={{fontSize: '1.5rem', marginLeft: matchesSM ? 0: '4em'}}>Take advantage of the 21st Century.</Typography>
                    <Grid container justify={matchesMD ? 'center': undefined} item>
                        <Button 
                        style={{marginLeft: matchesSM ? 0: '7em'}}
                        component={Link} to='/revolution'
                        variant ="outlined" 
                        className={classes.learnButton}
                        onClick={() => props.setValue(2)}
                        >
                        <span style={{marginRight:5}}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
                <Grid item>
            <Button component={Link} to='/estimate' variant="contained" className={classes.estimateButton} onClick={() => props.setValue(5)}>
                Free Estimate
            </Button>
        </Grid>
            </Grid>
        </Grid>
    )
}