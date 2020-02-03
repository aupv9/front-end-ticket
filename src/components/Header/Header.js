import React,{ useState, useEffect  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link,NavLink} from 'react-router-dom';
//import icon
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

import logo from '../../img/logo.jpg';


const useStyles = makeStyles(theme => ({
    header:{
        backgroundColor:"#fff",
        color: "rgba(0,0,0,.75)",

    },
    logo:{
        width:60,
        height:60
    },
    headerContainer:{
        flexGrow:1,
        marginLeft:50
    },
    contentHeader:{
        marginLeft:20,
        color: "rgba(0,0,0,.75)",
        fontWeight:700,
        fontSize:13,

},
    textBtn:{
        fontWeight:700,
        textTransform:"uppercase",
        fontSize:14,
        color: "rgb(83, 146, 249)",
        fontFamily:"mallory,Helvetica Neue,Helvetica,Arial,sans-serif"
    }
}));

const Header = props => {
    const classes = useStyles();
    const [isLogin,setLogin]=useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isAdmin,setAdmin]=useState(false);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout=()=>{

    }
    return (
        <div>
            <AppBar position="static"
                    id="header"
                    className={classes.header}>
                <Container >
                    <Toolbar>
                        {/* Logo header */}
                        <Link to={"/"}>
                            <img src={logo}
                                 className={classes.logo}/>
                        </Link>
                        {/* Navbar content */}
                        <Typography className={classes.headerContainer}>
                            <Link to={"/home"}
                                  className={classes.contentHeader}
                                  style={{textDecoration:"none"}}>
                                Trang chủ
                            </Link>
                            <Link to={"/home/ve-xe-tu-/s/d/s"}
                                  className={classes.contentHeader}
                                  style={{textDecoration:"none"}}>
                                Tra cứu vé
                            </Link>
                            {/* <Link to={"/quan-ly-ve"}
                            className={classes.contentHeader}>
                        Quản lý vé
                    </Link> */}
                        </Typography>
                        {
                            isLogin?(
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                        <Typography className={classes.username}>

                                        </Typography>

                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        {
                                            isAdmin?
                                                (<MenuItem


                                                ><NavLink to="/admin">

                                                    Trang quản lý
                                                </NavLink></MenuItem>):null}
                                        <MenuItem
                                            onClick={handleLogout}
                                        >Đăng Xuất</MenuItem>
                                    </Menu>
                                </div>
                            ):(
                                <div>
                                    <Button color="primary"  href="/home">
                                        <Typography className={classes.textBtn}>
                                            ĐĂNG NHẬP
                                        </Typography>
                                    </Button>
                                    <Button color="primary" href="/sign-up">
                                        <Typography className={classes.textBtn}>
                                            TẠO TÀI KHOẢN
                                        </Typography>
                                    </Button>
                                </div>
                            )
                        }
                    </Toolbar>
                </Container>

            </AppBar>
        </div>
    );
};

Header.propTypes = {
    
};

export default Header;
