"use client"

import Home from "../(routes)/home/home";
import Button from "../_components/button/button";
import Navbar from "../_components/navbar/navbar";
import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '05897335-4bb4-4cb5-b803-4bec8e1f14f9',
    clientToken: 'pub8630987452cba887520da1dd5004d66f',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'datadoghq.com',
    service: 'my-react-testing-page',
    env: 'staging-1',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

datadogLogs.init({
  clientToken: 'pubd3e606df4d6cfb6d6425ad6fbec92083',
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
  silentMultipleInit: true
});



export default function Main() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Button label="Another cool button"/>
    </>
  );
}
