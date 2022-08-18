import { useEffect, useState } from "react";
import { CollectionClient } from "../backend/db/CollectionClient";
import { Client } from "../core/Client";
import { ClientRepo } from "../core/ClientRepo";
import { useTableOrForm } from "./useTableOrForm";

export function useClients() {
  const repo: ClientRepo = new CollectionClient();
  const [clients, setClients] = useState<Client[]>([]);
  const [client, setClient] = useState<Client>(Client.void());

  const { displayForm, displayTable, formVisible, tableVisisble } =
    useTableOrForm();

  useEffect(getAll, []);

  function getAll() {
    repo.findAll().then((clients) => {
      setClients(clients);
      displayTable();
    });
  }

  function selectedClient(client: Client) {
    setClient(client);
    displayForm();
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setClient(Client.void());
    displayForm();
  }

  return {
    saveClient,
    newClient,
    deleteClient,
    selectedClient,
    getAll,
    clients,
    client,
    tableVisisble,
    displayTable,
  };
}
