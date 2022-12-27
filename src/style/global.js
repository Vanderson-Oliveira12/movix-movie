import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

    *, ::after, ::before{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        width: 100%;
        background-color: #121829;
    }


    a{
        display: inline-block;
        text-decoration: none;
    }

    li{
        list-style: none;
    }

    .App{
        height: 100vh;
        width: 100%;
    }

    .bg-hero{
        display: block;
        width: 100%;
        position: absolute;
        inset: 0;
        z-index: -1;
    }

    @media screen and (min-width: 320px) and (max-width: 480px){

        .App{
            height: auto;
        }
        
    }

`