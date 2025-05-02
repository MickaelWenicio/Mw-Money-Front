import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3rem;

    h2 {
        color: var(--shape);
        margin-bottom: 1rem;
        font-size: 20px;
        font-weight: 500;
    }
    
    table{
        width: 100%;
        border-spacing: 0 0.5rem;
        background-color: var(--shape);
        border-radius: 0.8rem;

        th{
            color: var(--text-title);
            font-weight: 500;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            background-color: #F9FAFB;
            border-bottom: 1px solid #dddddd;
        }
        
        tr {
            &:not(:first-child) {
                td {
                    border-top: 1px solid #dddddd;
                }
            }
        }

        th:nth-child(1),
        td:nth-child(1) {
            width: 40%;
        }

        th:nth-child(2),
        td:nth-child(2),
        th:nth-child(3),
        td:nth-child(3),
        th:nth-child(4),
        td:nth-child(4) {
            width: 20%;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background-color: var(--shape);
            color: var(--text-body);

            
        
            &.title {
                color: black;
            }

            &.income{
                color: var(--green);
            }

            &.expense{
                color: var(--red);
            }
        }

        
    }
`