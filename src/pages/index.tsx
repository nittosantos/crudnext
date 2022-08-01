import type { NextPage } from "next";
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

  return (
    <div className="flex justify-center items-center h-screen">
      <Layout title="Cadastro Simples">
        <Table
          clients={clients}
          selectedClient={selectedClient}
          clientExcluded={clientExcluded}
        />
      </Layout>
    </div>
  );
};

export default Home;
