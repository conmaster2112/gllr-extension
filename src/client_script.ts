const style = document.createElement("style");
style.textContent = `
    location-footer {
        display: none !important;
    }
`;
document.head.appendChild(style);

// MORE GENERAL HOOK, even if its ugly it work the best for dynamic applications like Gemini, (fck heavy frameworks, nowdays DOM is empty for this kind of application at load time)
const originalCreateElement = document.createElement;
document.createElement = function (tagName: string, options: any) {
    const element = originalCreateElement.call(this, tagName, options);

    if (tagName.toLowerCase().match(/location/)) {
        // We used to remove the element, but looks like gemini check this element and trigger recreation,
        // Why does Gemini leaks in the first place tho?

        element.style.display = "none";
        console.info("GLLR: PATCHED - LL Hidden");
    }

    return element;
};
