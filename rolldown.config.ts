import type { RolldownOptions } from "rolldown";
export default {
    input: { main: "src/client_script.ts" },
    output: {
        file: "package/client_script.js",
    },
} satisfies RolldownOptions;
