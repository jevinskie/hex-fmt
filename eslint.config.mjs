import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import stylisticTs from '@stylistic/eslint-plugin';

export default [{
    files: ["src/**/*.ts"],
    ignores: ["out/**/*", "dist/**/*"],
}, {
    plugins: {
        "@typescript-eslint": typescriptEslint,
        '@stylistic/ts': stylisticTs,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 6,
        sourceType: "module",
    },

    rules: {
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "import",
            format: ["camelCase", "PascalCase"],
        }],

        "@stylistic/ts/semi": "warn",
        curly: "warn",
        eqeqeq: "warn",
        "no-throw-literal": "warn",
        semi: "warn",
    },
}];