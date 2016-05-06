/**
 * SyntaxHighlighter MIPS Assembly partial brush
 *
 * Is is missing substantial parts for list of functions etc.
 * It was made just to cover the need of 3 code examples.
 *
 * @version
 * 1.0.00 (April 09 2015)
 *
 * @author
 * Patrick Kusebauch
 */
;
(function () {
    // CommonJS
    typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

    function Brush() {
        var funcs = 'add addi addiu and bne bnez beq j jal jr la lb li lui lw lwc1 mfhi ' +
            'move mul.s mulu or ori seq sll slt srl sub subi sw swc1 syscall xor';

        this.regexList = [
            {regex: SyntaxHighlighter.regexLib.singleLinePerlComments, css: 'comments'},	// one line comments
            {regex: SyntaxHighlighter.regexLib.doubleQuotedString, css: 'string'},			// double quoted strings
            {regex: /^[\w \t]*(?=:)/gm, css: 'constants'},                                  // constants
            {regex: /\b0[xX][0-9a-fA-F]+\b/gm, css: 'numbers'},                             // hexadecimal number
            {regex: /\b-?\d[.]?\d*\b/gm, css: 'numbers'},                                   // decimal numbers
            {regex: /\$\w+/g, css: 'variable'},			                                    // variables
            {regex: /\.[a-zA-Z]+/g, css: 'keyword'},			                            // variables
            {regex: new RegExp(this.getKeywords(funcs), 'gmi'), css: 'functions'}			// common functions
        ];

        this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
    }

    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['asm'];

    SyntaxHighlighter.brushes.Asm = Brush;

    // CommonJS
    typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();