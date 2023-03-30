import Head from 'next/head';
import Link from 'next/link';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <Link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      <main className="mx-5 my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development,coding,programming',
  description: 'The best info and news in development',
};
