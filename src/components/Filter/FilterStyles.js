import styled from 'styled-components'

export const FilterContainer = styled.div`
    display: flex;
    align-items: baseline;
    padding-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
    justify-content: left;
`

export const FilterText = styled.label`
    margin: 0;
    text-align: center;
    font-weight: 600;
    font-size: 22px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: #2a363b;
`

export const FilterInput = styled.input`
    width: 320px;
    margin-left: 10px;
    padding: 8px;
    margin-bottom: 14px;
    opacity: 0.4;
    border: none;
    box-shadow: 1px 1px 2px 2px rgba(31, 31, 31, 0.5);
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #2a363b;
`