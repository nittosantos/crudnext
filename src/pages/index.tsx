import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { Client } from "../core/Client";

const Home: NextPage = () => {
  const [visible, setVisible] = useState<"Table" | "Form">("Table");
  const [client, setClient] = useState<Client>(Client.void());

  const clients = [
    new Client("Nitto", 34, "1"),
    new Client("Jorge", 21, "2"),
    new Client("Carlos", 32, "3"),
    new Client("Vinicius", 27, "4"),
    new Client("Juliana", 25, "5"),
  ];

  const selectedClient = (client: Client) => {
    setClient(client);
    setVisible("Form");
  };

  const clientExcluded = (client: Client) => {};

  function saveClient(client: Client) {
    setVisible("Table");
  }

  function newClient() {
    setClient(Client.void());
    setVisible("Form");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Layout title="Cadastro Simples">
        {visible === "Table" ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              clientExcluded={clientExcluded}
            />
          </>
        ) : (
          <Form
            client={client}
            canceled={() => setVisible("Table")}
            onChange={saveClient}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
