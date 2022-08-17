import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { CollectionClient } from "../backend/db/CollectionClient";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { Client } from "../core/Client";
import { ClientRepo } from "../core/ClientRepo";

const Home: NextPage = () => {
  const repo: ClientRepo = new CollectionClient();
  const [visible, setVisible] = useState<"Table" | "Form">("Table");
  const [clients, setClients] = useState<Client[]>([]);
  const [client, setClient] = useState<Client>(Client.void());

  useEffect(getAll, []);

  function getAll() {
    repo.findAll().then((clients) => {
      setClients(clients);
      setVisible("Table");
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    setVisible("Form");
  }

  async function clientExcluded(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
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
