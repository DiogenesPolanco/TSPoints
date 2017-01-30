
export class FileContents {

    private camelCase(input: string): string {
        return input.replace(/-([a-z])/ig, function (all, letter) {
            return letter.toUpperCase();
        });
    }
    public functionContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `export function Main (name: string){
    console.log(name + " Is learning typescript!");
}
Main("${upperName}");
`;
        return content;
    }
    public classContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `export class ${upperName} {
}`;
        return content;
    }
    public readmeContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `### ${upperName} will learn to install typescript 
1. npm install -g typescript
2. tsc -v
`;
        return content;
    }
    public readmeContentCompile(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `
### Previous step One
1. npm install -g typescript
2. tsc -v

### learn to compile typescript 

#### The following command takes a TypeScript file named ${upperName}.ts and translates it into its JavaScript version ${upperName}.js. If ${upperName}.js already exists it will be overwritten.
tsc ${upperName}.ts   

#### Will result in separate .js files: ${upperName}.js other.js.
tsc ${upperName}.ts other.ts    

#### Compiles all .ts files in the current folder. Does NOT work recursively.
tsc *.ts 

#### If you complete StepOne, you can run your simple ${upperName} example by opening up a terminal and running:
node ${upperName}.js
`;
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