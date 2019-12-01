import React from 'react';

const ImageList = (props) => {
    const images = props.images.map(({id, alt_description, urls}) => (
        <img key={id} alt={alt_description} src={urls.regular} />
    ))

    return (
        <div className="image-list">{images}</div>
    )
}

export default ImageList;