import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './footerBar.module.scss';

const FooterBar = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.footerText}>Heather Finnegan</p>
      <a 
        href='https://github.com/H-Fin'
        rel='noopener noreferrer'
        target='_blank'
        className={styles.icon}
      >
        <FaGithub />
      </a>
      <a 
        href='https://www.linkedin.com/in/heatherfinnegan/'
        rel='noopener noreferrer'
        target='_blank'
        className={styles.icon}
      >
        <FaLinkedin />
      </a>
    </div>
  );
}

export default FooterBar;