import React from 'react'

import {
    ButtonContainer
} from './Buttonelements'

const Button = ({ name, width }) => {
    return (
        <ButtonContainer width={width}>
            {name}
        </ButtonContainer>
    )
}

export default Button