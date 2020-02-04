import React from 'react';
//import component material
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

//import icon material
import LocationOnIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles(theme => ({

}));


const SearchForm = () => {
    return (
        <div>
            <Box p={1} display="flex" flexDirection="row"  m={1} bgcolor="background.paper">
                <Box flexGrow={6} flexDirection="row" display="flex" >
                    <Box p={1}  flexGrow={1} flexDirection="row" display="flex" >
                        <Box  flexGrow={1}>
                            <TextField
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
                        Item 1
                    </Box>
                </Box>
                <Box p={1} bgcolor="grey.300" flexGrow={1}>
                    Item 1
                </Box>

            </Box>
        </div>
    );
};

export default SearchForm;
