# 目录
  - [配置](#配置)
  - [tsconfig.json](#tsconfig.json)
  - [typescript](#typescript)
  - [类型注解](#类型注解)
  - [数据类型](#数据类型)
  
    1. [boolean](#boolean)
    2. [number](#number)
    3. [string](#string)
    4. [数组](#数组)
    5. [元组Tuple](#元组Tuple)
    6. [枚举](#枚举)
    7. [任意值any](#任意值any)
    8. [void](#void)
    9. [Null和Undefined](#Null和Undefined)
    10. [Never](#Never)
    11. [object](#object)
    12. [类型断言as](#类型断言as)
  - [接口](#接口)
  - [类](#类)
  - [函数](#函数)
  - [操作符](#操作符)
  - [解构与展开](#解构与展开)
  - [声明文件declare](#声明文件declare)
  - [装饰器Decorators](#装饰器Decorators)
  - [存取器get和set](#存取器get和set)
# 配置
  * --init  这个是初始化tsconfig.json
  * TypeScript 2.7引入了一个新的控制严格性的标记  --strictPropertyInitialization
  * --watch模式下进行重新编译后会清屏。 这样就更方便阅读最近这次编译的输出信息。
  * --pretty标记可以让错误信息更易阅读和管理。 我们对这个功能进行了两个主要的改进。 首先， --pretty对文件名，诊段代码和行数添加了颜色（感谢Joshua Goldberg）。 其次，格式化了文件名和位置，以变于在常用的终端里使用Ctrl+Click，Cmd+Click，Alt+Click等来跳转到编译器里的相应位置。
  * --strictNullChecks  null和undefined只能赋值给void和它们各自。
  * --target 目标语法   Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017','ES2018' or 'ESNEXT'. 
  * tsc -p tsconfig.json  以配置文件编译
# tsconfig.json
    这个是tslint和tsc的配置，在编译的时候 tsc 默认就是用这个配置取编译，
    但是你是 tsc 01.ts 这个就不会去找 tsconfig.json

    tslint 就是这个配置，提示就会准确
# typescript
    编译ts支持*.ts   *.tsx *.d.ts 三种文件

# 数据类型
  1. ### boolean
   
  最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean
  
  ```typescript
  let isDone: boolean = false
  ```
  2. ### number
   
   和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是number。 除了支持十进制和十六进制字面量，TypeScript还支持ECMAScript 2015中引入的二进制和八进制字面量
   ```typescript
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o744;
   ```
  3. ### string
   
  JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用string表示文本数据类型。和JavaScript一样，可以使用双引号（"）或单引号（'）表示字符串。
  ```typescript
  let name: string = "bob";
  name = "smith";
  ```

  你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（`），并且以${ expr }这种形式嵌入表达式

  ```typescript
  let name: string = `Gene`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${ name }.

  I'll be ${ age + 1 } years old next month.`;
  ```

  4. ### 数组
   
  TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：

  ```typescript
    let list: number[] = [1, 2, 3];
  ```
第二种方式是使用数组泛型，Array<元素类型>：

```typescript
  let list: Array<number> = [1, 2, 3];
```

  5. ### 元组Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为string和number类型的元组。

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```
当访问一个已知索引的元素，会得到正确的类型：
```typescript
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```
当访问一个越界的元素，会使用联合类型替代：
```typescript
x[3] = 'world'; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

  6. ### 枚举

enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字
```typescript
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从1开始编号：
```typescript
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;
```
或者，全部都采用手动赋值：
```typescript
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;
```
枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
```typescript
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

alert(colorName);  // 显示'Green'因为上面代码里它的值是2
```
  7. ### 任意值any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用any类型来标记这些变量：
```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```
在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为Object有相似的作用，就像它在其它语言中那样。 但是Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法
```typescript
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```
当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
```typescript
let list: any[] = [1, true, "free"];

list[1] = 100;
```
  8. ### void

undefined和null 是void子类型

某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void：
```typescript
function warnUser(): void {
    alert("This is my warning message");
}
```
声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
```typescript
let unusable: void = undefined;
```
  9. ### Null和Undefined

TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和void相似，它们的本身的类型用处不是很大：
```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```
默认情况下null和undefined是所有类型的子类型。 就是说你可以把null和undefined赋值给number类型的变量。
  10. ### Never

never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```
  11. ### object
   object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
使用object类型，就可以更好的表示像Object.create这样的API。例如：
```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```
  12. ### 类型断言as

类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。

类型断言有两种形式。 其一是“尖括号”语法：
```typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
另一个为as语法：
```typescript
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```
# 类型注解
  ```typescript
    function greeter(person: string) {  // 这里就是加了类型，ts在编译的时候会处理
        return "Hello, " + person;
    }

    let user = "Jane User";

    document.body.innerHTML = greeter(user);
  ```

  ``` typescript
    let person : string = "111" // 申明变量加注解
    let age = 18 // ts认为number就是age的数据类型   类型推论
    let age ; // ts 认为any就是age的数据类型
    let foo !: number // 赋值断言 foo 就是number 后面可以赋值 针对数组好像有点用 它在延迟初始化或重新初始化的场景下很方便使用。
    let foo : boolean | undefined // foo 是Boolean或者 undefined 这是联合类型
    let x : number[] // x 是number 数组
    interface SquareConfig {  // ? 是可选属性 在interface和class里面可以申明
      color?: string;
      width?: number;
    }

    interface Point {  // 只读属性
        readonly x: number;
        readonly y: number;
    }

    var point:{x:number,y:number,z?:number} // 复合类型

    interface SearchFunc {  // 函数签名
      (source: string, subString: string): boolean;
    }

    // 接口定义数组
    interface StringArray {
      [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];
  ```
  ``` typescript
    function greeter () : string {} // 函数签名
    () => string //这样好像也是可以的
  ```

# 接口
  让我们开发这个示例应用。这里我们使用接口来描述一个拥有`firstName`和`lastName`字段的对象。 在TypeScript里，只在两个类型内部的结构兼容那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用`implements`语句。
  ``` typescript
    interface Person {
      firstName: string;
      lastName: string;
    }

    function greeter(person: Person) {
        return "Hello, " + person.firstName + " " + person.lastName;
    }

    let user = { firstName: "Jane", lastName: "User" };

    document.body.innerHTML = greeter(user);
  ```
  接口定义函数
  ```typescript

  interface SearchFunc {
      (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
      return source.search(subString) !== -1;
  }
  ```
# 类
让我们创建一个`Student`类，它带有一个构造函数和一些公共字段。 注意类和接口可以一起共作，程序员可以自行决定抽象的级别。

还要注意的是，在构造函数的参数上使用`public`等同于创建了同名的成员变量,就是有这个字段了

解释下: 这里建了一个class Student 里面有字段fullName,firstName,middleInitial,lastName,有一个接口Person有firstName,lastName,有一个greeter的函数，传入的参数是Person类型,现在 new 一个 Student 的 user 是可以给greeter用的。
  ```typescript
  class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
      }
  }

  interface Person {
      firstName: string;
      lastName: string;
  }

  function greeter(person : Person) {
      return "Hello, " + person.firstName + " " + person.lastName;
  }

  let user = new Student("Jane", "M.", "User");

  document.body.innerHTML = greeter(user);
  ```
  ```typescript
  interface ClockInterface {
    currentTime: Date;
  }

  class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
  }

  let clock = new Clock(100,200)
  clock.currentTime = new Date();
  console.log(clock)
  ```
# 操作符
  + in 操作符细化和精确的 instanceof
   ```javascript
      
   ```
# 函数
  函数重载

  下面例中，我们重复定义了多次函数 reverse，前几次都是函数定义，最后一次是函数实现。在编辑器的代码提示中，可以正确的看到前两个提示。
  ```typescript
  function reverse(x: number): number;
  function reverse(x: string): string;
  function reverse(x: number | string): number | string {
      if (typeof x === 'number') {
          return Number(x.toString().split('').reverse().join(''));
      } else if (typeof x === 'string') {
          return x.split('').reverse().join('');
      }
  }

  // 函数签名
  function ajax(url:string, success:(res:string,code:number)=>void,error:(code:number)=>void)
  ```
# 解构与展开
解构赋值
```javascript
// 数组解构
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

let [, second, , fourth] = [1, 2, 3, 4];
let [first] = [1, 2, 3, 4];

// 对象解构
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o; 
// a = 'foo' 
// b = 12
```

展开
```javascript
// 数组展开
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

let a = [1,2]
let a1 = [3,4]
let c = [...a, ...a1]
console.log(c) // [ 1, 2, 3, 4 ]

// 对象展开 js不丢失方法 ts会丢失
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, ...passthrough } = o;
console.log(a,passthrough) // foo { b: 12, c: 'bar' }

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let b = {
    name : 'chen',
    ...o
}

console.log(b) //  { name: 'chen', a: 'foo', b: 12, c: 'bar' }
```

# 声明文件declare
我们要获得id是foo的元素
  ```javascript
  $('#foo');
  // or
  jQuery('#foo');
  ```
  但是在typescript中不知道$和jquery是什么,
  这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：
```typescript
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```

declare 定义的类型只会用于编译时的检查，编译结果中会被删除。

上例的编译结果是：
```javascript
jQuery('#foo');
```

我们约定声明文件以 .d.ts 为后缀。
```typescript
// jQuery.d.ts

declare var jQuery: (string) => any;
```

```typescript
/// <reference path="./jQuery.d.ts" />

jQuery('#foo');
```

# 装饰器Decorators
装饰器是一种预案目前 es6 没有实现，ts和angular已经实现了

```typescript
function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    @f()
    @g()
    method() {}
}
```

在控制台里会打印出如下结果:
```text
f(): evaluated
g(): evaluated
g(): called
f(): called
```

类装饰器在类声明之前被声明（紧靠着类声明）。 类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
```typescript
function test() {
    return function(target: Function) {
        target('test') //这里执行构造函数
        console.log(target);  // 打印出类A的构造函数
    }
}
@test()
class A {
    data = 1;
    constructor(val: any) {
        console.log('val',val);
    }
    func() {

    }
}
let temp = new A('dd');
```
方法装饰器声明在一个方法的声明之前（紧靠着方法声明）。 它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。
```typescript
function funcDec() {
    /**
    * @param target 被装饰方法所在类的prototype的值，比如 function a() {};a.prototype.func = function()   {},target就是a.prototype，所以可以给类追加方法
    * @param propertyKey 被修饰function的名称字符串
    * @param PropertyDescriptor 被修饰的方法的属性和值 configurable:true，enumerable:true，value:function () { … }，writable:true
    */
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(arguments)
        console.log('target');
        console.log(target.detail);
        console.log(propertyKey);
        console.log(descriptor);
        // 为被修饰的类追加 addfunc这个方法
        target.addfunc = function() {

        }
        if(propertyKey == 'detail') {
            // 装饰器这个中模式意图是无入侵式的修饰
            let originFunc = descriptor.value;
            descriptor.value = function(...param: any[]) {
                console.log('funcDec detail 1'); //①
                console.log(funcDec,(<any>this).name);//②
                originFunc.call(this,...param);//③
            }            
        }

    }
}
class func {
    name = 'zengwe';
    @funcDec()
    detail() {
        //④
        console.log(this.name)
        console.log(' detail origin func');
    }
    detail2() {
        console.log(this.name)
        console.log('origin func');        
    }
}
console.log(func)
let instance = new func();
console.log('excute function detail');
instance.detail();
console.log(instance);
```
访问器装饰器声明在一个访问器的声明之前（紧靠着访问器声明）。 访问器装饰器应用于访问器的 属性描述符并且可以用来监视，修改或替换一个访问器的定义。
```typescript
class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
```

参数装饰器声明在一个参数声明之前（紧靠着参数声明）。


# 存取器get和set
没有用存取器的
```typescript
class Employee {
  fullName: string;
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
```
用了存取器的,判断了密码对不对
```typescript
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
```