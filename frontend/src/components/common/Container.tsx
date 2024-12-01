import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
  //ReactNode is a type that includes everything that can be rendered
  // in a React component: strings, numbers, JSX elements, arrays, fragments, etc
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
