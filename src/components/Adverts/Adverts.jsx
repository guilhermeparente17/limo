import React from 'react'
import Button from '../Button/Button'

import {
    AdvertsContainer,
    AdvertsContent,
    Adverts1,
    AdvertContainer,
    AdvertContent,
    Adverts2,
    AdvertsCoat,
    AdvertsShoes,
    AdvertContentP,
    AdvertTitle,
    AdvertText
} from './AdvertsElements'

const Adverts = () => {
    return (
        <AdvertsContainer>
            <AdvertsContent>
                <Adverts1>
                    <AdvertContainer
                        width={100}
                        height={480}
                        minWidth={100}
                        minHeight={250}
                    >
                        <AdvertContent
                            display='flex'
                            justify='flex-end'
                            align='center'
                        >
                            <AdvertText>
                                <AdvertContentP>Trending now</AdvertContentP>
                                <AdvertTitle>Summer Sale <br /> New Collection</AdvertTitle>
                                <Button name="find collections" width={250} />
                            </AdvertText>
                        </AdvertContent>
                    </AdvertContainer>

                </Adverts1>

                <Adverts2>
                    <AdvertsCoat>
                        <AdvertContainer
                            width={90}
                            height={250}
                        >
                            <AdvertContent
                                display='flex'
                                justify='flex-start'
                                align='center'
                                paddingLeft={40}
                            >
                                <AdvertText>
                                    <AdvertContentP>Trending now</AdvertContentP>
                                    <AdvertTitle>lost week best product <br /> sale up to 70% off</AdvertTitle>
                                    <Button name="find collections" width={250} />
                                </AdvertText>
                            </AdvertContent>
                        </AdvertContainer>
                    </AdvertsCoat>
                    <AdvertsShoes>
                        <AdvertContainer
                            width={90}
                            height={230}
                        >
                            <AdvertContent
                                display='flex'
                                justify='flex-start'
                                align='center'
                                paddingLeft={40}
                            >
                                <AdvertText>
                                    <AdvertContentP>Trending now</AdvertContentP>
                                    <AdvertTitle>Leather Shoes Watch <br /> Footwear Bullock</AdvertTitle>
                                    <Button name="find collections" width={250} />
                                </AdvertText>
                            </AdvertContent>
                        </AdvertContainer>
                    </AdvertsShoes>
                </Adverts2>
            </AdvertsContent>
        </AdvertsContainer>
    )
}

export default Adverts