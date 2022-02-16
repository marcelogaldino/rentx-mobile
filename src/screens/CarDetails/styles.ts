import styled from "styled-components/native";
import { Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_secondary};
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-top: ${Platform.OS === 'ios' ? getStatusBarHeight() : 0}px;

    /* position: absolute; */
`