import React from 'react';
import PropTypes from 'prop-types';

import './WorkCTA.scss';

const WorkCTA = ({ heading, buttonLabel, buttonLink }) => {
	return (
		<div className="WorkCTA">
			<h2 className="WorkCTA__heading">{heading}</h2>
			{/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
			<a
				className="WorkCTA__button"
				href={buttonLink}
				target="_blank"
				rel="noopener noreferrer"
				dangerouslySetInnerHTML={{ __html: buttonLabel }}
			/>
		</div>
	);
};

export default WorkCTA;

WorkCTA.defaultProps = {
	heading: 'Interested in working with me?',
	buttonLabel: 'Hire me @ <strong>MEDIA</strong>DUDES',
	buttonLink:
		'https://mediadudes.lol/?utm_source=website&utm_medium=referral&utm_campaign=simon&utm_content=work_cta',
};

WorkCTA.propTypes = {
	heading: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonLink: PropTypes.string,
};
