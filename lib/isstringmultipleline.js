/*==================
[NodeJS] Advanced Determine - Is String Multiple Line
	Language:
		NodeJS/10.13.0
==================*/
const isString = require("./isstring.js");
/**
 * @function isStringMultipleLine
 * @alias isStringML
 * @alias isStringMultiLine
 * @alias isStrML
 * @description Determine item is type of multiple line string or not.
 * @param {*} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
function isStringMultipleLine(item) {
	if (isString(item) !== true) {
		return false;
	};
	return (item.search(/[\n\r]/gu) !== -1);
};
module.exports = isStringMultipleLine;