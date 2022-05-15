const electron = require("electron");
const config = require(__dirname.replace("discordquotes.asar", "config.json")); // this is so hacky
const quoteId = Math.floor(Math.random() * config.quotes.length);
const script = `
    if(window.DiscordSplash) {
        // Make the existing status label small and gray
        const statusLabel = document.querySelectorAll(".splash-status")[0];
        statusLabel.style = "font-size: 13px; font-style: normal; font-weight: bold; opacity: .7; margin-top: 10px;";

        // Create the quote label
        const quoteLabel = document.createElement("span");
        const newContent = document.createTextNode("${config.quotes[quoteId]}");
        quoteLabel.appendChild(newContent);
        quoteLabel.classList.add("splash-status");
        document.querySelector(".splash-text").insertBefore(quoteLabel, document.querySelector(".splash-status"));
    }
`;

// Execute the script when a browser window is created and the DOM is ready
electron.app.on("browser-window-created", (e, w) => {
    w.webContents.on("dom-ready", (e) => {
        w.webContents.executeJavaScript(script);
    });
});

// Load Discord
electron.app.on("ready", (e) => {
    if(config.asarPath == "") {
        config.asarPath = __dirname.replace("/discordquotes", "").replace("\\discordquotes", "");
    }
    require(config.asarPath);
});