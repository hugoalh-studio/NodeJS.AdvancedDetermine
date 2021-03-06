/*==================
Advanced Determine - Is Boolean
	Language:
		NodeJS/14.15.0
==================*/
const checkOption = require("./internal/checkoption.js");
/**
 * @function isBoolean
 * @description Determine item is type of boolean or not.
 * @param {*} item Item that need to determine.
 * @param {object} [option={}] Option.
 * @param {boolean} [option.allowStringify=false] Allow stringify type.
 * @returns {boolean} Determine result.
 */
function isBoolean(item, option = {}) {
	checkOption(option);
	let runtime = {
		allowStringify: false
	};
	if (typeof option.allowStringify !== "undefined") {
		if (typeof option.allowStringify !== "boolean") {
			throw new TypeError(`Argument "option.allowStringify" must be type of boolean! (Advanced Determine - Is Boolean)`);
		};
		runtime.allowStringify = option.allowStringify;
	};
	if (typeof item === "boolean") {
		return true;
	};
	if (runtime.allowStringify === true) {
		if (
			item === "true" ||
			item === "false"
		) {
			return true;
		};
	};
	return false;
};
module.exports = isBoolean;
