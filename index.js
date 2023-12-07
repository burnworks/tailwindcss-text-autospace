const plugin = require('tailwindcss/plugin');

const textAutospace = plugin(function ({ addUtilities, theme, e }) {
    const defaultValues = {
        'normal': 'normal',
        'none': 'no-autospace',
        'insert': 'insert',
        'replace': 'replace',
        'alpha': 'ideograph-alpha',
        'numeric': 'ideograph-numeric',
        'punctuation': 'punctuation',
        'auto': 'auto',
    };

    const userValues = theme('textAutospace');
    const values = { ...defaultValues, ...userValues };

    const utilities = Object.entries(values).map(([key, value]) => ({
        [`.${e(`autospace-${key}`)}`]: { textAutospace: `${value}` },
    }));

    addUtilities(utilities);
});

module.exports = textAutospace;