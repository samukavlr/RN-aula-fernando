
import styled from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    /* alinhamento vertical */
    justify-content: center;
    /* alinhamento horizontal */
    align-items: center;
    background-color: ${( {theme} ) => theme.colors.background};
    
`
export const Title = styled.Text`
    font-size: 24px;
    font-family: ${( {theme} ) => theme.fonts.bold};
    color: ${( {theme} ) => theme.colors.title};
`
    