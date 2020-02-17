import React from 'react'
import '../styles/Landing.css'
import ItemCard from '../components/ItemCard'
import Slider from 'react-slick'

class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/8ba22e90-9e81-44cb-a362-33ea402a14ff/sheila-rashid-the-jordan-chicago-collaborators-collection-mens-pullover-hoodie-nMnkMQ.jpg',
                    item: "SHEILA RASHID: THE JORDAN CHICAGO COLLABORATORS' COLLECTION",
                    price: '$100'


                },
                {
                    id: 2,
                    image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/531d6897-e5cf-4f77-9c92-8896fd46355e/cody-hudson-the-jordan-chicago-collaborators-collection-mens-pullover-hoodie-HsR1jt.jpg',
                    item: "CODY HUDSON: THE JORDAN CHICAGO COLLABORATORS' COLLECTION",
                    price: '$100'

                },
                {
                    id: 3,
                    image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/1f1cabf7-8c5f-4d26-b61e-dd8751d5f6da/jordan-why-not-zer03-mens-basketball-shoe-LJCLGj.jpg',
                    item: 'JORDAN "WHY NOT?"ZERO.3',
                    price: '$130'
                },
                {
                    id: 4,
                    image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/2dde4cc8-3498-4cbb-9d74-135574d0ba6b/air-jordan-3-retro-se-mens-shoe-jzW36H.jpg',
                    item: 'AIR JORDAN 3 RETRO SE',
                    price: '$200'
                },
                {
                    id: 5,
                    image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/4837ab50-c03a-44dc-adaa-8e1e5ce7bc0a/air-jordan-xxxiv-basketball-shoe-RG4jCV.jpg',
                    item: 'AIR JORDAN XXXIV',
                    price: '$180'

                }

            ]
        }
    }


    renderItems = (settings) => {
        return (
            <div className='carousel-container'>
                {this.state.items.map(item => {
                    return (
                        
                            <Slider key={item.id} {...settings}>
                                <ItemCard
                                    image={item.image}
                                    item={item.item}
                                    price={item.price}
                                    className='slider-img'
                                />
                            </Slider>
                    )
                })}
            </div>
        )
    }
    render() {

        var settings = {
            className: 'slider',
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3
        };
        return (
            <>
                <div className='please'>
                    <img className='kemba' src='https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/d4863db8-8104-4012-929f-e22a741795a0/jordan.jpg'></img>
                </div>
                <div className='kemba-title'>
                    <h2>JORDAN NBA ALL-STAR 2020 COLLECTION</h2>
                    <a>Shop</a>
                </div>
                <h2 className='items-title'>NOW IN FLIGHT</h2>
                {this.renderItems(settings)}
            </>
        )
    }
}


export default Landing