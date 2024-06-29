import React, { useState } from "react";
import { IAutoCompleteInputProps } from "./types";
import {
  Container,
  DataList,
  Input,
  Label,
  Option,
  ErrorMessage,
} from "./style";

const AutoCompleteInput: React.FC<IAutoCompleteInputProps> = ({
  label,
  listId,
  options,
  value,
  onChange,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleBlur = () => {
    if (!options.includes(value)) {
      setIsValid(false);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000); // Oculta a mensagem após 5 segundos
    } else {
      setIsValid(true);
    }
  };

  return (
    <Container>
      <Label htmlFor={listId}>{label}</Label>
      <Input
        type="text"
        list={listId}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        required
        isValid={isValid}
      />
      <DataList id={listId}>
        {options.map((option, index) => (
          <Option key={index} value={option} />
        ))}
      </DataList>
      {showError && <ErrorMessage>Selecione um valor válido.</ErrorMessage>}
    </Container>
  );
};

export default AutoCompleteInput;
