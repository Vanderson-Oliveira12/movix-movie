import styled from "styled-components";

export const Container = styled.div`

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;
        margin: 1rem 0;

            button{
                padding: 1.2rem;
            border-radius: .6rem;
            border: none;
            cursor: pointer;
            background-color: #00152b;
            color: ${({ theme }) => theme.fontColor.gray200};
            &:hover{
                transform: scale(1.1);
                }  

            }
    }

    .pagination__button-active{
        background-color: ${({theme}) => theme.primaryColor} ;
    }
`