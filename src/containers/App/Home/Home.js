import React from "react";
import { MainBody, TextStyle,ProductsContainer, ProductContainer, ProductInfo} from "./Home.styled";
import Main from "../../../Icons/accessories.jpg";
import Adidas0 from "../../../Icons/adidas1.jpg";
import Adidas from "../../../Icons/adidas2.jpg";
import Adidas2 from "../../../Icons/adidas3.jpg";
import { Image } from '../Help'

const { useState } = require("react");

function Home(props) {

    const [sneaker, setSneaker] = useState([
        {
            header: "Adidas SMITH",
            price: 120,
            img: Adidas0
        },
        {
            header:  "Adidas Ozwe",
            price: 130,
            img: Adidas
        },
        {
            header: "Adidas Aztrek",
            price: 140,
            img: Adidas2
        }
    ])

    return(<div>
< MainBody>
          <TextStyle>
            <h1>New design</h1>
            <p>
              Welcome
            </p>
          </TextStyle>
          <img src={Main} />
        </ MainBody>

        <ProductsContainer>
            {sneaker.map((sneaker, index) =>
                    <ProductContainer key={`Item${index}`}>
                        <Image img={sneaker.img} width='200px' height='250px' />
                        <ProductInfo>  
                            <h1>{sneaker.header}</h1>
                            <h2>Price: {sneaker.price}$</h2>
                        </ProductInfo>  
                    </ProductContainer>
                )}
        </ProductsContainer>
        </div>
    );
}

  export default Home;