// Style your elements here
import Styled from 'styled-components'

export const ListContainer = Styled.li`
    width: 100%;
    border-style: solid;
    border-width: 2px;
    border-radius: 8px;
    border-color: #d8d8d8;
    padding: 15px;
    margin-bottom: 10px;
    @media screen and (min-width: 768px){
        width: 30%;
        margin: 10px;
    }
`
export const NameEl = Styled.h1`
    font-family: 'Roboto';
    color: #1e293b;
    margin: 0px;
    font-size: 20px;
    @media screen and (min-width: 768px){
        font-size: 26px;
    }
`
export const DescriptionEl = Styled.p`
    font-family: 'Roboto';
    font-size: 12px;
    font-weight: 500;
    color:  #475569;
    margin: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    @media screen and (min-width: 768px){
        font-size: 15px;
    }
`
