
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
      public typingContentImpl(inputName: string): string {
        let upperName = this.toUpperCase(inputName);
        let lowerName = this.toLowerCase(inputName);

        var content: string = ` 
export class Extended${upperName} implements ${lowerName}.I${upperName} {
    private subscribers = [];
    constructor() {
        
    }

    public on(eventName: string, cb: (data?: any) => void) {
        this.subscribers.push({
            eventName: eventName,
            cb: cb
        })
    }

    public trigger(eventName: string, data?: any) {
        this.subscribers
            .filter(function (subscriber) {
                return subscriber.eventName === eventName
            })
            .forEach(function (subscriber) {
                subscriber.cb(data)
            })
    }
}
`;
        return content;
    }
    public moduleContentSample(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `
//Import the module you generated to use it with the name validator
let myValidator = new validator.${upperName}Validator();
//Use the test method and print the test result on the screen.
`;
        return content;
    }
    public moduleContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `
export interface StringValidator {
    isAcceptable(s: string): boolean;
}
export const numberRegexp = /^[0-9]+$/;
 
class ${upperName}Validator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ${upperName}Validator };
// other : export { ${upperName}Validator as mainValidator };

//You have to study how this validator works and open the ${inputName}Test.ts file to encode that test. where you can import these validations and use them as follows:
/*
import * as validator from "./${inputName}";  
*/
//Do not forget to transpile the files before testing them.
`;
        return content;
    }
     public typingContentDecl(inputName: string): string {
        let upperName = this.toUpperCase(inputName);
        let lowerName = this.toLowerCase(inputName);

        var content: string = ` 
declare namespace ${lowerName} {
    export interface I${upperName} {
        on: (eventName: string, cb: (data?: any) => void) => void;
        trigger: (eventName: string, data?: any) => void;
    } 
} 
`;
        return content;
    }
 public typingContentUse(inputName: string): string {
        let upperName = this.toUpperCase(inputName); 
        let lowerName = this.toLowerCase(inputName);
        
        var content: string = `  
import { Extended${upperName} } from './${lowerName}Impl';

var extended${upperName} = new Extended${upperName}();
/*Event Sample:
    extended${upperName}.on("event", (data: any) => {
        console.log("'event' triggered with data: " + data.foo);
    })
*/
//Create a new event, pass test data and print on screen

//Call the trigger and verify that the event is functional:
//Sample: extended${upperName}.trigger("event", { "foo": "rrr" });

`;
        return content;
    }
    public genericContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `// The <T> after the function name symbolizes that it's a generic function.
// When we call the function, every instance of T will be replaced with the actual provided type.

// Receives one argument of type T,
// Returns an array of type T.

function generic${upperName}<T>(argument: T): T[] {    
  var arrayOfT: T[] = [];    // Create empty array of type T.
  arrayOfT.push(argument);   // Push, now arrayOfT = [argument].
  return arrayOfT;
}

var arrayFromString = generic${upperName}<string>("beep");
console.log(typeof arrayFromString[0])   // String
// You have to print the first value of the array.

var arrayFromNumber = generic${upperName}(42);
console.log(arrayFromNumber[0]);         // 42
// You have to print the first value type of the array
`;
        return content;
    }
    public classContent(inputName: string): string {
        let upperName = this.toUpperCase(inputName);

        var content: string = `export class ${upperName} {
  // Our properties:
  // By default they are public, but can also be private or protected.
  characteristics: Array<string>;  // The characteristics in the ${upperName}, an array of strings.
  colors: number;         // How many colors will the ${upperName} be, a number.

  // A straightforward constructor. 
  constructor(characteristic_list: Array<string>, total_colors: number) {
    // The this keyword is mandatory.
    this.characteristics = characteristic_list;    
    this.colors = total_colors;
  }

  // Methods
  list(): void {
    console.log("Your ${upperName} has the following characteristics:");
    for(var i=0; i<this.characteristics.length; i++) {
      console.log(this.characteristics[i]);
    }
  }

} 

// You have to create a new instance of the ${upperName} class. 

// And call the list method. 

`;
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
      public readmeContentTypings(inputName: string): string {

        var content: string = `
### Previous step One
1. npm install -g typescript
2. tsc -v

###  Previous step Two

#### The following command takes a TypeScript file named ${inputName}.ts and translates it into its JavaScript version ${inputName}.js. If ${inputName}.js already exists it will be overwritten.
tsc ${inputName}Impl.ts   

#### Will result in separate .js files: ${inputName}.js other.js.
tsc ${inputName}Use.ts other.ts    

#### Compiles all .ts files in the current folder. Does NOT work recursively.
tsc *.ts 

#### If you complete StepOne, you can run your simple ${inputName} example by opening up a terminal and running:
node ${inputName}Use.js

###  Previous step Three
1. Find the bug in ${inputName}Use.ts and solve it
2. Compile the file ${inputName}Use.ts   
3. Run node ${inputName}Use.js

###  Previous step Four
Learn how to use typescript interfaces

###  Previous step Five
Using classes for Learn typescript OOP

###  Previous step Six
Using generics is better than using the any data type

###  Previous step Seven
Introduces a syntax for exporting and importing modules

### TypeScript declaration files are usually written by hand, but there’s a high chance that the library you need already has a .d.ts. file created by somebody else. 
Just open the ${inputName}Impl.ts and follow the commented instructions at the end of ${inputName}Use.ts.

`;
        return content;
    }
      public readmeContentModules(inputName: string): string {

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

###  Previous step Four
Learn how to use typescript interfaces

###  Previous step Five
Using classes for Learn typescript OOP

###  Previous step Six
Using generics is better than using the any data type

### Another important concept when working on large apps is modularity. 
Just open the ${inputName}.ts and follow the commented instructions at the end of ${inputName}.ts.

`;
        return content;
    }
    public readmeContentGenerics(inputName: string): string {

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

###  Previous step Four
1. Learn how to use typescript interfaces

###  Previous step Five
1. Using classes for Learn typescript OOP

### Working with class
Just open the ${inputName}.ts and follow the commented instructions at the end of ${inputName}.ts.

`;
        return content;
    }
    public readmeContentClass(inputName: string): string {

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

###  Previous step Four
1. Learn how to use typescript interfaces

### Working with class
Just open the ${inputName}.ts and follow the commented instructions at the end of ${inputName}.ts.

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

### Learn how to use typescript interfaces
1. Check the ${inputName}.ts and modify the interface.

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
    private toLowerCase(input: string): string {
        let inputLowerCase: string;
        inputLowerCase = input.charAt(0).toLowerCase() + input.slice(1);
        inputLowerCase = this.camelCase(inputLowerCase); 
        return inputLowerCase;
    }
}