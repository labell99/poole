import React from 'react';
import Layout from "./src/components/Layout";
require("prismjs/themes/prism-tomorrow.css")
require('./src/styles/global.css')

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export { wrapPageElement };

export { default as wrapRootElement } from './src/state/ReduxWrapper';

