module.exports = {
<<<<<<< HEAD
    printWidth: 80, //Specify the length of line that the printer will wrap on.
    tabWidth: 4, //Specify the number of spaces per indentation-level.
    /* Print semicolons at the ends of statements. 
        Default=> true - Add a semicolon at the end of every statement.
        false - Only add semicolons at the beginning of lines that may introduce ASI failures.*/
    semi: false,
    Quotes: false, //Use single quotes instead of double quotes.
    /*Print trailing commas wherever possible.
      "none" - No trailing commas.
      "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.) 
      "all" - Trailing commas wherever possible (function arguments). This requires node 8 or a transform.*/
    trailingComma: 'all',
    /*Print spaces between brackets.
        Valid options: true - Example: { foo: bar }. false - Example: {foo: bar}.
        */
    bracketSpacing: true,

    singleQuote: true, // Replace double quotes with single quote
    arrowParens: 'always', //Example: `(x) => x`
    useTabs: false, //Indent lines with tabs instead of spaces
}
=======
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
};
>>>>>>> 92778b8153f10deb9e6bcfaa77df550bf8f97e5f
