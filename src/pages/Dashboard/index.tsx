import React, { useState } from "react";
import { BaseLayout } from "../../components/BaseLayout";
import AutoCompleteInput from "../../components/AutoCompleteInput";
import DatePicker from "../../components/DatePicker";
import MultiSelectInput from "../../components/MultiSelectInput";
import CheckboxGroup from "../../components/CheckBox";
import Modal from "../../components/Modal";
import {
  AutoCompleteInputContainer,
  Button,
  Form,
  Input,
  InputContainer,
  Label,
  P,
  Table,
  TableRow,
  TableCell,
} from "./style";

export function Dashboard() {
  const [countryValue, setCountryValue] = useState("");
  const [icaoValue, setIcaoValue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [limit, setLimit] = useState("");
  const [checkboxOptions, setCheckboxOptions] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [
    "Brasil",
    "Estados Unidos",
    "Bolívia",
    "Argentina",
    "México",
    "Canadá",
  ];

  const icao = ["SBGR", "KLAX", "EGLL", "YSSY", "LFPG", "OMDB"];

  const condicao = [
    "METAR - Meteorologia em tempo presente",
    "TAF - Previsão de Terminal Aérea",
  ];

  const informacao = ["Código", "Latitude", "Longitude", "Nome", "Cidade"];

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const combinedOptions = [...selectedOptions, ...checkboxOptions];

  return (
    <BaseLayout>
      <Form onSubmit={handleFormSubmit}>
        <AutoCompleteInputContainer>
          <AutoCompleteInput
            label="Localidade(país)"
            listId="country-list"
            options={options}
            value={countryValue}
            onChange={setCountryValue}
          />
          <P>ou</P>
          <AutoCompleteInput
            label="ICAO"
            listId="icao-list"
            options={icao}
            value={icaoValue}
            onChange={setIcaoValue}
          />
        </AutoCompleteInputContainer>

        <DatePicker
          label="Data Inicio:"
          value={selectedDate}
          onChange={setSelectedDate}
        />

        <MultiSelectInput
          label="Informações:"
          options={informacao}
          selectedOptions={selectedOptions}
          onChange={setSelectedOptions}
        />

        <CheckboxGroup
          label="Condições Metereológicas:"
          options={condicao}
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
        <Button type="submit" disabled={!countryValue && !icaoValue}>
          Enviar
        </Button>
      </Form>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Table>
          <thead>
            <TableRow>
              {combinedOptions.map((option) => (
                <TableCell key={option}>{option}</TableCell>
              ))}
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              {combinedOptions.map((option) => (
                <TableCell key={option}>Sample Data</TableCell>
              ))}
            </TableRow>
          </tbody>
        </Table>
      </Modal>
    </BaseLayout>
  );
}
