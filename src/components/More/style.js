import styled from "styled-components";

export const MoreStyle = styled.div`
    width: 90%;
    max-width: 1440px;
    margin: 14rem auto 0 auto;

    display: flex;
    justify-content: center;
    gap: 8rem;
    padding-bottom: 3.2rem;

    @media screen and (min-width: 320px) and (max-width: 480px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 2rem;
        margin-top: 11rem;
    }

    @media screen and (min-width: 481px) and (max-width: 767px){
        flex-direction: column-reverse;
        align-items: center;
        gap: 2rem;
        margin-top: 11rem;
    }

`

export const Card = styled.div`
    width: 380px;
    height: 540px;
    border-radius: 2.4rem;
    
    img{
            border-radius: 2.4rem;
            width: 100%;
            height: 100%;
        }

        @media screen and (min-width: 320px) and (max-width: 480px){
            width: 90%;
        }

        @media screen and (min-width: 481px) and (max-width: 767px){
            width: 80%;
        }

`

export const Content = styled.div`
    flex: 0 0 480px;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .star{
        width: 59px;
        height: 32px;
        background: rgba(0, 0, 0, 0.65);
        backdrop-filter: blur(4px);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: #FFAD49;

        span {
            font-size: 1.4rem;
        }
    }

    .title{
       color: ${({ theme }) => theme.fontColor.gray500};
        font-size: 1.8rem;
    }   

    .desc{
        color: ${({ theme }) => theme.fontColor.gray300};
        line-height: 2.6rem;
        font-size: 1.6rem;
    }

    .infor{
        font-size: 1.6rem;
        display: flex;
        flex-direction: column;
        gap: .8rem;
        margin-bottom: 2.4rem;

        p{
            font-size: 2rem;
            color: ${({ theme }) => theme.fontColor.gray100};
            font-weight: 400;
        }

        
        strong{
            color: ${({ theme }) => theme.fontColor.gray400};
            font-weight: 400;
            font-size: 1.4rem;
        }
    }

    @media screen and (min-width: 320px) and (max-width: 480px){
    .title{
         font-size: 1.6rem;
    }   

    .desc{
        font-size: 1.4rem;
    }

    .infor{
        margin-bottom: 2rem;

        p{
            
            font-size: 1.4rem;
        }

        }

        .star{
            margin: 1rem 0;
        }
    }

    @media screen and (min-width: 481px) and (max-width: 767px){
    .title{
         font-size: 1.6rem;
    }   

    .desc{
        font-size: 1.4rem;
    }

    .infor{
        margin-bottom: 2rem;

        p{
            
            font-size: 1.4rem;
        }

        }

        .star{
            margin: 1rem 0;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1024px){
    flex: 1 0 50%;

    .title{
         font-size: 1.6rem;
    }   

    .desc{
        font-size: 1.4rem;
    }

    .infor{
        margin-bottom: 2rem;

        p{
            
            font-size: 1.4rem;
        }

        }

        .star{
            margin: 1rem 0;
        }
    }
`
