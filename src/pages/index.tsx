import type { NextPage } from 'next';
import { Header, Layout } from 'src/components/layout';

const Home: NextPage = () => {
  return <Layout pageTitle="top" title="Product Add" subTitle="Create new product"></Layout>;
};

export default Home;
