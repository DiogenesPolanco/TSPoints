import vscode = require('vscode');
import { ExtensionContext, commands, window, workspace } from 'vscode';
import { TSPointsCli } from '../TSPointsCli';

var promptName = 'Please enter the name of an object:';

export function Classes(args): void {
    let tspointsCli = new TSPointsCli();
    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage('TSPoints can only be generated if VS Code is opened on a folder.');
        return;
    }
    vscode.window.showInputBox({
        prompt: promptName
    })
        .then(function (newObjectname) {
            tspointsCli.showFileNameDialog(args, "You will have to create a class in the Step Five", tspointsCli.trim(newObjectname))
                .then((loc) => {
                    tspointsCli.generateClass(loc);
                     tspointsCli.generateReadmeFive(loc);
                } )
                .catch((err) => {
                    if (err) {
                        window.showErrorMessage(err);
                    }
                });

        });
}