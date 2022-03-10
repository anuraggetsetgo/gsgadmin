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
// Validate Search Term
function validateText(text) {
	if (!testGeneralTextRegex(text)) {
		return false;
	} else if (testHTMLRegex(text)) {
		return false;
	} else {
		return true;
	}
}
// Function to Validate the String
function validateJSONString(str) {
	try {
		JSON.parse(str);
	} catch (e) {
		return false;
	}
	return true;
}

// Exporting Functions
export { testGeneralTextRegex, testHTMLRegex, validateText, validateJSONString };
