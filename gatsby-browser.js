/* eslint-disable import/prefer-default-export */
import React from 'react';

import 'what-input';
import './src/styles/main.scss';

import Layout from './src/components/Layout';

// custom typefaces
import 'typeface-nunito';
import 'typeface-roboto';

/*
 * Wrap Layout component around page elements,
 * so we can have CSS transitions in the header when changing pages
 * and don't need to manually include it in every page.
 * @see https://www.gatsbyjs.org/docs/browser-apis/#wrapPageElement
 */
// eslint-disable-next-line react/prop-types
export const wrapPageElement = ({ element, props }) => {
	// props provide same data to Layout as Page element will get
	// including location, data, etc - no need to pass it
	return <Layout {...props}>{element}</Layout>;
};
