import React from 'react'
import { Carousel } from 'antd';

function ImageSlider(props) {
    return (
        <div>

            <Carousel autoplay>
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img style={{ padding: '10px', maxHeight: '300px', objectFit: 'cover', borderRadius: '50%', margin: '0 auto' }}
                            src={`http://localhost:5000/${image}`} alt="productImage" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ImageSlider
