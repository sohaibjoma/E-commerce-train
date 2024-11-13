import img1 from '../assets//Images/image-1.jpeg'
import img2 from '../assets/Images/image-2.jpeg'
import img3 from '../assets/Images/image-3.jpeg'

import './Slider.css'

function Slider() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100 height-500" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100 height-500" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider;
