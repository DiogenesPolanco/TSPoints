
export class FileContents {

    private camelCase(input: string): string {
        return input.replace(/-([a-z])/ig, function (all, letter) {
            return letter.toUpperCase();
        });
    }
    public staticTypingContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `var burger: string = '${upperName}',     // String 
calories: number = 300,           // Numeric
tasty: boolean = true;            // Boolean

// Alternatively, you can omit the type declaration:
// var burger = '${upperName}';

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function eat(food: string, energy: date): void {
  console.log("Our " + food + " has " + energy + " calories.");
}

eat(burger, calories);

//Because TypeScript is compiled to JavaScript, and the latter has no idea what types are, they are completely removed:

// JavaScript code from the above TS example.

/*
var burger = '${upperName}',
    calories = 300, 
    tasty = true; 

function eat(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}

eat(burger, calories);*/
`;
        return content;
    }

    public interfacesContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `// Here we define our ${upperName} interface, its properties, and their types.
interface ${upperName} {
    name: string;
    calories: number;
}

// We tell our function to expect an object that fulfills the ${upperName} interface. 
// This way we know that the properties we need will always be available.
function eat(food: ${upperName}): void{
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

// We define an object that has all of the properties the ${upperName} interface expects.
// Notice that types will be inferred automatically.
var sample${upperName} = {
  name: "My${upperName}", 
  calories: 200
}

eat(sample${upperName});
`;
        return content;
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

        var content: string = `
### Previous step One
1. npm install -g typescript
2. tsc -v

### learn to compile typescript 

#### The following command takes a TypeScript file named ${inputName}.ts and translates it into its JavaScript version ${inputName}.js. If ${inputName}.js already exists it will be overwritten.
tsc ${inputName}.ts   

#### Will result in separate .js files: ${inputName}.js other.js.
tsc ${inputName}.ts other.ts    

#### Compiles all .ts files in the current folder. Does NOT work recursively.
tsc *.ts 

#### If you complete StepOne, you can run your simple ${inputName} example by opening up a terminal and running:
node ${inputName}.js
`;
        return content;
    }
    public readmeContentStaticTyping(inputName: string): string {

        var content: string = `
### Previous step One
1. npm install -g typescript
2. tsc -v

###  Previous step Two

#### The following command takes a TypeScript file named ${inputName}.ts and translates it into its JavaScript version ${inputName}.js. If ${inputName}.js already exists it will be overwritten.
tsc ${inputName}.ts   

#### Will result in separate .js files: ${inputName}.js other.js.
tsc ${inputName}.ts other.ts    

#### Compiles all .ts files in the current folder. Does NOT work recursively.
tsc *.ts 

#### If you complete StepOne, you can run your simple ${inputName} example by opening up a terminal and running:
node ${inputName}.js

###  Previous step Static Typing
1. Find the bug in ${inputName}.ts and solve it
2. Compile the file ${inputName}.ts   
3. node ${inputName}.js

`;
        return content;
    } 

     public readmeContentInterfaces(inputName: string): string {

        var content: string = `
### Previous step One
1. npm install -g typescript
2. tsc -v

###  Previous step Two

#### The following command takes a TypeScript file named ${inputName}.ts and translates it into its JavaScript version ${inputName}.js. If ${inputName}.js already exists it will be overwritten.
tsc ${inputName}.ts   

#### Will result in separate .js files: ${inputName}.js other.js.
tsc ${inputName}.ts other.ts    

#### Compiles all .ts files in the current folder. Does NOT work recursively.
tsc *.ts 

#### If you complete StepOne, you can run your simple ${inputName} example by opening up a terminal and running:
node ${inputName}.js

###  Previous step Three
1. Find the bug in ${inputName}.ts and solve it
2. Compile the file ${inputName}.ts   
3. Run node ${inputName}.js


`;
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