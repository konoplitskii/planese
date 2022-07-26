import React from 'react';
import './styles.css';
import {Link} from "react-router-dom";
import {path} from "../../path";

export const PlanItem = ({
     name= '',
     price = 0,
     planeImg = '',
     _id = '',
     capacity= ''
}) => {
    return (
        <Link className="PlaneItem" to={`${path.plane}/${_id}`}>
            <div className="capacity">{capacity}</div>
            {planeImg && <img className="image" src={planeImg} alt={name}/>}
            <div className="info">
                <h2 className="title">{name}</h2>
                <span className="price">{price}</span>
            </div>
        </Link>
    );
};

