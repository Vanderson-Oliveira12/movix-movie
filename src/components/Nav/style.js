import styled from "styled-components";

export const NavContainer = styled.nav`
    width: 100%;
    height: 10%;
    padding: 1.4rem 0;
    background: rgba(18, 24, 41, 0.8);
    backdrop-filter: blur(20px);

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        max-width: 1440px;
        margin: 0 auto;
    }



    .menu-burguer{
        padding: .5rem;
        display: none;
    }


    @media (min-width: 320px) and (max-width: 480px){
        height: 15%;
        
        .nav-links{
            font-size: 1.4rem;
        }
    }

    @media (min-width: 481px) and (max-width: 767px){
        height: 15%;

        .nav-links{
            font-size: 1.4rem;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px){
        height: 15%;
    }

    @media (min-width: 1025px) and (max-width: 1280px){
        height: 15%;
    }
`

export const List = styled.ul`
        display: flex;
        gap: 3.2rem;

                a{
                    padding: 1rem 0rem;
                    cursor: pointer;
                    color: ${({ theme }) => theme.fontColor.gray200};
                    font-weight: 600;
                    display: block;
                }

                a::before{
                    content: '';
                    width: 0px;
                    height: 1px;
                    background-color: #5A4AF4;
                    position: absolute;
                    left: 0;
                    bottom: 5px;
                    transition: .5s ease;
                }

                
                a:hover::before{
                    width: 100%;
                }

                a span{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
        }
`