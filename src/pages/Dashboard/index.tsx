import React, { useState } from "react";
import { BaseLayout } from "../../components/BaseLayout";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import DatePicker from "../../components/DatePicker";
import MultiSelectInput from "../../components/MultiSelectInput";
import CheckboxGroup from "../../components/CheckBox"; // Importando o tipo ICheckboxGroupProps
import { Button, Input, InputContainer, Label } from "./style";

export function Dashboard() {
  const [inputValue, setInputValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [limit, setLimit] = useState("");
  const [checkboxOptions, setCheckboxOptions] = useState<string[]>([]);

  // Lista de opções para o autocomplete
  const options = ["Maçã", "Banana", "Abacaxi", "Pera", "Uva", "Melancia"];

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
      <form onSubmit={handleFormSubmit}>
        <div>
          <AutoCompleteInput
            label="Escolha uma fruta:"
            listId="fruits-list"
            options={options}
            value={inputValue}
            onChange={setInputValue}
          />
          <p>Valor selecionado: {inputValue}</p>
        </div>
        <div>
          <DatePicker
            label="Selecione uma data:"
            value={selectedDate}
            onChange={setSelectedDate}
          />
          <p>Data selecionada: {selectedDate}</p>
        </div>
        <div>
          <MultiSelectInput
            label="Escolha frutas:"
            options={options}
            selectedOptions={selectedOptions}
            onChange={setSelectedOptions}
          />
          <p>Frutas selecionadas: {selectedOptions.join(", ")}</p>
        </div>
        <div>
          <CheckboxGroup
            label="Escolha suas opções:"
            options={options}
            selectedOptions={checkboxOptions}
            onChange={setCheckboxOptions}
          />
        </div>
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
      </form>
    </BaseLayout>
  );
}
