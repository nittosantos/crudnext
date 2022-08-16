import { Client } from "./Client";

export interface ClientRepo {
  save(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  findAll(): Promise<Client[]>;
}  