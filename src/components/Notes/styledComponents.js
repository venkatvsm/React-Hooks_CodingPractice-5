// Style your elements here
import Styled from 'styled-components'

export const BgContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CardContainer = Styled.div`
    min-height: 100vh;
    width: 90%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 5px 5px 10px #475569;
    @media screen and (min-width: 768px){
        width: 60%;
        box-shadow: none;
    }
`
export const Heading = Styled.h1`
    font-family: 'Bree Serif';
    text-align: center;
    color: #4c63b6;
    @media screen and (min-width: 768px){
       font-size: 44px;
    }
`
export const AddNotesContainer = Styled.form`
    width: 90%;
    height: 35vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 5px 5px 10px #475569;
    margin-bottom: 15px;
    @media screen and (min-width: 768px){
        padding: 25px;
        height: 38vh;
    }
`
export const InputField = Styled.input`
    width: 100%;
    height: 40px;
    padding-left: 10px;
    font-family: 'Roboto';
    font-size: 14px;
    margin-bottom: 15px;
    outline: none;
    cursor: pointer;
    border: none;
    @media screen and (min-width: 768px){
        font-size: 18px;
    }
`
export const TextAreaField = Styled.textarea`
    width: 100%;
    height: 80px;
    padding-left: 10px;
    font-family: 'Roboto';
    font-size: 14px;
    margin-bottom: 15px;
    outline: none;
    cursor: pointer;
    border: none;
    @media screen and (min-width: 768px){
       font-size: 18px;
    }
`
export const AddBtn = Styled.button`
    align-self: flex-end;
    margin-top: 20px;
    height: 35px;
    width: 75px;
    background-color: #4c63b6;
    color: #ffffff;
    border-radius: 5px;
    border: none;
    font-family: 'Roboto';
    font-size: 14px;
    font-weight: 500;
`
export const EmptyContainer = Styled.div`
    width: 90%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 768px){
        height: 40vh;
    }
`
export const EmptyLIstImage = Styled.img`
    width: 80px;
    @media screen and (min-width: 768px){
        width: 120px;
    }
`
export const EmptyContainerText = Styled.h1`
    font-family: 'Roboto';
    font-size: 21px;
    color: #475569;
    margin-bottom: 10px;
    @media screen and (min-width: 768px){
        font-size: 30px;
    }
`
export const EmptyContainerPara = Styled.p`
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: 500;
    color: #475569;
    margin: 0px;
    @media screen and (min-width: 768px){
        font-size: 19px;
    }
`
export const UlListContainer = Styled.ul`
    width: 90%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    @media screen and (min-width: 768px){
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
`
