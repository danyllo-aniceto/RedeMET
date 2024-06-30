import React, { useState } from "react";
import { BaseLayout } from "../../components/BaseLayout";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import DatePicker from "../../components/DatePicker";
import MultiSelectInput from "../../components/MultiSelectInput";
import CheckboxGroup from "../../components/CheckBox"; // Importando o tipo ICheckboxGroupProps
import {
  AutoCompleteInputContainer,
  Button,
  Form,
  Input,
  InputContainer,
  Label,
  P,
} from "./style";

export function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [limit, setLimit] = useState("");
  const [checkboxOptions, setCheckboxOptions] = useState<string[]>([]);

  // Lista de opções para o autocomplete
  const options = [
    "Brasil",
    "Estados Unidos",
    "Bolívia",
    "Argentina",
    "México",
    "Canadá",
  ];

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Construir o objeto com os valores dos campos do formulário
    const formData = {
      option: inputValue,
      date: selectedDate,
      selectedOptions: selectedOptions,
      limit: limit,
      checkboxOptions: checkboxOptions,
    };

    // Exemplo: enviar formData para o servidor
    console.log("Enviando formulário:", formData);
  };

  return (
    <BaseLayout>
      <Form onSubmit={handleFormSubmit}>
        <AutoCompleteInputContainer>
          <AutoCompleteInput
            label="Localidade(país)"
            listId="list"
            options={options}
            value={inputValue}
            onChange={setInputValue}
          />
          <P>ou</P>
          <AutoCompleteInput
            label="ICAO"
            listId="list"
            options={options}
            value={inputValue}
            onChange={setInputValue}
          />
        </AutoCompleteInputContainer>

        <DatePicker
          label="Data Inicio:"
          value={selectedDate}
          onChange={setSelectedDate}
        />

        <MultiSelectInput
          label="Informações:"
          options={options}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
        />

        <CheckboxGroup
          label="Escolha suas opções:"
          options={options}
          selectedOptions={checkboxOptions}
          onChange={setCheckboxOptions}
        />

        <InputContainer>
          <Label>Limite de Registro</Label>
          <Input
            type="text"
            placeholder="100"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </InputContainer>
        <Button type="submit">Enviar</Button>
      </Form>
    </BaseLayout>
  );
}
