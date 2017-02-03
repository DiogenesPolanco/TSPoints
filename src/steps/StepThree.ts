import vscode = require('vscode');
import { ExtensionContext, commands, window, workspace } from 'vscode';
import { TSPointsCli } from '../TSPointsCli';


var promptName = 'What is your favorite hamburger:';
 
export function StaticTyping(args): void {
     let tspointsCli = new TSPointsCli();
    if (!vscode.workspace.rootPath) {
        vscode.window.showErrorMessage('TSPoints can only be generated if VS Code is opened on a folder.');
        return;
    }
    vscode.window.showInputBox({
        prompt: promptName
    })
        .then(function (newDevname) {
            tspointsCli.showFileNameDialog(args, "Just follow the README instructions", newDevname)
                .then((loc) => {
                    tspointsCli.generateStaticTyping(loc);
                    tspointsCli.generateReadmeThree(loc);
                })
                .catch((err) => {
                    if (err) {
                        window.showErrorMessage(err);
                    }
                });
        });
}