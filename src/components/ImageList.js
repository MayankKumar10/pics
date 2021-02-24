import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) =>{

    const images = props.images.map((image) => {
       return <img src={image.urls.thumb} />;
    });

    return <div> {images} </div>;
};

export default ImageList;
