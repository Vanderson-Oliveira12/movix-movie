import styled from "styled-components";

export const CardStyle = styled.div`
    padding: 1rem;
    flex: 0 1 23.5%;
    position: relative;
    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(40px);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    transition: .5s ease;
    height: 52rem;
    
    &:hover{
        transform: scale(1.02);
        cursor: pointer;
    }


    .star-points{
        position: absolute;
        display: flex;
        align-items: center;
        gap: .5rem;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(4px);
        border-radius: 8px;
        padding: 1rem;
        left: 10px;
    }

    img{
        border-radius: 8px;
        width: 100%;
        height: 43rem;
    }

    h3{
        padding-top: 1.8rem;
        color: ${({ theme }) => theme.fontColor.gray500};
        font-weight: 600;
        font-size: 1.6rem;
    }

    p{
        color: #FFAD49;
        font-weight: 400;
        font-size: 1.4rem;
    }
    
    @media screen and (min-width: 320px) and (max-width: 480px) {
        width: 80%;
        
            h3{
                padding-bottom: 1.2rem;
                font-size: 1.4rem;
                font-weight: 400;
            }
    }

    @media (min-width: 481px) and (max-width: 767px){
        flex: 1 1 45%;
        height: 51rem;

        h3{
                font-size: 1.4rem;
                font-weight: 400;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px){
        flex: 0 1 31%;
        height: 51rem;

        h3{
                font-size: 1.6rem;
                font-weight: 400;
        }
    }

    @media (min-width: 1025px) and (max-width: 1280px){
        flex: 0 1 31%;
        height: 51rem;

        h3{
                font-size: 1.6rem;
                font-weight: 400;
        }
    }

`