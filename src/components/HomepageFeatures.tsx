import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Javascript Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Javascript-shield.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/js/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'C Sharp Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/c-sharp/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'NestJS Interviews',
    image: 'https://docs.nestjs.com/assets/logo-small.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/nodejs/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'CSS Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/CSS-interview-questions-answers">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Algorithms Tutorials',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/AllAlgorithmsLogo.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/tutorials/algorithms/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Data Structure Tutorials',
    image: 'https://www.inventicons.com/uploads/iconset/1626/wm/512/data-structure-10.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/tutorials/data-structures/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <div>{description}</div>
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
