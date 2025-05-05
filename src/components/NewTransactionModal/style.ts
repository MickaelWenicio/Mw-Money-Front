import {styled, keyframes} from "styled-components";

const shake = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-5px); }
  40% { transform: translateX(5px); }
  60% { transform: translateX(-5px); }
  80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    border-radius: 20px;

    .shake {
        animation: shake 0.4s ease;
    }

    h2{
        color: var(--text-title);
        text-align: left;
        font: 1.5rem;
        margin-bottom: 2rem;
    }

    p {
        color: var(--red);
        font-weight: 500;
        animation: ${shake} 0.2s ease;
    }


    form{
        display: flex;
        flex-direction: column;
        gap: 15px;

        label {
            color: var(--text-title);
            font-weight: 500;
        }

        input{
            width: 100%;
            padding: 0 1rem;
            height: 3.5rem;
            border-radius: 0.5rem;
            background: #f7f8f9;
            color: var(--text-body);
            margin: 3px 0;

            border: 1px solid #d6d6d6;
            font-weight: 400;
            font-size: 1rem;
            outline: none;

            transition: all ease-in-out .1s;
            
            &:focus {
                box-shadow: 0 0 1px 2px color-mix(in srgb, var(--purple) 60%, transparent);
            }

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
            border-radius: 0.5rem;
            color: #fff;
            background: var(--green);
            font-size: 1rem;
            border: none;

            transition: all 0.2s ease-in-out;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }
`

export const TransactionTypeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img{
        width: 20px;
        height: 20px;
    }
`


interface RadioBoxProps {
    isActive: boolean
    activeColor: 'green'|'red';
}

const colors = {
    green: '#33cc9530',
    red: '#e52e4d30'
}

const borderColors = {
    green: '#33cc95',
    red: '#e52e4d',
}

const activeTexts = {
    green: '#4ba886',
    red: '#894f53',
}

export const RadioBox = styled.button<RadioBoxProps>`
        width: 49%;
        display: flex;
        align-items: center;

        border: 1px solid ${({ isActive, activeColor }) =>
            isActive ? borderColors[activeColor] : '#4B556335'};

        justify-content: center;
        padding: 1rem;
        border-radius: 0.5rem;
        background: ${({ isActive, activeColor }) =>
            isActive ? colors[activeColor] : 'transparent'};

        span{
            display: inline-block;
            font-size: 1rem;

            color: ${({ isActive, activeColor }) =>
                isActive ? activeTexts[activeColor] : '#4B5563'};

            margin-left: 1rem;
        }
        
        transition: border .2s ease-in-out;
`