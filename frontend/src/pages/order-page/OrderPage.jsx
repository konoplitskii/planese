import React from 'react';
import './OrderPage.css';
import {useNavigate} from "react-router-dom";
import {Button} from "../../componnets/button";
import {ContentWrapper} from "../../componnets/content-wrapper";

const OrderPage = () => {
    const navigate = useNavigate();
    return (
        <ContentWrapper className="order-box">
            <h1>Ваш заказ будет доставлен в ближайшее время</h1>
            <Button className="button" onClick={()=>navigate('/')}> На главную </Button>
        </ContentWrapper>
    );
};

export default OrderPage;