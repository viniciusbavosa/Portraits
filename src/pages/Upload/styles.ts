import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 14px;

  h1 {
    margin: 14px;
  }

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
    label, input, button {
      margin: 8px;
    }

    button {
      border-radius: 8px;
      border: 1px solid black;
      padding: 4px;
      font-weight: bold;

      &:hover {
        background-color: cadetblue;
      }
    }
  }


`;