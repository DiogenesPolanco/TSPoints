import vscode = require('vscode');
import { ExtensionContext, commands, window, workspace } from 'vscode';
import { TSPointsCli } from '../TSPointsCli';

var promptName = 'What typing name do you want to create:';

export function ThirdPartyDeclaration(args): void {
    let tspointsCli = new TSPointsCli();
    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage('TSPoints can only be generated if VS Code is opened on a folder.');
        return;
    }
    vscode.window.showInputBox({
        prompt: promptName
    })
        .then(function (newObjectname) { 
            tspointsCli.showFileNameDialog(args, "You will have to use a typing in the Step Eight", tspointsCli.trim(newObjectname))
                .then((loc) => {
                    tspointsCli.generateTyping(loc);
                    tspointsCli.generateTypingImpl(loc);
                    tspointsCli.generateTypingUse(loc);
                    tspointsCli.generateReadmeEight(loc);
                } )
                .catch((err) => {
                    if (err) {
                        window.showErrorMessage(err);
                    }
                });

        });
}