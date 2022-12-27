import styled from "styled-components";

export const BannerStyle = styled.div` 
    position: relative;
    height: 500px;
    width: 90%;
    max-width: 1440px;
    margin: 2.2rem auto 0 auto;
    border-radius: 4rem;

        img{
            width: 100%;
            height: 100%;
            border-radius: 4rem;
            object-fit: cover;
            object-position: 0px 0px;
            opacity: .6;
        }

        @media screen and (min-width: 320px) and (max-width: 480px){
            width: 90%;

                img{
                    object-position: 50% 0px;
                }

        }

        @media screen and (min-width: 481px) and (max-width: 767px){
            width: 90%;

            img{
                object-position: 50% 0px;
            }
        }

        @media screen and (min-width: 768px) and (max-width: 1024px){
            width: 90%;

            img{
                object-position: 50% 0px;
            }
        }

        @media screen and (min-width: 1025px) and (max-width: 1280px){

        }

        @media screen and (min-width: 1281px){

        }
`

export const ContentTitle = styled.div`
    width: 48rem;
    background: rgba(32, 40, 62, 0.8);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    position: absolute;
    bottom: -6rem;
    left: 6rem;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: .8rem;

        p{
            font-size: 1.4rem;
            color: #BEB7FB;
            font-weight: 200;
        }

        h1{
            font-size: 2.2rem;
            color: ${({ theme }) => theme.fontColor.gray500};
            font-weight: 600;
        }

        @media screen and (min-width: 320px) and (max-width: 480px){
            width: 100%;
            left: 1rem;
            padding: 3.2rem;

            h1{
                    font-size: 1.6rem;
                }
        }

        @media screen and (min-width: 481px) and (max-width: 767px){
            left: 1rem;
            padding: 3.2rem;

                h1{
                    font-size: 1.6rem;
                }
        }

        @media screen and (min-width: 768px) and (max-width: 1024px){
            left: 1rem;
            padding: 3.2rem;

                h1{
                    font-size: 1.6rem;
                }
        }

        @media screen and (min-width: 1025px) and (max-width: 1280px){
            left: 1rem;
            padding: 3.2rem;

                h1{
                    font-size: 1.6rem;
                }
        }

`