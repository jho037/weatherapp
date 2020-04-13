import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button, ButtonGroup } from 'react-bootstrap';
 
const responsive = {
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 5 // optional, default to 1.
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
}
}

 class Weathercards extends React.Component {
    
    render() {
        return (
            <div>
                <ButtonGroup className="bg-white w-100 ba">
                    <Button className="ba" variant="secondary">Now</Button>
                    <Button variant="secondary">Hourly</Button>
                    <Button variant="secondary">10 Day</Button>
                </ButtonGroup>
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={false}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                </Carousel>;
            </div>
        )
    }
}

export default Weathercards;
