import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Layout title="Cadastro Simples">
        <span>Conteudo</span>
      </Layout>
    </div>
  );
};

export default Home;
