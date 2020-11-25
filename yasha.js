/*
 * Background script. Current webpage is openned prepending SCIHUB_URL.
 * Requires "activeTag" permision to access the URL of the current tab.
*/

const SCIHUB_URL = "https://sci-hub.do"

/*
 * If the Browser API is not defined, alias the Chrome API to the Browser API.
 * This should make the extension compatible with Chromium-based browsers.
*/
if (typeof browser === "undefined") {
	browser = chrome;
}

/*
 * Log error message if an asynchronous operation fails.
 */
function onError(error) {
	console.log(`Error: ${error}`);
}

/*
 * Open new tab with SCIHUB_URL when the toolbar icon is clicked.
 *
 * Opening the article in the same tab could be achieved using:
 * > browser.tabs.update(tab.id, {"url": NEW_URL})
 */
browser.browserAction.onClicked.addListener((tab) => {
	browser.tabs.create({
		"url": SCIHUB_URL + "/" + tab.url,
	}).catch(onError);
});
