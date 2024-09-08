"use client"
// src/components/button/Button.js
import React from 'react';
import { datadogLogs } from '@datadog/browser-logs'
import styles from './button.module.css'; // Import CSS module

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
