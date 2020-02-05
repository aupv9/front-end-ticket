import React,{useState } from 'react';
//import component material
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem  from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
//import icon material
import RoomIcon from '@material-ui/icons/Room';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import * as LIST from '../../contants/index';
import * as _ from "lodash";
import { toast ,ToastContainer} from 'react-toastify';
import {
    useHistory
} from "react-router-dom";

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
    },
    listSearch:{
        position:"absolute",
        width:"230px",
        backgroundColor:"#fff",
        color:"#000",
        marginTop:"25px",
        borderRadius:"3px",
        overflow:"scroll",
        height:"500px",
    }
}));

const SearchForm = () => {
    const classes=useStyles();
    let history=useHistory();

    /* State */
    const [provinces,setProvinces] =useState(LIST.LIST_PROVINCE);
    const [locate,setLocate] =useState("");

    const [selectedDate, setSelectedDate] =useState(new Date());
    const [nameBeginLocate,setNameBeginLocate] =useState("");
    const [nameEndLocate,setNameEndLocate] =useState("");

    const [idBeginLocate,setIdBeginLocate] =useState(0);
    const [idEndLocate,setIdEndLocate] =useState(0);

    const [date,setDate] =useState('');
    const [endLocate,setEndLocate] =useState("");

    /* Change date */
    const changeDate = date => {
        let month=parseInt(date.getMonth());
        const dateLook=parseInt(month+1)+"-"+date.getDate()+"-"+date.getFullYear();
        const dateFake=date.getDate()+"-"+parseInt(month+1)+"-"+date.getFullYear();
        setSelectedDate(dateLook);
        setDate(dateFake);
    };

    const selectProvince = (sign,event) =>{
        switch (sign) {
            case 1:
                setNameBeginLocate(event.target.dataset.name);
                setIdBeginLocate(event.target.dataset.id);
                break;
            case 2:
                setNameEndLocate(event.target.dataset.name);
                setIdEndLocate(event.target.dataset.id);

                break;
            default:
                break;
        }
    };

    /* */
    const handleClickSearch=(sign,event)=>{
        switch (sign) {
            case 1:
                setProvinces(toSearchProvince(locate));

                document.getElementById("list-search-begin").style.display="block";
                break;
            case 2:
                setProvinces(toSearchProvince(locate));
                document.getElementById("list-search-end").style.display="block";
                break;
            default:
                break;
        }

    };
    /*Method change search begin */
    const handleChangeSearch= (sign, event)  =>{

        switch (sign) {
            case 1:
                /* */
                setLocate(event.target.value);
                setProvinces(toSearchProvince(locate));
                setNameBeginLocate(event.target.value);
                document.getElementById("list-search-begin").style.display="block";
                break;
            case 2:
                /* */
                setLocate(event.target.value);
                setProvinces(toSearchProvince(locate));
                setNameEndLocate(event.target.value);
                document.getElementById("list-search-end").style.display="block";
                break;
            default:
                break;
        }

    };
    /*
   * method tìm kiếm thông qua key
   * */
    const toSearchProvince=(location)=>{
        return _.filter(LIST.LIST_PROVINCE,(o)=>{
            return _.includes(o.NAME.toLowerCase(),location.toLowerCase());
        });
    }
    /*Method blur search begin */
    const handleBlurSearchBegin= (sign, event) =>{
        switch (sign) {
            case 1:
                document.getElementById("list-search-begin").style.display="none";
                break;
            case 2:
                document.getElementById("list-search-end").style.display="none";
                break;
            default:
                break;
        }
    };

    /**Method Re search */
    const handleReSearch =()=>{
        if(idBeginLocate !== 0 && idEndLocate !==0){
            history.push(`/list-xe/${idBeginLocate}/${idEndLocate}/${date}`);
            window.location.reload();
        }else{
            toast.warn("Phải chọn điểm đi và điểm đến !", {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
    }
    return (
        <div>
            <Box p={1} display="flex" flexDirection="row"  m={1} bgcolor="background.paper"  className={classes.searchForm}>
                <Box flexGrow={6} flexDirection="row" display="flex" >
                    <Box p={1}  flexGrow={1} flexDirection="column" display="flex" >
                        <Box  flexGrow={1} >
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
                                onChange={(e)=>handleChangeSearch(1,e)}
                                onBlur={(e)=>handleBlurSearchBegin(1,e)}
                                onClick={(e)=>handleClickSearch(1,e)}
                                value={nameBeginLocate}
                            />
                        </Box>
                        <Box  flexGrow={1} style={{display:"none"}}
                              id="list-search-begin">
                            <List component="nav"
                                  className={classes.listSearch}
                            >
                                {
                                    provinces.map(province =>{
                                        return (
                                            <ListItem button
                                                      data-id={province.MA}
                                                      data-name={province.NAME}
                                                      onMouseDown={(e)=>selectProvince(1,e)}
                                            >
                                                <ListItemIcon>
                                                    <RoomIcon />
                                                </ListItemIcon>
                                                {/* <ListItemText primary={province.NAME}
                                                          data-id={province.MA}
                                                          onMouseDown={selectProvince}
                                                          /> */}
                                                <span data-id={province.MA}
                                                      data-name={province.NAME}
                                                      onMouseDown={(e)=>selectProvince(1,e)}
                                                >
                                                    {province.NAME}
                                              </span>
                                            </ListItem>
                                        )
                                    })

                                }

                            </List>
                        </Box>
                    </Box>
                    <Box p={1}  flexGrow={1} flexDirection="column" display="flex">
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
                                value={nameEndLocate}
                                onChange={(e)=>handleChangeSearch(2,e)}
                                onBlur={(e)=>handleBlurSearchBegin(2,e)}
                                onClick={(e)=>handleClickSearch(2,e)}


                            />
                        </Box>
                        <Box  flexGrow={1} style={{display:"none"}}
                              id="list-search-end">
                            <List component="nav"
                                  className={classes.listSearch}
                            >
                                {
                                    provinces.map(province =>{
                                        return (
                                            <ListItem button
                                                      data-id={province.MA}
                                                      data-name={province.NAME}
                                                      onMouseDown={(e)=>selectProvince(2,e)}
                                            >
                                                <ListItemIcon>
                                                    <RoomIcon />
                                                </ListItemIcon>
                                                {/* <ListItemText primary={province.NAME}
                                                          data-id={province.MA}
                                                          onMouseDown={selectProvince}
                                                          /> */}
                                                <span data-id={province.MA}
                                                      data-name={province.NAME}
                                                      onMouseDown={(e)=>selectProvince(1,e)}
                                                >
                                                    {province.NAME}
                                              </span>
                                            </ListItem>
                                        )
                                    })

                                }

                            </List>
                        </Box>
                    </Box>
                    <Box p={1}  flexGrow={1}>
                        {/*<TextField*/}
                        {/*    id="date"*/}
                        {/*    label="Chọn ngày đi"*/}
                        {/*    type="date"*/}
                        {/*    className={classes.textField}*/}
                        {/*    InputLabelProps={{*/}
                        {/*        shrink: true,*/}
                        {/*    }}*/}
                        {/*    required*/}
                        {/*    onChange={onChangeDate}*/}
                        {/*/>*/}
                        {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                        {/*    <KeyboardDatePicker*/}
                        {/*        className={classes.datepicker}*/}
                        {/*        variant="inline"*/}
                        {/*        format="dd/MM/yyyy"*/}
                        {/*        borderBottom="none"*/}
                        {/*        id="date-picker-inline"*/}
                        {/*        label="Ngày đi"*/}
                        {/*        value={selectedDate}*/}
                        {/*        onChange={changeDate}*/}
                        {/*        KeyboardButtonProps={{*/}
                        {/*            'aria-label': 'change date',*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</MuiPickersUtilsProvider>*/}
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
