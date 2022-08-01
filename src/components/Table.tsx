import { Client } from "../core/Client";
import { PencilLine, Trash } from "phosphor-react";

interface TableProps {
  clients: Client[];
  selectedClient?: (client: Client) => void;
  clientExcluded?: (client: Client) => void;
}

export const Table = ({
  clients,
  selectedClient,
  clientExcluded,
}: TableProps) => {
  const hasActions = selectedClient || clientExcluded;
  const renderHeader = () => {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {hasActions && <th className="p-4">Ações</th>}
      </tr>
    );
  };

  const renderData = () => {
    return clients?.map((client, index) => {
      return (
        <tr
          key={client.id}
          className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4 ">{client.id}</td>
          <td className="text-left p-4 ">{client.name}</td>
          <td className="text-left p-4 ">{client.age}</td>
          {hasActions && renderAction(client)}
        </tr>
      );
    });
  };

  const renderAction = (client: Client) => {
    return (
      <td className="flex items-center justify-center">
        {selectedClient && (
          <button
            onClick={() => selectedClient?.(client)}
            className="flex justify-center items-center text-green-600 rounded-full p-2 m-1
            hover:bg-purple-50"
          >
            <PencilLine size={32} />
          </button>
        )}

        {clientExcluded && (
          <button
            onClick={() => clientExcluded?.(client)}
            className="flex justify-center items-center text-red-600 rounded-full p-2 m-1
            hover:bg-purple-50"
          >
            <Trash size={32} />
          </button>
        )}
      </td>
    );
  };

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
};
