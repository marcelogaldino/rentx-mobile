import React from "react";
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Acessory } from "../../components/Acessory";
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
    About,
    Acessories,
    Footer
} from './styles'

export function CarDetails() {
    const navigation = useNavigation<any>()

    function handleConfirmationRental() {
        navigation.navigate('Scheduling')
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
                    <Acessory name="380Km/h" icon={speedSvg} />
                    <Acessory name="3.2s" icon={accelerationSvg} />
                    <Acessory name="800 HP" icon={forceSvg} />
                    <Acessory name="Gasolina" icon={gasolineSvg} />
                    <Acessory name="Auto" icon={exchangeSvg} />
                    <Acessory name="2 pessoas" icon={peopleSvg} />

                </Acessories>

                <About>
                    Este é automóvel desportivo. Surgiu do lendário
                    touro de lide indultado na praça Real Maestranza de Sevilla.
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button name="Escolher período do aluguel" onPress={handleConfirmationRental} />
            </Footer>
        </Container>
    )
}