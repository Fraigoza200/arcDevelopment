import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import logo from '../../assets/logo.svg'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'



const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em',
        [theme.breakpoints.down('md')]: {
            marginBottom: '2em'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '1.25em'
        }
    }, 
    logo: {
        height: '8em',
        [theme.breakpoints.down('md')]: {
            height: "7em"
        },
        [theme.breakpoints.down('xs')]: {
            height: '5.5em'
        }
    },
    logoContainer: {
        padding: 0
    },
    tabContainer:{
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px'
    },
    button:{
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: '50px',
        marginRight: '25px',
        height: '45px',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu:{
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius:"0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon:{
        height: '50px',
        width: '50px'
    },
    drawerIconContainer:{
        marginLeft: 'auto',

        "&:hover": {
            backgroundColor: 'transparent',
        }
    },
    drawer:{
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white',
        opacity: 0.5
    },
    drawerItemEstimate:{
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1,
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1,

    }
}))

export default function Header(props) {

    const classes = useStyles()
    const theme = useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
    const [openDrawer, setOpenDrawer] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)


    const handleChange = (e, newValue) => {
        props.setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpenMenu(false)
        props.setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const menuOption = [
        {name:"Services", link: "/services", activeIndex:1, selectedIndex:0}, 
        {name: "Custom Software Development", link: "/customsoftware", activeIndex:1, selectedIndex:1}, 
        {name: "iOS/Android App Development", link: "/mobileapps", activeIndex:1, selectedIndex:2}, 
        {name:"Website Development", link: "/websites", activeIndex:1, selectedIndex:3}]

    const routes = [
    {name: "Home", link: "/", activeIndex:0}, 
    {name: "Services", link: "/services", activeIndex:1, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? "true" : undefined, mouseOver: event => handleClick(event)}, {name: "Revolution", link: "/revolution", activeIndex:2}, 
    {name: "About", link: "/about", activeIndex:3},
    {name: "Contact", link: "/contact", activeIndex:4}]

    useEffect(() => {

        [...menuOption, ...routes].forEach(route => {
            switch(window.location.pathname) {
                case `${route.link}`: 
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                            if (route.activeIndex && route.selectedIndex !== props.selectedIndex) {
                                props.setSelectedIndex(route.selectedIndex)
                            }
                    } 
                    break;
                case '/estimate': 
                    props.setValue(5);
                
                    break;
                    default: 
                    break;
            }
        })
    },[props.value, menuOption, props.selectedIndex, routes, props])

    const tabs = (
        <React.Fragment>
            <Tabs  value={props.value}  onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">

                {routes.map((route, index) => (
                    <Tab key={`${route}${index}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver}/>
                ))}

            </Tabs>
            <Button component={Link} to='/estimate' variant='contained' color="secondary" className={classes.button} onClick={() => props.setValue(5)}>
                Free Estimate
            </Button>
            <Menu 
            id="simple-menu" 
            classes={{paper: classes.menu}}
            anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{onMouseLeave: handleClose}}
            elevation={0}
            style={{zIndex: 1302}}
            keepMounted
            > 

                {menuOption.map((option,i) => (
                    <MenuItem 
                    key={`${option}${i}`} 
                    component={Link} 
                    to={option.link} 
                    classes={{root: classes.menuItem}} onClick={(event)=> {handleMenuItemClick(event, i); props.setValue(1); handleClose()}} selected={i===props.selectedIndex && props.value ===1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer classes={{paper: classes.drawer}} disableBackdropTransition={iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                <div className={classes.toolbarMargin} />

            <List disablePadding>

                {routes.map(route => (
                    <ListItem key={`${route}${route.activeIndex}`}  divider button component={Link} to={route.link} 
                    classes={{selected:classes.drawerItemSelected}}
                    selected={props.value === route.activeIndex} onClick={() => {setOpenDrawer(false); props.setValue(route.activeIndex)}}>
                        <ListItemText className={classes.drawerItem} disableTypography>
                            {route.name}
                        </ListItemText>
                    </ListItem>
                ))}

                <ListItem selected={props.value===5} classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }} onClick={() => {setOpenDrawer(false); props.setValue(5)}} divider button component={Link} to='/estimate'>
                    <ListItemText className={classes.drawerItem} disableTypography>
                        Free Estimate
                    </ListItemText>
                </ListItem>
            </List>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer}    onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
            <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return(
        <React.Fragment>
        <AppBar className={classes.appbar} position='fixed'>
            <Toolbar disableGutters>
                <Button component={Link} to="/" className={classes.logoContainer} onClick={() => props.setValue(0)} disableRipple>
                     <img src={logo} alt="company" className={classes.logo}/>
                </Button>
                {matches ? drawer : tabs}
                </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )


}