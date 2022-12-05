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
    title: 'Gaming',
    Svg: require('@site/static/img/undraw_gaming.svg').default,
    description: (
      <>
        Play multiplayer games with friends no matter where they are. Meshnet works as your virtual encrypted LAN, so location no longer matters. 
      </>
    ),
  },
  {
    title: 'File sharing and remote video access',
    Svg: require('@site/static/img/undraw_video_streaming.svg').default,
    description: (
      <>
        Access files on your home computer while road tripping no matter how far you travel.
      </>
    ),
  },
  {
    title: 'Remote device access',
    Svg: require('@site/static/img/undraw_working_from_anywhere.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </>
    ),
  },
  {
    title: 'Joint projects',
    Svg: require('@site/static/img/undraw_online_collaboration.svg').default,
    description: (
      <>
      Start sharing your development work the easier and safer way. With Meshnet, others will be able to access your local web server securely.
      </>
    ),
  },
  {
    title: 'Traffic routing',
    Svg: require('@site/static/img/windows-private-network-route-traffic.svg').default,
    description: (
      <>
        Meshnet lets you route all your online traffic through another machine. In the same way, other devices can route their traffic through yours.
      </>
    ),
  },
  {
    title: 'Security',
    Svg: require('@site/static/img/undraw_secure_login.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
