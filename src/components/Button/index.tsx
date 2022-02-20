import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import {
    Container,
    Title
} from './styles'

interface Props {
    name: string
    color?: string
    //onPress: () => void
}

export function Button({
    name,
    //onPress,
    color,
    ...rest
}: Props) {
    return (
        <Container {...rest} color={color!!}>
            <Title>{name}</Title>
        </Container>
    )
}