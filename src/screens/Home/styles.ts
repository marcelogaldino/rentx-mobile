import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_primary};
`

export const Header = styled.View`
    width: 100%;
    height: 113px;

    justify-content: flex-end;
    padding: 32px 24px;

    background-color: ${({ theme }) => theme.colors.header};
`

export const TotalCars = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};

    color: ${({ theme }) => theme.colors.text};
`

export const HeaderContent = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;