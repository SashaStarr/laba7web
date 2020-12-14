import styled from 'styled-components';

export const MainBody = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
`;

export const TextStyle = styled.div`
    padding-top: 250px;
    color: black;
    font-size: 16px;
    padding-right: 20px;
    h1 {
        font-size: 35px;
        color: black;
    }
    `

export const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 10%;
    width: 1000px;
    padding-top: 50px;
`

export const ProductContainer = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    background-color: #ededed;
    cursor: pointer;
    border-radius: 20px;
    max-width: 200px;
    text-align: left;
    color: #0d1e29;
    font-size: 22px;
    font-weight: 500;
    h1 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        margin-left: 30px;
    }
    h2 {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #c03081;
        padding-top : 10px;
        margin-left: 40px;

    }
    div {
        font-weight: 400;
        font-size: 80%;
        padding-bottom: 10px;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 10%;
`;
