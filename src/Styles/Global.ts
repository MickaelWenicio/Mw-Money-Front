import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e40;
        --purple: #2D1B69;
        --light-purple: #6933ff;
        --green: #33cc95;
        --text-title: #374151;
        --text-body: #4B5563;
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, strong {
        font-weight: 600;
    }
    
    html {
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 1080px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--purple);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    :disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        background-color: var(--background);
        width: 100%;
        max-width: 576px;
        padding: 3rem;
        position: relative;
        border-radius: 0.25em;
    }

    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        background: none;
        border: none;

        transition: 0.5s ease;

        &:hover{
            filter: brightness(0.5);
        }
    }
`


export default GlobalStyle