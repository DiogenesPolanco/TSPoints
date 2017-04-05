import vscode = require('vscode');
import { ExtensionContext, commands, window, workspace } from 'vscode';
import { TSPointsCli } from '../TSPointsCli';

var promptName = 'What you would like to develop with typescript:';

export function Modules(args): void {
     let tspointsCli = new TSPointsCli();
    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage('TSPoints can only be generated if VS Code is opened on a folder.');
        return;
    }
    vscode.window.showInputBox({
        prompt: promptName
    })
        .then(function (newObjectname) { 
            tspointsCli.showFileNameDialog(args, "You will have to create a module in the Step Seven", tspointsCli.trim(newObjectname))
                .then((loc) => {
                    tspointsCli.generateModule(loc);
                    tspointsCli.generateModuleImportUse(loc);
                    tspointsCli.generateReadmeSeven(loc);
                } )
                .catch((err) => {
                    if (err) {
                        window.showErrorMessage(err);
                    }
                });

        });
}