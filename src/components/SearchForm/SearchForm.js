import React,{useState } from 'react';
//import component material
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//import icon material
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles(theme => ({
    searchForm:{
        borderRadius:"5px"
    },
    inputItem:{
        margin:"0px",
        width:"90%"
    },
    btnSearch:{
        margin:"10px",
        width:"100%",
        height:"80%"
    }
}));

const SearchForm = () => {
    const classes=useStyles();
    const [date,setDate]=useState(Date.now);

    const onChangeDate=(e) =>{
        console.log( e.target.value);
        setDate(e.target.value.day);
    };
    return (
        <div>
            <Box p={1} display="flex" flexDirection="row"  m={1} bgcolor="background.paper"  className={classes.searchForm}>
                <Box flexGrow={6} flexDirection="row" display="flex" >
                    <Box p={1}  flexGrow={1} flexDirection="row" display="flex" >
                        <Box  flexGrow={1}>
                            <TextField
                                className={classes.inputItem}
                                id="input-with-icon-textfield"
                                label="Nhập nơi đi"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnIcon  color="primary"/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box  flexGrow={1} style={{display:"none"}}>
                            Item 1
                        </Box>
                    </Box>
                    <Box p={1}  flexGrow={1}>
                        <Box  flexGrow={1}>
                            <TextField
                                className={classes.inputItem}
                                id="input-with-icon-textfield"
                                label="Nhập nơi đến"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocationOnIcon  color="primary"/>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                        <Box  flexGrow={1} style={{display:"none"}}>
                            Item 1
                        </Box>
                    </Box>
                    <Box p={1}  flexGrow={1}>
                        <TextField
                            id="date"
                            label="Chọn ngày đi"
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                            onChange={onChangeDate}
                        />
                    </Box>
                </Box>
                <Box p={1}  flexGrow={1}>
                    <Button variant="contained" color="primary" className={classes.btnSearch}>
                        TÌM VÉ XE
                    </Button>
                </Box>

            </Box>
        </div>
    );
};

export default SearchForm;
