import styled from "styled-components";

export const OpenModalButton = styled.button`
    margin-right: 20px;
    width: 150px;
    padding: 15px;
    text-decoration: none;
    text-align:center;
    margin-bottom: 20px;
    background-color: #2a363b;
    font-family: 'Noto Sans', sans-serif;
    border: 1px solid #2a363b;
    color: #fff;
    letter-spacing: 1px;
    border-radius: 5px;
    margin-top: 10px;
`

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
`

export const CloseModalButton = styled.button`
    position:absolute;
    right: 15px;
    padding: 5px 7px;
    border: 1px solid #2a363b;
    border-radius: 5px;
`
export const CloseModalIcon = styled.img`
    width: 10px;
    height: 10px;
`