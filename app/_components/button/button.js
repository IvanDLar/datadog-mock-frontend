"use client"
// src/components/button/Button.js
import React from 'react';
import { datadogLogs } from '@datadog/browser-logs'
import styles from './button.module.css'; // Import CSS module

// datadogLogs.init({
//     clientToken: 'pubd3e606df4d6cfb6d6425ad6fbec92083',
//     site: 'datadoghq.com',
//     forwardErrorsToLogs: true,
//     sessionSampleRate: 100,
//     silentMultipleInit: true
// });

export default function Button({ label, className = '', ...props }) {
  const logOnButtonClick = () => {
    datadogLogs.logger.info('Button clicked', { name: 'buttonName', id: 123 })
    }
  return (
    <button className={`${styles.simpleButton} ${className}`} {...props} onClick={logOnButtonClick}>
      {label}
    </button>
  );
};
