import ModelList from '../components/ModelList'
import Layout from '../components/Layout'
import Head from 'next/head';

const Index = () => (
  <Layout>
    <Head>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
    </Head>
    <p>Hello Next.js</p>
    <ModelList />
  </Layout>
)

export default Index