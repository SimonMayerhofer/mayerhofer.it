import React from 'react';
import PropTypes from 'prop-types';
import SEO from './SEO';

const Page = ({ children, title, description, lang, meta }) => {
	return (
		<React.Fragment>
			<SEO title={title} description={description} lang={lang} meta={meta} />

			<div className="main-container">
				<div className="main-grid">
					<main className="main-content">{children}</main>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Page;

Page.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

Page.propTypes = {
	children: PropTypes.element.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
};
