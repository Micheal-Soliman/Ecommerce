import styled from 'styled-components'
import {AiOutlineSearch} from 'react-icons/ai'
const mainColor = '#2196f3'
const secondColor = 'black'
const thirdColor = '#e3f2fd'

export const Head = styled.div`
    display: flex;
    margin-top: 25px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 850px){
        flex-direction: column;
    }
`
export const SearchBox = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        margin-bottom: 20px;
    }

`
export const SearchIcon = styled(AiOutlineSearch)`
    font-size: 24px;
    margin-right: 5px;
    cursor: pointer;
`
export const Search = styled.input`
    border: 1px solid ${mainColor};
    height: 20px;
    width: 200px;
    &:focus {
        outline: 0px;
    }
`
export const FilterBox = styled.div`
@media screen and (max-width: 850px){
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;
}
`
export const ButtonFilter = styled.button`
    margin-right: 4px;
    border: 2px solid ${mainColor};
    background: ${thirdColor};
    padding: 10px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    cursor: pointer;
    &:active{
        background: ${mainColor};
        color: ${thirdColor};
    }
    @media screen and (max-width: 850px){
        margin-top: 4px;
        flex: 33%;
    }

`