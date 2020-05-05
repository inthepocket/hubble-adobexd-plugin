const fs = require('uxp').storage.localFileSystem;
const application = require("application");

async function createDirectoryPath(topLevel, path) {
  let folder = topLevel;

  // Sequential execution to ensure that the toplevel is updated
  for (const name of path) {
    try {
      folder = await folder.getEntry(name);
    } catch(err) {
      folder = await folder.createFolder(name);
    }
  }

  return folder;
}

async function exportAssets(_selection, documentRoot) {
  const assets = documentRoot.children.filter(artboard => artboard.markedForExport);

  const folder = await fs.getFolder();
  if (!folder) return;

  /**
   * Run sequential because application.createRenditions is not concurrent
   * so we have to wait until the previous has resolved before starting a new one
   */
   for (const asset of assets) {
    const path = asset.name.split('/');

    const folderWithFile = await createDirectoryPath(folder, path);
    const fileName = path.pop();

    for (const scale of [1, 2, 3]) {
      try {
        const renderFilePNG = await folderWithFile.createFile(`${fileName}@${scale}x.png`, { overwrite: true });
        const renderFileSVG = await folderWithFile.createFile(`${fileName}@${scale}x.svg`, { overwrite: true });

        const renditionOptions = [
          {
            node: asset,
            outputFile: renderFilePNG,
            type: application.RenditionType.PNG,
            scale: scale
          },
          {
            node: asset,
            outputFile: renderFileSVG,
            type: application.RenditionType.SVG,
            scale: scale,
            minify: true,
            embedImages: true,
          }
        ];
  
        await application.createRenditions(renditionOptions);
      } catch (err) {
        return console.log(err);
      }
    }
  }
}

module.exports = exportAssets;
