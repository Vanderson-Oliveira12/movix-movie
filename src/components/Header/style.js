import styled from "styled-components";

export default styled.header`
    height: 300px;

    .header{
        padding-top: 8rem;
        height: 100%;
        width: 90%;
        max-width: 1440px;
        margin: 0 auto;
    }

    .header h1{
        color: ${({ theme }) => theme.fontColor.gray500};
        font-weight: 600;
        font-size: 4.2rem;
    }

    .header h2{
        color: ${({ theme }) => theme.fontColor.gray300};
        font-size: 1.6rem;
    }

    .container-input{
        display: flex;
        align-items: center;
        gap: 1.2rem;

            a{
                color: #fff;
                background-color: ${({ theme }) => theme.primaryColor};
                border-radius: 1rem;
                padding: 1.7rem 1.2rem;
                transition: .4s ease;

                    &:hover{
                        transform: scale(1.08);
                    }
            }
    }

    .header-container-text{
        display: flex;
        flex-direction: column;
        gap: 2.2rem;
    }

    .header-container-input{
        width: 100%;
        max-width: 290px;
        border: 1px solid #323B54;
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.1);
        color: #C3C8D4;  
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-container-input svg{
        margin: 1.2rem 0 1rem 1rem;
    }

    .header-input{
        padding: 1rem 1.2rem;
        width: 90%;
        border: none;
        background-color: transparent;
        color: #C3C8D4;
        outline: none;

        &:focus::placeholder{
            transition: .5s ease;
            opacity: 0;
        }
    }

    @media (min-width: 320px) and (max-width: 480px){
        .header h1 {
            font-size: 2.8rem;
        }

        .header h2{
            font-size: 1.4rem;
            width: 30rem;
            font-weight: 400;
        }

        .container-input a{
            font-size: 1.4rem;
        }

        .header-input{
            font-size: 1.4rem;
        }

    }

    @media (min-width: 481px) and (max-width: 767px){
        .header h1 {
            font-size: 2.8rem;
        }

        .header h2{
            font-size: 1.4rem;
            width: 25rem;
            font-weight: 400;
        }

        .container-input a{
            font-size: 1.4rem;
        }

        .header-input{
            font-size: 1.4rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px){

        .header h1 {
            font-size: 3.2rem;
        }

        .header h2{
            font-size: 1.4rem;
            width: 25rem;
            line-height: 120%;
            font-weight: 400;
        }

        .container-input a{
            font-size: 1.4rem;
        }

        .header-input{
            font-size: 1.4rem;
        }

    }

    @media (min-width: 1025px) and (max-width: 1280px){
        .header h1 {
            font-size: 3.2rem;
        }

        .header h2{
            font-size: 1.4rem;
            width: 25rem;
            line-height: 120%;
            font-weight: 400;
        }

        .container-input a{
            font-size: 1.4rem;
        }

        .header-input{
            font-size: 1.4rem;
        }
    }

`