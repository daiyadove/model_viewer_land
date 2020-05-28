import ModelList from '../components/ModelList'
import Layout from '../components/layout'
import Head from 'next/head'
import ModelItem from '../components/ModelItem'

const Index = () => (
  <Layout>
    <Head>
      <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
    </Head>
    <p>Hello Next.js</p>
    <div class="container mx-auto mb-8 max-w-sm w-full lg:max-w-1/2 shadow-lg">
      <ModelList />
    </div>
  </Layout>
)

export default Index