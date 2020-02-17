import React from 'react'
import '../components/ItemCard'




export class LandingCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    title: 'NOW IN FLIGHT',
                    image: 'https://c.static-nike.com/a/images/f_auto/q_auto/t_PDP_864_v1/8ba22e90-9e81-44cb-a362-33ea402a14ff/sheila-rashid-the-jordan-chicago-collaborators-collection-mens-pullover-hoodie-nMnkMQ.jpg',



                }
            ]
        }
    }
}