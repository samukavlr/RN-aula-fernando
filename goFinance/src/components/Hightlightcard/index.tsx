import React from "react";


import { Container,
    Header,
    Title,
    Icon,
    Footer,
    Amout,
    LastTansition,


} from "./styles";

interface Props{
    type:'up'| 'down' | 'total';
    title:String,
    amount: string,
    lastTansition:string,
}
const icon = {
    up:'arrow-up-circle',
    down:'arrow-down-circle',
    total:'dollar-sign'
}

export function Hightlightcard({
    type,
    title,
    amount,
    lastTansition,
}: Props){
    return(
        <Container type ={type}>
            <Header>
                <Title type={type}>
                    {title}
                </Title  >
                <Icon 
                  name={icon[type]}
                  type={type}
                />
            </Header>
            <Footer>
                <Amout  type ={type}>
                    {amount}
                </Amout>
                <LastTansition  type ={type}>
                     {lastTansition}
                </LastTansition>
            </Footer>
        </Container>
    )
}