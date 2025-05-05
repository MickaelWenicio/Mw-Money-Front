import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--purple);
`

export const Content = styled.div`
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.2rem 1rem;
    align-items: center;
    justify-content: space-between;

    div {
        &:first-child {
            display: flex; 
            align-items: center;
            gap: 10px;
        }
    }
    
    h1 {
        color: #fff;
        font-size: 1.3rem;
        user-select: none;
    }

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--green);
        border: none;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;

        transition: filter 0.2s ease-in-out;
        &:hover{
            filter: brightness(0.9);
        }

        img {
            width: 20px;
        }
    }
`