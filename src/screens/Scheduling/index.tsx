import React, { useState } from 'react'
import { Alert, StatusBar } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation, useRoute } from '@react-navigation/native'
import { format } from 'date-fns/esm'
import { parseISO } from 'date-fns'

import { BackButton } from '../../components/BackButton'

import ArrowSvg from '../../assets/arrow.svg'

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles'

import { Button } from '../../components/Button'

import { CarDTO } from '../../dtos/CarDTO'

import {
    Calendar,
    DayProps,
    generateInterval,
    MarkedDateProps
} from '../../components/Calendar'

interface RentalPeriod {
    startFormatted: string
    endFormatted: string
}

interface Params {
    car: CarDTO
}

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps)
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const theme = useTheme()
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car } = route.params as Params

    function handleConfirmRental() {
        if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
            Alert.alert("Selecione o intervalo para alugar")
        } else {
            navigation.navigate('SchedulingDetails', {
                car,
                dates: Object.keys(markedDates)
            })
        }
    }

    function handleBack() {
        navigation.goBack()
    }

    function handleChangedate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
        let end = date

        if (start.timestamp > end.timestamp) {
            start = end
            end = start
        }

        setLastSelectedDate(end)

        const interval = generateInterval(start, end)
        setMarkedDates(interval)

        const firstDate = Object.keys(interval)[0]
        const endDate = Object.keys(interval)[Object.keys(interval).length - 1]

        setRentalPeriod({
            startFormatted: format(parseISO(firstDate), 'dd/MM/yyyy'),
            endFormatted: format(parseISO(endDate), 'dd/MM/yyyy'),
        })
    }

    return (
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <BackButton
                    onPress={handleBack}
                    color={theme.colors.shape}
                />

                <Title>
                    Escolha uma {'\n'}
                    data de início e {'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue
                            selected={!!rentalPeriod.startFormatted}
                        >
                            {rentalPeriod.startFormatted}
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue
                            selected={!!rentalPeriod.endFormatted}
                        >
                            {rentalPeriod.endFormatted}
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangedate}
                />
            </Content>

            <Footer>
                <Button
                    name="Confirmar"
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    )
}