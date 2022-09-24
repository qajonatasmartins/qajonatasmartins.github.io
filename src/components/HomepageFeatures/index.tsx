import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Dicas e ferramentas',
    Svg: require('@site/static/img/tools-svgrepo-com.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Tutoriais e novidades da área de qualidade',
    Svg: require('@site/static/img/new-svgrepo-com.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Programação, testes e muito mais',
    Svg: require('@site/static/img/pc2.svg').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
