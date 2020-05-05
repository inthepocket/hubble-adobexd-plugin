const fs = require('uxp').storage.localFileSystem;
const shell = require('uxp').shell;

const CANCELLED = 'reasonCanceled';

function showDialog(defaultInput = '') {
    document.body.innerHTML = `
      <style>
        form {
          width: 400px;
        }
        label {
          display: flex;
        }
        .textfield {
          flex: 2;
        }
        .h1 {
          align-items: center;
          justify-content: space-between;
          display: flex;
          flex-direction: row;
        }
        .icon {
          border-radius: 4px;
          width: 24px;
          height: 24px;
          overflow: hidden;
        }
      </style>
      <dialog id="dialog">
        <form method="dialog">
          <h1>Trigger URL</h1>
          <label>
            <span>URL</span>
            <input class="textfield" uxp-quiet="true" type="text" id="url" value=${defaultInput} placeholder="Your URL, e.g. https://cloudfunctions.net/export"/>
          </label>
          <footer>
            <button id="cancel">Cancel</button>
            <button type="submit" id="ok" uxp-variant="cta">OK</button>
          </footer>
        </form>
      </dialog>
    `;

    const dialog = document.getElementById('dialog');

    const cancelButton = document.getElementById('cancel');
    cancelButton.addEventListener('click', () => dialog.close(CANCELLED));

    const okButton = document.getElementById('ok');
    okButton.addEventListener('click', e => {
        dialog.close(document.getElementById('url').value);
        e.preventDefault();
    });

    return dialog.showModal();
}

async function exportToHubble() { 
    const file = await fs.getFileForOpening({types:['xd']});
    if (!file) return;
    const filePath = file.nativePath;

    const folder = await fs.getDataFolder();
    let urlFile = null;
    try {
        urlFile = await folder.getEntry('cloudurl.txt');
    } catch (err) {
        urlFile = await folder.createFile('cloudurl.txt');
        // Something has to be written to the file before it shows up in the filesystem
        await urlFile.write('');
    }
    const defaultInput = await urlFile.read();
    const url = await showDialog(defaultInput);

    if (url != CANCELLED) {
        await urlFile.write(url);
        shell.openExternal(`${url}?filePath=${filePath}&app=ADOBEXD`);
    }
}

module.exports = exportToHubble;
