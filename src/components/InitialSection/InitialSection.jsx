import React from 'react'
import Button from '../Button/Button'
import { FiPlay } from 'react-icons/fi'

import {
    InitialSectionContainer,
    InitSectionImg,
    InitSectionContent,
    InitP,
    InitTitle,
    InitPlayTour,
    InitButtonPlay,
    InitPlayText
} from './InitialSectionElements'

const InitialSection = () => {
    return (
        <InitialSectionContainer>
            <InitSectionImg />
            <InitSectionContent>
                <InitP>Buy 2 products Get = Free 1 product</InitP>
                <InitTitle>
                    Exclusive <br />
                    Fashionnable <br />
                    Collection
                </InitTitle>

                <InitPlayTour>
                    <Button name="shop now" width={150} />
                    <InitButtonPlay>
                        <FiPlay />
                    </InitButtonPlay>
                    <InitPlayText>Start tour</InitPlayText>
                </InitPlayTour>
            </InitSectionContent>
        </InitialSectionContainer>
    )
}

export default InitialSection