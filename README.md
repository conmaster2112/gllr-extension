# Gemini Location Leak Removal - Extension

A very simple (but sufficiently optimized) extension that hides your location on the navigation bar at the bottom of the screen

What permissions does this extension require?

- "JS Injection" runs a very simple script that hooks into those crazy frameworks (React, Angular, or whatever else they use) and hides location-related elements.

Does the script read your personal data?

- No way, who do you think you are? Do you really think I’m interested in your data? Do you really think that?
- (No, I'm really not interested, and neither is the script.)

# How to use?
Download the `gllr-extension.crx` from [Releases](https://github.com/conmaster2112/gllr-extension/releases/) and drag and drop it into the extensions settings in your Chromium browser, or you can simply run the source code and install it as a developer version using the "unpacked" method.

### Compiling and build
- `pnpm install`
- `pnpm rolldown -c`

### Why this project has oxlint and oxfmt?
Idk, it's just my default template for TypeScript (let's unify the toolchain you know :])
