import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { Client } from "../core/Client";

const Home: NextPage = () => {
  const clients = [
    new Client("Nitto", 34, "1"),
    new Client("Jorge", 21, "2"),
    new Client("Carlos", 32, "3"),
    new Client("Vinicius", 27, "4"),
    new Client("Juliana", 25, "5"),
  ];

  const selectedClient = (client: Client) => {};

  const clientExcluded = (client: Client) => {};

  function saveClient(client: Client) {
    console.log(client);
  }

  const [visible, setVisible] = useState<"Table" | "Form">("Table");

  return (
    <div className="flex justify-center items-center h-screen">
      <Layout title="Cadastro Simples">
        {visible === "Table" ? (
          <>
            <div className="flex justify-end">
              <Button
                color="green"
                className="mb-4"
                onClick={() => setVisible("Form")}
              >
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
            client={clients[0]}
            canceled={() => setVisible("Table")}
            onChange={saveClient}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
