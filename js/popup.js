chrome.tabs.query({ active: true, currentWindow: true }, init);

function init(tabs) {
	var currentTab = tabs[0];
	var currentSwitchBtn;

	// Get constants from background script
	chrome.runtime.sendMessage({ action: "getConstants" }, function (response) {
		var BADGE = response.BADGE;
		var LANGUAGES = response.LANGUAGES;

		// Get the current badge text
		chrome.action.getBadgeText({ tabId: currentTab.id }, function (badgeText) {
			function setSwitchBtn(badgeTextParam) {
				currentSwitchBtn =
					badgeTextParam !== BADGE.OFF.TEXT ? BADGE.OFF : BADGE.ON;
				var otherStatusEl = document.getElementById("otherStatus");
				otherStatusEl.innerHTML = currentSwitchBtn.TEXT;
				otherStatusEl.style.backgroundColor = currentSwitchBtn.COLOR;
			}

			setSwitchBtn(badgeText);

			document.getElementById("switch").addEventListener("click", function (e) {
				chrome.runtime.sendMessage(
					{ action: "toggle", tab: currentTab },
					function (response) {
						dd(response.badge.TEXT);
						setSwitchBtn(response.badge.TEXT);
						window.close();
					},
				);
			});

			var langList = document.getElementById("langList");

			var i = 0;
			for (; i < LANGUAGES.length; i++) {
				var li = document.createElement("li");
				li.appendChild(document.createTextNode(LANGUAGES[i].label));
				(function (index) {
					li.addEventListener("click", function (e) {
						switchLangTo(LANGUAGES[index]);
					});
				})(i);
				langList.appendChild(li);
			}

			function switchLangTo(lang) {
				chrome.runtime.sendMessage(
					{ action: "switchLangTo", lang: lang, tab: currentTab },
					function () {
						window.close();
					},
				);
			}
		});
	});
}

function dd(variable) {
	document.getElementById("dd").innerHTML = JSON.stringify(variable, null, 2);
}
