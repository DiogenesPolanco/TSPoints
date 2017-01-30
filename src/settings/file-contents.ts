 
export class FileContents {

    private camelCase(input: string): string {
        return input.replace(/-([a-z])/ig, function (all, letter) {
            return letter.toUpperCase();
        });
    }

    public classContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `export class ${upperName} {
}`;
        return content;
    }

    public interfaceContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `export interface ${upperName} {
}`;
        return content;
    }

    public enumContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `export enum ${upperName} {
}`;
        return content;
    }

    private toUpperCase(input: string): string {
        let inputUpperCase: string;
        inputUpperCase = input.charAt(0).toUpperCase() + input.slice(1);
        inputUpperCase = this.camelCase(inputUpperCase);

        return inputUpperCase;
    }
}