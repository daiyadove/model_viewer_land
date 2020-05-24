import Link from 'next/link';
import Header from '../components/Header'
const Index = () => (
  <div>
    <Header />
    <p>Hello Model Viewer Land</p>
    <Link href="/archive">
      <a>archive Page</a>
    </Link>  
  </div>
);

export default Index;
