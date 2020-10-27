export default SyntaxHighlight;
declare class SyntaxHighlight {
    /**
     * Initialise syntax highlighting.
     * @param {(HTMLElement|String)} rootElement - The root element to intialise a message in, or a CSS selector for the root element
     * @param {Object} [options={}] - An options object for configuring the syntax highlighting
     *
     */
    static init(rootEl: any, opts: any): any;
    /**
     * Class constructor.
     * @param {HTMLElement|String} [messageElement] - The message element in the DOM
     * @param {Object} [options={}] - An options object for configuring the message
     * @param {String} options.language - The language to tokenise the code for
     */
    constructor(syntaxEl: any, options?: {
        language: string;
    });
    syntaxElement: any;
    opts: any;
    /**
    * Set language for syntax highlighting
    */
    _setLanguage(): void;
    /**
    * Get language from HTML element
    * @param {HTMLElement} - The element with a language-relevant class name
    * @return {String | Null} - The language name e.g. `js` or null if not defined.
    */
    _getLanguage(element: any): string | null;
    /**
    * Check if language is present for tokenising, add if not load it here (e.g.scss, json);
    */
    _checkLanguage(): void;
    /**
 * Fetch and tokenise every <code> tag's content under the syntaxEl
 */
    _tokeniseCodeBlocks(): void;
    /**
 * Prepares syntax for highlighting based on the language provided in the element classname (class="syntax-html")
 * @param {HTMLElement} - The html element that holds the syntax to highlight
 */
    _tokeniseBlock(element: any): void;
    /**
     * Tokenise string for highlighting
     @returns {HTMLElement} tokenised code in the form of HTML elements
     */
    tokenise(): HTMLElement;
}
