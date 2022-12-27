import styled from "styled-components";

export default styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    
    .container-movies{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 90%;
        max-width: 1440px;
        margin: 0 auto;
        gap: 2rem;
        padding-bottom: 4rem;
    }

    .container-more{
        padding: 1.6rem 0;
        width: 90%;
        max-width: 1440px;
        margin: 0 auto;
        color: ${({ theme }) => theme.fontColor.gray400};

            h1{
                font-size: 2.2rem;
            }

            h1 span{
                font-size: 1.8rem;
            }
    }

    .container-pagination{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;
        margin: 1rem 0;

            .arrow{
            padding: 1rem;
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

    @media (min-width: 320px) and (max-width: 480px){

        .container-more h1{
            font-size: 1.6rem;
        }

        .container-more h1 span{
            font-size: 1.4rem;
        }

        .container-pagination{
            padding: 1.8rem 0;
            padding-bottom: 0rem;
        }

        .container-movies{
            flex-direction: column;
        }

    }

        @media (min-width: 481px) and (max-width: 767px){

        .container-more h1{
            font-size: 1.6rem;
        }

        .container-more h1 span{
            font-size: 1.6rem;
        }

        .container-pagination{
            padding: 1.4rem 0;
        }
    }


        @media (min-width: 768px) and (max-width: 1024px){
        .container-more h1{
            font-size: 1.8rem;
        }

        .container-more h1 span{
            font-size: 1.8rem;
        }
    }

    
`