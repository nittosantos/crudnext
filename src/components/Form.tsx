import { useState } from "react";
import { Client } from "../core/Client";
import { Button } from "./Button";
import { Input } from "./Input";

interface FormProps {
  client: Client;
}

export const Form = ({ client }: FormProps) => {
  const id = client?.id;
  const [name, setName] = useState(client?.name ?? "");
  const [age, setAge] = useState(client?.age ?? 0);
  return (
    <div>
      {id && <Input text="Código" value={id} readOnly className="mb-4" />}
      <Input text="Nome" value={name} onChange={setName} className="mb-4" />
      <Input text="Idade" type="number" value={age} onChange={setAge} />
      <div className="mt-5 flex justify-end">
        <Button className="mr-2" color="blue">
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button>Cancelar</Button>
      </div>
    </div>
  );
};
