import React, {useEffect} from 'react';
import './style.css';
import {useNavigate,useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPlane} from "../../store/planes/planeSlice";
import {Spinner} from "../../componnets/spinner";
import {ContentWrapper} from "../../componnets/content-wrapper";
import {Button} from "../../componnets/button";

export const PlanePage = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();

    const {plane,isLoading} = useSelector(state => state.plane);


    useEffect(()=> {

        dispatch(getPlane(id));
    },[dispatch,id])

    useEffect(()=>{
        console.log('plane',plane)
    },[])

    if(isLoading) return <Spinner/>




    return plane && (
        <React.Fragment>
            <ContentWrapper className="plane">
            <div className="descContent">
                <Button onClick={() => navigate(-1)} isBackButton={true}>
                    Назад
                </Button>
                <h1 className="title">{plane.name}</h1>
                <div className="price">{plane.price}$</div>
                <Button
                    containerClassName={"buyBtnContainer"}
                    onClick={() => navigate('/order') }
                >
                    Оформить заказ
                </Button>
                <p className="desc">{plane.description}</p>
            </div>
            <div className="imageContent">
                <img className="image" src={plane.planeImg} alt="" />
            </div>
        </ContentWrapper>
        </React.Fragment>
    );
};





