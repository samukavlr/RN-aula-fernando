import React from 'react'
import { Hightlightcard } from '../../components/Hightlightcard';

import { Container,
  UserInfo,
  Header, 
  Photo,
  User,
  UserGreething,
  UserName,
  UserWrapper,
  Icon,
  Hightlightcards
  
  

} from './styles'

export function Dashboard() {
  
    return (
      <Container>
        <Header>
          <UserWrapper>
           <UserInfo>
            <Photo 
              source = { {uri:'https://avatars.githubusercontent.com/u/101604636?v=4'}}
              />

            <User>
              <UserGreething>Olá,</UserGreething>
              <UserName>Samuca !!!</UserName>

            </User>
            </UserInfo>
              <Icon name = "power"/>
          </UserWrapper>
        </Header>
        <Hightlightcards
          
          >
          <Hightlightcard 
          type = 'up'
          title='Entradas'
          amount='17.400,00'
          lastTansition='Última entrada dia 13 de abril'/>

          <Hightlightcard 
          type = 'down'
          title='Saidas'
          amount='1.259,00'
          lastTansition='Última entrada dia 03 de abril'/>

          <Hightlightcard 
          type = 'total'
          title='Total'
          amount='16.141,00'
          lastTansition='01 à 16 de abril'/>
        </Hightlightcards>
      </Container>
    )
  
}