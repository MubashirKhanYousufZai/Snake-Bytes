import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Text + Button */}
          <div className={styles.textContent}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">
              {siteConfig.tagline}
            </p>
            <Link
              className="button button--secondary button--lg"
              to="/python-basics/intro"
            >
              🚀 Start Reading
            </Link>
          </div>

          {/* Hero Image */}
          <div className={styles.heroImage}>
            <img
              src="/img/hero.png" // place your image in static/img/
              alt="Python, FastAPI & Streamlit"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="A practical crash course covering Python, FastAPI, Streamlit, and full-stack integration."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
