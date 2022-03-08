import React from "react";
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Accessory } from "../../components/Acessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Button } from "../../components/Button";

import { CarDTO } from "../../dtos/CarDTO";

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
    Accessories,
    Footer
} from './styles'
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

interface Params {
    car: CarDTO
}

export function CarDetails() {
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car } = route.params as Params

    function handleConfirmationRental() {
        navigation.navigate('Scheduling', { car })
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
                    imageUrl={car.photos}
                />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>{`R$ ${car.rent.price}`}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {
                        car.accessories.map(accessory => (
                            <Accessory
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}
                            />
                        ))
                    }
                </Accessories>

                <About>
                    {car.about}
                </About>
            </Content>

            <Footer>
                <Button name="Escolher período do aluguel" onPress={handleConfirmationRental} />
            </Footer>
        </Container>
    )
}