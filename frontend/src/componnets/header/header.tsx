import './styles.css'
import React from 'react';
import {ContentWrapper} from "../content-wrapper";
import WaveImage from './wave.svg';

export const Header = () => {
    return (
        <div className="header">
            <ContentWrapper className="content">
                <h1 className="title">{ `Путешествуйте с\n Комфортом` }</h1>
                <p className="desc">{`C нашей компанией вы забудете обо всем кроме\n высокого уровня путешествий`}</p>
            </ContentWrapper>
            <img src={ WaveImage } alt="" className="wave"/>
        </div>
    );
};
