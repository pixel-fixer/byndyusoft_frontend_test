class Markdown{
    
    constructor() {
        this.rules = [
            {regex: /(#+)(.*)/g, replacement: header},                                         // headers
            {regex: /!\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<img src=\'$2\' alt=\'$1\'>'}, // image
            {regex: /\[([^\[]+)\]\(([^\)]+)\)/g, replacement: '<a href=\'$2\'>$1</a>'},        // hyperlink
            {regex: /(\*\*|__)(.*?)\1/g, replacement: '<b>$2</b>'},                            // bold
            {regex: /\:\"(.*?)\"\:/g, replacement: '<q>$1</q>'},                               // quote
            {regex: /`(.*?)`/g, replacement: '<code>$1</code>'},                               // inline code
            {regex: /\n\*(.*)/g, replacement: ulList},                                         // ul lists
            {regex: /\n[0-9]+\.(.*)/g, replacement: olList},                                   // ol lists
            {regex: /<\/ul>\s?<ul>/g, replacement: ''},                                        
            {regex: /<\/ol>\s?<ol>/g, replacement: ''},      
            {regex: /\n-{5,}/g, replacement: '\n<hr />'},                                      // horizontal rule
            {regex: /\n([^\n]+)\n/g, replacement: para},                                       // add paragraphs
        ]
     
        function para(text, line) {
            const trimmed = line.trim();
            if (/^<\/?(ul|ol|li|h|p|bl)/i.test(trimmed)) {
                return `\n${line}\n`;
            }
            return `\n<p>${trimmed}</p>\n`;
        }

        function ulList(text, item) {
            return `\n<ul>\n\t<li>${item.trim()}</li>\n</ul>`;
        }

        function olList(text, item) {
            return `\n<ol>\n\t<li>${item.trim()}</li>\n</ol>`;
        }

        function header(text, chars, content) {
            const level = chars.length;
            return `<h${level}>${content.trim()}</h${level}>`;
        }
    }

    /**
     * @param {string} text
     */
    parse(text = '') {
        text = `\n${text}\n`;
        for(let rule of this.rules){
            text = text.replace(rule.regex, rule.replacement)
        }
        return text.trim()
    }
}

export { Markdown } 