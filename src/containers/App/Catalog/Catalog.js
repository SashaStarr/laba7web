import { Box, Typography } from "@material-ui/core";
import React from "react";
import { CatalogHeaderWrap} from "./Catalog.styled";
import {ProductsContainer, ProductContainer, ProductInfo} from "../Home/Home.styled";
import { Pagination } from 'antd';
import Adidas0 from "../../../Icons/adidas1.jpg";
import Adidas from "../../../Icons/adidas2.jpg";
import Adidas2 from "../../../Icons/adidas3.jpg";
import {Button } from "antd";
import { Image } from '../Help'

const { useState } = require("react");

const Catalog = () => {
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
    return (<div>
        <CatalogHeaderWrap>
          <Box display="flex" py={5} mb={5}>
            <Box mx="auto">
              <Typography variant="h2">Catalog</Typography>
            </Box>
          </Box>
        </CatalogHeaderWrap>
        <ProductsContainer>
            {sneaker.map((sneaker, index) =>
                    <ProductContainer key={`Item${index}`}>
                        <Image img={sneaker.img} width='200px' height='250px' />
                        <ProductInfo>  
                            <h1>{sneaker.header}</h1>
                            <h2>Price: {sneaker.price}$</h2>
                        </ProductInfo>  
                        <Button variant="secondary" style={{backgroundColor: "#73E514",borderRadius: "10px",height: '50px',fontWeight: 'bold',border: 0}}>Buy</Button>
                    </ProductContainer>
                )}
        </ProductsContainer>
    </div>
    )
      };



export default Catalog;