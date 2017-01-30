'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { InstallingTypeScript } from './steps/StepOne';
import { CompilingTypeScript } from './steps/StepTwo';
import { StaticTyping } from './steps/StepThree';
import { Interfaces } from './steps/StepFour';
import { Classes } from './steps/StepFive';
import { Generics } from './steps/StepSix';
import { Modules } from './steps/StepSeven';
import { ThirdPartyDeclaration } from './steps/StepEight';
import { NewFeatures } from './steps/StepNine';
import { FinalChallenge } from './steps/StepTen';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "tspoints" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepOne', InstallingTypeScript));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepTwo', CompilingTypeScript));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepThree', StaticTyping));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepFour', Interfaces));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepFive', Classes));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepSix', Generics));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepSeven', Modules));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepEight', ThirdPartyDeclaration));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepNine', NewFeatures));
    ctx.subscriptions.push(vscode.commands.registerCommand('extension.tspoints.StepTen', FinalChallenge));
}

// this method is called when your extension is deactivated
export function deactivate() {
}