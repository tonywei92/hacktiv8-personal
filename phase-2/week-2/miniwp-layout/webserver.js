var liveServer = require("live-server");

var params = {
    port: 8000, // Set the server port. Defaults to 8080.
    root: "./public", // Set root directory that's being served. Defaults to cwd.
    open: false, // When false, it won't load your browser by default.
    file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
    wait: 500, // Waits for all changes, before reloading. Defaults to 0 sec.
    logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
};
liveServer.start(params);