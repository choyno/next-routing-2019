import Link from 'next/link';
import App, { Container } from 'next/app';

const Index = (props) => (

  <div>
    <li><Link href="/blog/slug-name"  as="blog/slug-name"><a>LATEST BLOG LIST</a></Link></li>
    <h1>HOME PAGE </h1>
  </div>
);

Index.getInitialProps = async () => {
  return {};
};

export default Index;


