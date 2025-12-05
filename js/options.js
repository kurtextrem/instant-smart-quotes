// Get languages from background script
chrome.runtime.sendMessage({ action: "getConstants" }, function (response) {
	const LANGUAGES = response.LANGUAGES;
	const select = document.getElementById("defaultLanguage");

	// Populate language dropdown
	LANGUAGES.forEach(function (lang) {
		const option = document.createElement("option");
		option.value = lang.code;
		option.textContent = lang.label;
		select.appendChild(option);
	});

	// Load saved default language
	chrome.storage.sync.get(
		["defaultLanguage", "enableContextMenu"],
		function (data) {
			if (data.defaultLanguage) {
				select.value = data.defaultLanguage;
			}

			// Load context menu preference (default is enabled)
			const contextMenuCheckbox = document.getElementById("enableContextMenu");
			contextMenuCheckbox.checked = data.enableContextMenu !== false;
		},
	);
});

// Save button handler
document.getElementById("save").addEventListener("click", function () {
	const select = document.getElementById("defaultLanguage");
	const defaultLanguage = select.value;
	const enableContextMenu =
		document.getElementById("enableContextMenu").checked;

	chrome.storage.sync.set(
		{
			defaultLanguage: defaultLanguage,
			enableContextMenu: enableContextMenu,
		},
		function () {
			// Show success message
			const status = document.getElementById("saveStatus");
			status.textContent = "Options saved successfully!";
			status.className = "save-status success";
			status.style.display = "block";

			// Hide message after 3 seconds
			setTimeout(function () {
				status.style.display = "none";
			}, 3000);

			// Notify background script to update settings
			chrome.runtime.sendMessage({
				action: "updateDefaultLanguage",
				language: defaultLanguage,
			});

			chrome.runtime.sendMessage({
				action: "updateContextMenu",
				enabled: enableContextMenu,
			});
		},
	);
});
