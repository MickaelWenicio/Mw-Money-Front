import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction:column;

    h2{
        color: var(--text-title);
        text-align: center;
        font: 1.5rem;
        margin-bottom: 2rem;
    }

    form{
        display: flex;
        flex-direction: column;

        input{
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
            background: #e7e9ee;

            border: 1px solid #d7d7d7;
            font-weight: 400;
            font-size: 1rem;
            outline: none;

            &::placeholder{
                color: var(--text-body);
            }

            & + input {
                margin-top: 1rem;
            }
        }

        button[type="submit"]{
            width: 100%;
            padding: 0 1.5rem;
            height: 4rem;
            border-radius: 0.25rem;
            color: #fff;
            background: var(--green);
            margin-top: 1.5rem;
            font-size: 1rem;
            border: none;

            transition: all 0.2s ease-in-out;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }
`