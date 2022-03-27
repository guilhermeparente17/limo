import React from 'react'
import Adverts from '../../components/Adverts/Adverts'
import Header from '../../components/Header/Header'
import InitialSection from '../../components/InitialSection/InitialSection'

const Home = () => {
    return (
        <>
            <Header />
            <InitialSection />
            <Adverts />
        </>
    )
}

export default Home