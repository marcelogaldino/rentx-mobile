import React from "react";
import { StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import { Accessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

import { Button } from "../../components/Button";

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Brand,
    Name,
    Description,
    Rent,
    Period,
    Price,
    Acessories,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    Footer
} from './styles'

export function SchedulingDetails() {
    const theme = useTheme()
    const navigation = useNavigation<any>()

    function handleConfirmRental() {
        navigation.navigate('SchedulingComplete')
    }

    function handleBack() {
        navigation.goBack()
    }

    return (
        <Container>
            <StatusBar
                barStyle='dark-content'
                backgroundColor='transparent'
            />
            <Header>
                <BackButton
                    onPress={handleBack}
                />

            </Header>

            <CarImages>

                <ImageSlider
                    imageUrl={['https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png']}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Acessories>
                    <Accessory name="380Km/h" icon={speedSvg} />
                    <Accessory name="3.2s" icon={accelerationSvg} />
                    <Accessory name="800 HP" icon={forceSvg} />
                    <Accessory name="Gasolina" icon={gasolineSvg} />
                    <Accessory name="Auto" icon={exchangeSvg} />
                    <Accessory name="2 pessoas" icon={peopleSvg} />
                </Acessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={24}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue>18/06/2022</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={10}
                        color={theme.colors.text}
                    />

                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue>18/06/2022</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$580 x3 diarias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900,00</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button
                    name="Alugar agora"
                    color={theme.colors.success}
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    )
}