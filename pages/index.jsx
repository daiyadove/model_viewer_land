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
    {/* <ModelList /> */}
    <div class="mb-8 ml-8 max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
      <ModelItem
        class="lg:h-auto lg:w-48"
        src='https://firebasestorage.googleapis.com/v0/b/anyr-land.appspot.com/o/eva%2Fout.glb?alt=media&token=1eec0063-b796-48b5-9fcd-a228bd1d26ba'
        iosSrc='https://firebasestorage.googleapis.com/v0/b/anyr-land.appspot.com/o/eva%2Fusdz%2FEva01.usdz?alt=media&token=e8900293-8bb2-4865-969e-5397b26a4fb3'
        alt='Eva 01'
      />
      <div class="border-t border-b border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-1">
          <div class="text-gray-900 font-bold text-xl mb-2">Evangelion</div>
        </div>
        <div class="text-sm">
          <span class="text-gray-900 leading-none">Eva01 by</span>
          <span class="text-gray-600 leading-none ml-2">ruddy illanes</span>
        </div>
      </div>
    </div>
  </Layout>
)

export default Index