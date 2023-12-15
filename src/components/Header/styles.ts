import styled from 'styled-components'

export const Container = styled.header`
    background-color: var(--blue);
`

export const Content = styled.div`
    display: flex;
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.2rem 1rem 10rem;
    align-items: center;
    justify-content: space-between;
`

export const Button = styled.button`
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: none;
    padding: 0 2rem;
    height: 3rem;
    border-radius: 0.25rem;

    transition: filter 0.2s ease-in-out;
    &:hover{
        filter: brightness(0.9);
    }
`