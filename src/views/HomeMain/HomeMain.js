import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import SearchForm from "../../components/SearchForm/SearchForm";


const useStyles = makeStyles(theme => ({
    titleForm:{
        fontSize:"34px",
        marginLeft:"10px"
    },
    container:{
        position:"absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        color:"white",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        height: "50%",

    }
}));

const HomeMain = props => {
    const classes=useStyles();

    return (
        <div>
            <div style={{
                width:"100%",
                position:"relative",
                height:"100%"

            }}>
                <img src="https:////static.vexere.com/production/banners/330/background-ok-optimize.png"
                    style={{width:"100%",height: "100%",verticalAlign: "middle",
                        borderStyle: "none"}}/>
                <Container maxWidth="md"
                          className={classes.container} >
                    <h2 className={classes.titleForm}>Đặt Vé Xe Rẻ</h2>
                    <SearchForm/>
                </Container>
            </div>

        </div>
    );
};

HomeMain.propTypes = {

};

export default HomeMain;
