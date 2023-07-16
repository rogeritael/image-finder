import styled from 'styled-components';

export const StyledDiv = styled.div`

    .cards {
        margin-top: 90px;
        display: flex;
        justify-content: space-around;

        li {
            border: 1px solid #ccc;
            display: inline-block;
            width: 30vw;
            height: 200px;
            padding: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            div {
                margin-top: 14px;

                span {
                    margin-right: 8px;
                    padding: 4px 8px;
                    border-radius: 24px;
                    font-size: 12px;
                    border: 1px solid #ccc;
                }
            }
        }
    }
`