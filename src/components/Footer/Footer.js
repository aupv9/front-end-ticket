import React from 'react';
//import component material ui
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
    footer:{
        textAlign:"center"
    }
}));



const Footer = props => {

    const classes=useStyles();
    return (
        <div>
            <Container maxWidth="lg"
                        classes={classes.footer}
                        style={{textAlign:"center"}}>
                Copyright © 2020 VeXe - All Rights Reserved

            </Container>
        </div>
    );
};

Footer.propTypes = {

};

export default Footer;
