import { RFValue } from 'react-native-responsive-fontsize';
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';


export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.shape};
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px;
    padding-bottom: ${RFValue(42)}px;
`;
export const Header =styled.View`
    flex-direction: row;
    justify-content: space-between;
  
`;
export const Title =styled.Text`
font-family: ${( {theme} ) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
color:  ${( {theme} ) => theme.colors.title};

`;
export const Icon =styled(Feather)`
font-size: ${RFValue(40)}px;
color:  ${( {theme} ) => theme.colors.success};
`;
export const Footer =styled.View`

`;
export const Amout =styled.Text`
font-family: ${( {theme} ) => theme.fonts.regular};
font-size: ${RFValue(32)}px;
color:  ${( {theme} ) => theme.colors.text_dark};
margin-top :38px;

`;
export const LastTansition =styled.Text`
font-family: ${( {theme} ) => theme.fonts.medium};
font-size: ${RFValue(12)}px;
color:  ${( {theme} ) => theme.colors.text_dark};

`;
