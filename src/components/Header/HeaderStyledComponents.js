import styled from "styled-components";

export const HeaderStyledComponents = styled.header`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.paddingTopBottom || '5px'} 0;
    
`

export const StyledLogo = styled.div`
    width: ${props => props.width || '20px'};
    background-color: black;
    border-radius:35%;
    margin-left:5px;
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
`