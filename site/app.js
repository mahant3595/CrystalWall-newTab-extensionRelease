/* Install helper for the Crystal Wall landing page.
 * Each browser card opens one dialog with that browser's own settings address
 * and steps; the copy button hands over the address exactly as the browser
 * spells it, because a mistyped chrome:// URL is a dead end. */
(function () {
  const BROWSERS = {
    chrome: {
      name: "Chrome",
      address: "chrome://extensions",
      note: "Chrome 137 and later will not install an extension from the command line, so these clicks are the install.",
      steps: [
        ["Download the build", "Press the download button below to get the folder as a .zip, then unzip it somewhere permanent."],
        ["Turn on Developer mode", "Open the extensions page and switch on Developer mode in the top-right corner."],
        ["Load it unpacked", "Click Load unpacked and pick the unzipped folder — the one that contains manifest.json."],
        ["Open a new tab", "Crystal Wall replaces the new-tab page straight away."]
      ]
    },
    edge: {
      name: "Edge",
      address: "edge://extensions",
      note: "Edge is Chromium underneath, so it loads the same folder Chrome does. Allow extensions from other stores if Edge asks.",
      steps: [
        ["Download the build", "Get the .zip below and unzip it somewhere you will keep it."],
        ["Turn on Developer mode", "Open edge://extensions and switch on Developer mode in the left sidebar."],
        ["Load it unpacked", "Click Load unpacked and choose the folder that contains manifest.json."],
        ["Open a new tab", "The dashboard is there, with Edge's own new tab replaced."]
      ]
    },
    brave: {
      name: "Brave",
      address: "brave://extensions",
      note: "Brave keeps the Chrome extension engine, so the same unpacked folder works unchanged.",
      steps: [
        ["Download the build", "Grab the .zip and unzip it somewhere permanent."],
        ["Turn on Developer mode", "Open brave://extensions and enable Developer mode, top-right."],
        ["Load it unpacked", "Choose Load unpacked, then the folder holding manifest.json."],
        ["Open a new tab", "Crystal Wall shows up as your new tab."]
      ]
    },
    opera: {
      name: "Opera",
      address: "opera://extensions",
      note: "Opera calls the same page Extensions; Developer mode sits at the top of it.",
      steps: [
        ["Download the build", "Get the .zip and unzip it."],
        ["Turn on Developer mode", "Open opera://extensions and switch Developer mode on."],
        ["Load it unpacked", "Click Load unpacked and select the folder with manifest.json inside."],
        ["Open a new tab", "The dashboard takes over the new-tab page."]
      ]
    },
    vivaldi: {
      name: "Vivaldi",
      address: "vivaldi://extensions",
      note: "Vivaldi shows the standard Chromium extensions page, with Developer mode in the top-right.",
      steps: [
        ["Download the build", "Download the .zip and unzip it where you will keep it."],
        ["Turn on Developer mode", "Open vivaldi://extensions and enable Developer mode."],
        ["Load it unpacked", "Press Load unpacked, then pick the folder that has manifest.json."],
        ["Open a new tab", "Crystal Wall replaces the new tab."]
      ]
    },
    other: {
      name: "Any other browser",
      address: "chrome://extensions",
      note: "Crystal Wall is a Manifest V3 Chromium extension. It runs in Chrome, Edge, Brave, Opera, Vivaldi, Chromium, Arc, Yandex and other Chromium engines. Firefox needs its own add-on format and Safari needs a converted app, so neither can load this folder.",
      steps: [
        ["Check the engine first", "If your browser is built on Chromium it can load the folder; if it is Firefox or Safari, it cannot."],
        ["Find its extensions page", "Type your browser's name followed by ://extensions — for example chromium://extensions or arc://extensions."],
        ["Load it unpacked", "Switch Developer mode on, press Load unpacked, and choose the folder that contains manifest.json."],
        ["If there is no such page", "That browser does not allow unpacked extensions. Chrome or Edge beside it will still run you Crystal Wall."]
      ]
    }
  };

  const dialog = document.getElementById("install-dialog");
  if (!dialog) return;

  const title = document.getElementById("install-title");
  const note = document.getElementById("dialog-note");
  const stepsList = document.getElementById("dialog-steps");
  const address = document.getElementById("dialog-address");
  const mark = document.getElementById("dialog-mark");
  const copyButton = document.getElementById("copy-address");

  function fill(browser) {
    const data = BROWSERS[browser] || BROWSERS.other;
    title.textContent = "Add to " + data.name;
    note.textContent = data.note;
    address.textContent = data.address;
    address.classList.remove("copied");
    copyButton.textContent = "Copy";

    mark.className = "browser-mark " + browser + "-mark";

    stepsList.replaceChildren();
    data.steps.forEach(function (step, index) {
      const item = document.createElement("li");
      const number = document.createElement("span");
      number.className = "step-number";
      number.textContent = String(index + 1);
      const body = document.createElement("div");
      const heading = document.createElement("h3");
      heading.textContent = step[0];
      const text = document.createElement("p");
      text.textContent = step[1];
      body.append(heading, text);
      item.append(number, body);
      stepsList.append(item);
    });
  }

  document.querySelectorAll("[data-browser]").forEach(function (button) {
    button.addEventListener("click", function () {
      fill(button.dataset.browser);
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function (event) {
    // A click on the backdrop lands on the dialog element itself.
    if (event.target === dialog) dialog.close();
  });

  copyButton.addEventListener("click", async function () {
    const text = address.textContent;
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = "Copied";
      address.classList.add("copied");
    } catch (error) {
      const range = document.createRange();
      range.selectNodeContents(address);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyButton.textContent = "Select and copy";
    }
    setTimeout(function () {
      copyButton.textContent = "Copy";
      address.classList.remove("copied");
    }, 2200);
  });

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
