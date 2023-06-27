import styled from "styled-components"

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContactItem = styled.li`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 400px;
`

export const ContactName = styled.p`
    margin: 0;
    text-align: center;
    font-weight: 600;
    font-family: 'Noto Sans', sans-serif;
    font-size: 18px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: #2a363b;
`

export const ContactPhone = styled.span`
    margin-left: 10px;
    font-size: 14px;
`

export const ContactButton = styled.button`
    width: 60px;
    font-family: 'Noto Sans', sans-serif;
    padding: 7px;
    font-size: 12px;
    background-color: #2a363b;
    letter-spacing: 0.6px;
    color: #fff;
    border: 1px solid #2a363b;
    border-radius: 3px;
`