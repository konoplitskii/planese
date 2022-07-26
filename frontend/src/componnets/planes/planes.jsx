import React, {useEffect} from 'react';
import './styles.css';
import {useDispatch, useSelector} from "react-redux";
import {getPlanes} from "../../store/planes/planesSlice";
import {Spinner} from "../spinner";
import {ContentWrapper} from "../content-wrapper";
import {PlanItem} from "../plan-item";
import {Link} from "react-router-dom";
import {path} from "../../path";
import {Button} from "../button";
import {useSortPLanes} from "../../hooks/useSortPLanes";

export const Planes = () => {
    const dispatch = useDispatch();
    const {planes,isLoading} = useSelector(state => state.planes);

    const {isDescSort,setIsDescSort,sortedPlanes} = useSortPLanes(planes || [])

    useEffect(()=> {
        dispatch(getPlanes())
    },[dispatch])

    if(isLoading) {
        return <Spinner/>
    }
    return (
        <div>
            <div className="sort">
                <ContentWrapper className="planesHeader">
                    <Button className="sortBtn" onClick={()=>setIsDescSort(!isDescSort)}>Сортировать по цене</Button>
                    <Link className="createPlaneBtn" to={path.createPlane}>Добавить самолёт </Link>
                </ContentWrapper>
            </div>
            <ContentWrapper className="planesGrid">
                {
                    planes && sortedPlanes.map(plane => <PlanItem key={plane._id} {...plane}/>)
                }
            </ContentWrapper>
        </div>
    );
};
