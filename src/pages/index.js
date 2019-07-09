import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/Bio';
import SEO from '../components/SEO';

const index = ({ data }) => {
	const posts = data.allMarkdownRemark.edges;

	return (
		<React.Fragment>
			<SEO title="All posts" />
			<Bio />
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
				return (
					<div key={node.fields.slug}>
						<h3>
							<Link to={node.fields.slug}>{title}</Link>
						</h3>
						<small>{node.frontmatter.date}</small>
						<p
							dangerouslySetInnerHTML={{
								__html: node.frontmatter.description || node.excerpt,
							}}
						/>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default index;

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`;
