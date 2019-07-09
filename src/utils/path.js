/* eslint-disable import/prefer-default-export */

/**
 * Check if current path is equal to the root path.
 *
 * @param {string} path path of current page.
 */
export const isRootPath = path => {
	const rootPath = `${__PATH_PREFIX__}/`;
	return path === rootPath;
};
