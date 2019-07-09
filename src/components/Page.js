import React from 'react';

const Page = ({ children }) => {
	return (
		<div className="main-container">
			<div className="main-grid">
				<main className="main-content">{children}</main>
			</div>
		</div>
	);
};

export default Page;
