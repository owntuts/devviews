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
    title: 'Design System',
    image: 'https://images.ctfassets.net/7jw9uvgmirvi/3lVaxIcw1W8GiOhuNMCmJh/716d60166db1590ef27dc8918918b5b2/Group_102.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/system-design/design-system">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'MongoDB',
    image: 'https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/mongodb/mongodb-zero-to-hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'PostgresQL',
    image: 'https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/postgresql/postgresql-from-zero-to-hero">
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
    title: 'Java Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/182px-Java_programming_language_logo.svg.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/java/java-zero-to-hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'React Native Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/react-native/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'PHP Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/php/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Kotlin Interviews',
    image: 'https://kotlinlang.org/docs/images/kotlin-logo.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/kotlin/intro">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Apollo GraphQL Interviews',
    image: `https://seeklogo.com/images/A/apollo-graphql-logo-8DC5FB19DB-seeklogo.com.png`,
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/apollographql/apollojs-client-zero-hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'HELM GraphQL Interviews',
    image: 'https://helm.sh/img/helm.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/helm/helm-from-zero-to-hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Terraform Interviews',
    image: 'https://www.vectorlogo.zone/logos/terraformio/terraformio-ar21.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/terraform/hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Kafka Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Apache_kafka_wordtype.svg/180px-Apache_kafka_wordtype.svg.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/kafka/kafka-from-zero-to-hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Docker Interviews',
    image: 'https://www.docker.com/wp-content/uploads/2022/03/horizontal-logo-monochromatic-white.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/docker/docker-from-zero-hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Kubernetes Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Kubernetes_logo.svg/1200px-Kubernetes_logo.svg.png',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/kubernetes/kubernetes-from-zero-to-hero">
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
    title: 'Socket.IO Interviews',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/900px-Socket-io.svg.png?20200308235956',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/socketio/socketio-zero-to-hero">
          Let's start ⏱️
        </Link>
      </div>
    ),
  },
  {
    title: 'Django Interviews',
    image: 'https://static.djangoproject.com/img/logos/django-logo-positive.svg',
    description: (
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--sm"
          to="/interviews/django/intro">
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
