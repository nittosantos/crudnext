import type { NextPage } from "next";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { useClients } from "../hooks/useClients";

const Home: NextPage = () => {
  const {
    deleteClient,
    clients,
    client,
    newClient,
    saveClient,
    selectedClient,
    tableVisisble,
    displayTable,
  } = useClients();

  return (
    <div className="flex justify-center items-center h-screen">
      <Layout title="Cadastro Simples">
        {tableVisisble ? (
          <>
            <div className="flex justify-end">
              <Button color="green" className="mb-4" onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              selectedClient={selectedClient}
              deleteClient={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            canceled={displayTable}
            onChange={saveClient}
          />
        )}
      </Layout>
    </div>
  );
};

export default Home;
