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
        opacity: 0.7
    },
    drawerItemEstimate:{
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        opacity: 1
    }
}))

export default function Header(props) {

    const classes = useStyles()
    const theme = useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
    const [openDrawer, setOpenDrawer] = useState(false)
    const [value, setValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(0)


    const handleChange = (e, newValue) => {
        setValue(newValue)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpenMenu(false)
        setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpenMenu(false)
    }

    const menuOption = [
        {name:"Services", link: "/services", activeIndex:1, selectedIndex:0}, 
        {name: "Custom Software Development", link: "/customsoftware", activeIndex:1, selectedIndex:1}, 
        {name: "Mobile App Development", link: "/mobileapps", activeIndex:1, selectedIndex:2}, 
        {name:"Website Development", link: "/websites", activeIndex:1, selectedIndex:3}]

    const routes = [
    {name: "Home", link: "/", activeIndex:0}, 
    {name: "Services", link: "/services", activeIndex:1}, {name: "Revolution", link: "/revolution", activeIndex:2}, 
    {name: "About", link: "/about", activeIndex:3},
    {name: "Contact", link: "/contact", activeIndex:4}]

    useEffect(() => {

        [...menuOption, ...routes].forEach(route => {
            switch(window.location.pathname) {
                case `${route.link}`: 
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                            if (route.activeIndex && route.selectedIndex !== selectedIndex) {
                                setSelectedIndex(route.selectedIndex)
                            }
                    } 
                    break;

                    default: 
                    break;
            }
        })
    },[value, menuOption, selectedIndex, routes])

    const tabs = (
        <React.Fragment>
            <Tabs value={value}  onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
                <Tab 
                label="Home" className={classes.tab}component={Link} to="/"/>

                <Tab 
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                onMouseOver={event => handleClick(event)}
                label="Services" className={classes.tab} component={Link} to="/services"/>

                <Tab 
                label="Revolution" className={classes.tab} component={Link} to="/revolution"/>

                <Tab 
                label="About Us" className={classes.tab} component={Link} to="/about"/>

                <Tab 
                label="Contact Us" className={classes.tab} component={Link} to="/contact"/>
            </Tabs>
            <Button variant='contained' color="secondary" className={classes.button}>
                Free Estimate
            </Button>
            <Menu 
            elevation={0}
            classes={{paper: classes.menu}}
            id="simple-menu" 
            anchorEl={anchorEl} open={openMenu} onCLose={handleClose} MenuListProps={{onMouseLeave: handleClose}}> 

                {menuOption.map((option,i) => (
                    <MenuItem 
                    key={option} 
                    component={Link} 
                    to={option.link} 
                    classes={{root: classes.menuItem}} onClick={(event)=> {handleMenuItemClick(event, i); setValue(1); handleClose()}} selected={i===selectedIndex && value ===1}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer classes={{paper: classes.drawer}} disableBackdropTransition={iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>

            <List disablePadding>
                <ListItem selected={value === 0} onClick={() => {setOpenDrawer(false); setValue(0)}} divider button component={Link} to='/'>
                    <ListItemText className={ value === 0 ?[classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
                        Home
                    </ListItemText>
                </ListItem>
                <ListItem selected={value === 1} onClick={() => {setOpenDrawer(false); setValue(1)}} divider button component={Link} to='/services'>
                    <ListItemText className={ value === 1 ?[classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
                        Services
                    </ListItemText>
                </ListItem>
                <ListItem selected={value === 2} onClick={() => {setOpenDrawer(false); setValue(2)}} divider button component={Link} to='/revolution'>
                    <ListItemText className={ value === 2 ?[classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
                        The Revolution
                    </ListItemText>
                </ListItem>
                <ListItem selected={value === 3} onClick={() => {setOpenDrawer(false); setValue(3)}} divider button component={Link} to='/about'>
                    <ListItemText className={ value === 3 ?[classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
                        About Us
                    </ListItemText>
                </ListItem>
                <ListItem selected={value === 4} onClick={() => {setOpenDrawer(false); setValue(4)}} divider button component={Link} to='/contact'>
                    <ListItemText className={ value === 4 ?[classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
                        Contact Us
                    </ListItemText>
                </ListItem>
                <ListItem selected={value===5} className={classes.drawerItemEstimate} onClick={() => {setOpenDrawer(false); setValue(5)}} divider button component={Link} to='/estimate'>
                    <ListItemText className={ value === 5 ?[classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem} disableTypography>
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
        <AppBar position='fixed'>
            <Toolbar disableGutters>
                <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                     <img src={logo} alt="company" className={classes.logo}/>
                </Button>
                {matches ? drawer : tabs}
                </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin}/>
        </React.Fragment>
    )


}