import styled from "styled-components";

export const InputContainer = styled.div`
  margin-top: 1rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  box-sizing: border-box; /* Garante que o padding não aumente o tamanho total */
`;

export const Button = styled.button`
  background-color: #007bff; /* Azul */
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100px;

  &:hover {
    background-color: #0056b3; /* Azul mais escuro no hover */
  }
`;
