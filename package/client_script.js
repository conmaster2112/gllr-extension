//#region src/client_script.ts
const style = document.createElement("style");
style.textContent = `
    location-footer {
        display: none !important;
    }
`;
document.head.appendChild(style);
const originalCreateElement = document.createElement;
document.createElement = function(tagName, options) {
	const element = originalCreateElement.call(this, tagName, options);
	if (tagName.toLowerCase().match(/location/)) {
		element.style.display = "none";
		console.info("GLLR: PATCHED - LL Hidden");
	}
	return element;
};
//#endregion
