import React from "react";

import { Container,
    Header,
    Title,
    Icon,
    Footer,
    Amout,
    LastTansition,


} from "./styles";

export function Hightlightcard(){
    return(
        <Container>
            <Header>
                <Title>
                    Entrada
                </Title>
                <Icon 
                  name="arrow-up-circle"
                />
            </Header>
            <Footer>
                <Amout>
                    R$ 17.400,00
                </Amout>
                <LastTansition>
                     Última entrada dia 13 de abril
                </LastTansition>
            </Footer>
        </Container>
    )
}