import styled from 'styled-components'

export const AdvertsContainer = styled.section`
    width: 100%;
    height: 700px;
    padding: 80px 0px 0px 80px;

    @media screen and (max-width: 800px){
        height: 900px;
        padding: 20px 0px 0px 0px;
    }
`;

export const AdvertsContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 800px){
        flex-direction: column;
        justify-content: center;
    }
`;

export const Adverts1 = styled.div`
    width: 50%;
    height: 550px;
    background-image: url('https://images.pexels.com/photos/1485781/pexels-photo-1485781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size:cover;
    background-position: center;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px){
        width: 350px;
        height: 280px;
        margin-bottom: 20px;
    }

`;

export const AdvertContainer = styled.div`
    width:  ${props => (`${props.width}%`)};
    height: ${props => (`${props.height}px`)};
    border: 2px solid #fff;

    @media screen and (max-width: 800px){
        width:  ${props => (`${props.minWidth}%`)};
        height: ${props => (`${props.minHeight}px`)};
    }
`;

export const AdvertContent = styled.div`
    background: rgba(255, 255, 255, 0.4);
    width: 100%; 
    height: 100%;
    display: ${props => (`${props.display}`)};
    justify-content: ${props => (`${props.justify}`)};
    align-items: ${props => (`${props.align}`)};
    padding-left: ${props => (`${props.paddingLeft}px`)};
`;

export const AdvertContentP = styled.p`
    font-family: 'Dosis', sans-serif;
    margin-bottom: 15px;
    color: #000;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
`;

export const AdvertTitle = styled.h2`
    font-size: 40px;
    text-align: left;
    margin-bottom: 15px;

    @media screen and (max-width: 1400px){
        font-size: 20px;
    }
`;

export const AdvertText = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 40px;
`;



export const Adverts2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    
`;

export const AdvertsCoat = styled.div`
    width: 90%;
    height: 280px;
    background-color: #fff;
    margin-bottom: 20px;
    background-image: url('https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size:cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 800px){
        width: 350px;
    }
`;

export const AdvertsShoes = styled.div`
    width: 90%;
    height: 250px;
    background-image: url('https://images.pexels.com/photos/7651067/pexels-photo-7651067.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;


    @media screen and (max-width: 800px){
        width: 350px;
    }
`;

