import React from 'react';

import styles from './styles.module.scss';

const Login: React.FC = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.curtain}></div>
      <div className={styles.content}></div>
    </div>
  );
};

export default Login;
