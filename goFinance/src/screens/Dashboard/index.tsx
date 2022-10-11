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
              <UserName>Mega lindo!!!</UserName>

            </User>
            </UserInfo>
              <Icon name = "power"/>
          </UserWrapper>
        </Header>
        <Hightlightcards>
          <Hightlightcard />
          <Hightlightcard />
          <Hightlightcard />
        </Hightlightcards>
      </Container>
    )
  
}