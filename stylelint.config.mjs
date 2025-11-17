/** @type {import('stylelint').Config} */
const config = {
    extends: ['stylelint-config-standard'],
    rules: {
        "at-rule-no-deprecated": [
            true,
            {
                ignoreAtRules: ["apply"],
            },
        ],
    },
};

export default config;