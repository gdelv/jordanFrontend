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

            ],

            items2: [
                {
                    id: 1,
                    title: 'TRENDING ON THE COURT',
                    image1: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/8ef2ada7-0cf4-43d4-a0a1-4a60e3071b06/jordan.jpg',
                    image2: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/1b387797-073a-4f60-8b67-9485c23ca556/jordan.jpg',
                    image1title: 'AIR JORDAN XXXIV SE',
                    image2header: 'L.A BORN',
                    image2title: 'JORDAN "WHY NOT?" ZERO.3',
                    a1text: 'Shop',
                    a2text: 'Shop'

                },
                {
                    id: 2,
                    title: 'TRENDING ON THE STREETS',
                    image1: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/ac454c04-2d8b-4cf5-b73a-7245545b6f7c/jordan.jpg',
                    image2: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/de7332be-8c0d-405f-af9e-201ba9f61ab3/jordan.jpg',
                    image1title: 'JORDAN AIR MAX 200',
                    image2title: "JORDAN WOMEN'S FLIGHT CAPSULE",
                    a1text: 'Shop',
                    a2text: 'Shop'
                },
                {
                    id: 3,
                    title: 'MEMBER ACCESS',
                    image1: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/2225370e-a461-4ea3-ac94-3ece70dc3575/jordan.jpg',
                    image2: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/037f5213-a631-4e91-9c70-9187aefda947/jordan.jpg',
                    image1header: "'JORDAN UNITE COLLECTION'",
                    image1title: 'AIR JORDAN III',
                    image2title: "GET JORDAN'S LATEST",
                    a1text: 'Shop Now',
                    a2text: 'Download SNKRS'
                },
                {
                    id: 4,
                    title: 'EXPLORE MORE FROM JORDAN',
                    image1: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/063f62a9-28b5-4f40-9e06-a894f5c469dd/jordan.jpg',
                    image2: 'https://c.static-nike.com/a/images/f_auto/dpr_2.0/h_500,c_limit/6d0400bf-5378-4ec5-85f1-40145fce3d30/jordan.jpg',
                    image1title: 'STORIES UNITING THE COMMUNITY',
                    image2title: 'THE ULTIMATE HISTORY OF AIR JORDAN',
                    a1text: 'Explore',
                    a2text: 'Explore'

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

    renderItems2 = () => {
        return (
            <div className='items2-container'>
                {this.state.items2.map(item => {
                    return (
                        <div className='item2-card' key={item.id}>
                            <h2>{item.title}</h2>
                            <img src={item.image1} />
                            <div>
                                <h6>{item.image1header}</h6>
                                <h2>{item.image1title}</h2>
                                <a className={item.a1text !== 'Shop' ? 'shop-now' : 'shop'}>{item.a1text}</a>

                            </div>
                            <img src={item.image2} />
                            <div>
                                <h6>{item.image2header}</h6>
                                <h2>{item.image2title}</h2>
                                <a className={item.a2text !== 'Shop' ? 'shop-now' : 'shop'}>{item.a2text}</a>
                            </div>

                        </div>
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
                {this.renderItems2()}
                <div className='bottom-container'>
                    <li>Jordan Shoes</li>
                    <li>Jordan Clothing</li>
                    <li>Jordan Gear</li>
                    <li>Featured</li>
                </div>
            </>
        )
    }
}


export default Landing