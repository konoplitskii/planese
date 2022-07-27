import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {ContentWrapper} from "../../componnets/content-wrapper";
import {Button} from "../../componnets/button";

import './style.css';
import {Input} from "../../componnets/input";
import {useCallback, useEffect, useState} from "react";
import {createPlane} from "../../store/planes/planeSlice";
import {path} from "../../path";


export const CreatePlanePage = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const { errors } = useSelector((state) => state.plane);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [capacity, setCapacity] = useState("");
    const [planeImage, setPlaneImage] = useState(null);

    const handleCreatePlane = useCallback((e)=> {
        const formData = new FormData();
        formData.append("name",name);
        formData.append("price",price);
        formData.append("capacity",capacity);
        formData.append("description",description);
        formData.append("planeImg",planeImage);
        dispatch(createPlane(formData)).then(res => {
            if(!res.error) {
                navigate(`${path.plane}/${res.payload._id}`,{replace:true});
            }
        })
    },[name,price,capacity,planeImage,description]);

  return (
      <ContentWrapper className="createPlane">
          <Button
              onClick={() => navigate(-1)}
              isBackButton={true}
              containerClassName="backButtonContainer"
          >
              Назад
          </Button>
          <form className="form">
              <h1 className="title">Создать самолет</h1>
              <Input
                  name="name"
                  placeholder="Название самолёта"
                  error={errors && errors.name && errors.name.message}
                  onChange={(e) => setName(e.target.value)}
              />
              <Input
                  name="price"
                  placeholder="Цена самолёта"
                  error={errors && errors.price && errors.price.message}
                  onChange={(e) => setPrice(+e.target.value)}
              />
              <Input
                  name="description"
                  placeholder="Описание"
                  error={errors && errors.description && errors.description.message}
                  onChange={(e) => setDescription(e.target.value)}
              />
              <Input
                  name="capacity"
                  placeholder="Вместимость"
                  error={errors && errors.capacity && errors.capacity.message}
                  onChange={(e) => setCapacity(e.target.value)}
              />
              <Input
                  name="planeImg"
                  type="file"
                  error={errors && errors.planeImage && errors.planeImage.message}
                  onChange={(e) => setPlaneImage(e.target.files[0])}
              />
              <Button
                  containerClassName="buttonContainer"
                  onClick={handleCreatePlane}
              >
                  Создать
              </Button>
          </form>
      </ContentWrapper>
  )
}