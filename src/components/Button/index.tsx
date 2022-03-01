import React from "react";
import { useTheme } from "styled-components";

import {
    Container,
    Title
} from './styles'

interface Props {
    name: string
    color?: string
    onPress: () => void
}

export function Button({
    name,
    onPress,
    color,
}: Props) {
    const theme = useTheme()
    return (
        <Container onPress={onPress} color={color ? color : theme.colors.main}>
            <Title>{name}</Title>
        </Container>
    )
}