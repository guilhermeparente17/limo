import styled from 'styled-components'

export const InitialSectionContainer = styled.section`
    width: 100%;
    height: 580px;
    background-color: tomato;
    display: flex;
`;

export const InitSectionImg = styled.img`
    background: url('https://images.pexels.com/photos/3812760/pexels-photo-3812760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
    width: 70%;
    height: 100%;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
        display: none;
    }
`;

export const InitSectionContent = styled.div`
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #fff , #FFEDE6);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 100px;
    padding-top: 100px;

    @media screen and (max-width: 800px){
        padding-left: 50px;
        padding-top: 50px;
    }
`;

export const InitP = styled.p`
    font-size: 14px;
    font-family: 'Dosis', sans-serif;
    margin-bottom: 15px;
`;

export const InitTitle = styled.h1`
    font-size: 48px;
    margin-bottom: 20px;

    @media screen and (max-width: 800px){
        font-size: 38px;
    }
`;

export const InitPlayTour = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 500px){
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const InitButtonPlay = styled.button`
    margin: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.5px solid #525252;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const InitPlayText = styled.span`
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;