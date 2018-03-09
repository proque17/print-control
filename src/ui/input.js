// @flow
"use strict";

const random = require("../utils/random");

/**
 * A Input element.
 *
 * @param {string} label Input label.
 * @param {string} type Input type.
 * @example
 * var ll = new LatLon(42.10376, 1.84584);
 */
class Input {
	label: string;
	type: InputType;
	attributes: ?Object;

	constructor(label: string, type: InputType, options: ?Object) {
		this.label = label;
		this.type = type;
		this.setAttributes(options);
	}

	/**
	 * Set the latitude
	 *
	 * @param {number} lat
	 * @returns {LatLon} `this`
	 */
	setAttributes(options: ?Object) {
		this.attributes = Object.assign({}, options);
		if (!this.attributes.id) {
			this.attributes.id = random.createId();
		}
		return this;
	}

	/**
	 * Create HTML string
	 *
	 * @returns {string} `html`
	 */
	render() {
		const attStr = Object.keys(this.attributes).map((key) => {
			return `${key}="${this.attributes[key]}"`;
		}).join(" ");

		return `<div class="form-group"><label for="${this.attributes.id}">${this.label}</label><input type="${this.type}" class="form-control" ${attStr}></div>`;
	}
}

module.exports = Input;
