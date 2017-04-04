import vscode = require('vscode');
import { ExtensionContext, commands, window, workspace } from 'vscode';
import { TSPointsCli } from '../TSPointsCli';

var promptName = 'What would you like to organize in your desktop:';

export function Generics(args): void {
    let tspointsCli = new TSPointsCli();
    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage('TSPoints can only be generated if VS Code is opened on a folder.');
        return;
    }
    vscode.window.showInputBox({
        prompt: promptName
    })
        .then(function (newObjectname) { 
            tspointsCli.showFileNameDialog(args, "You will have to create a generic in the Step Six", tspointsCli.trim(newObjectname))
                .then((loc) => {
                    tspointsCli.generateGeneric(loc);
                    tspointsCli.generateReadmeSix(loc);
                } )
                .catch((err) => {
                    if (err) {
                        window.showErrorMessage(err);
                    }
                });

        });
}