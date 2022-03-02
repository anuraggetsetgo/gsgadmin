// Utility Functions
import Config from './config';

const generalTextRegex = Config.generalTextRegex;
const htmlRegex = Config.htmlRegex;

// Testing any text for general text regex
function testGeneralTextRegex(text) {
	return generalTextRegex.test(text);
}
// Testing any text for HTML regex
function testHTMLRegex(text) {
	return htmlRegex.test(text);
}

// Exporting Functions
export { testGeneralTextRegex, testHTMLRegex };
