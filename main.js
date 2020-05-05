const exportToHubble = require('./src/exportToHubble');
const exportAssets = require('./src/exportAssets');

module.exports = {
    commands: {
        exportToHubble: exportToHubble,
        exportAssets: exportAssets,
    },
};
