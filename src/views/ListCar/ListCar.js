import React from 'react';
import PropTypes from 'prop-types';
import   {
    useParams
} from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const ListCar = props => {
    // eslint-disable-next-line no-unused-vars
    let { start,end,date } = useParams();
    console.log(end);
    return (
        <div>
            List car
        </div>
    );
};

ListCar.propTypes = {

};

export default ListCar;
