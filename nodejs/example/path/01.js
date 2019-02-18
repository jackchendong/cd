const path = require('path')
console.log(path.resolve())  //D:\cd\nodejs\example\path
console.log(path.resolve('src/a'))  // D:\cd\nodejs\example\path\src\a  绝对路径
console.log(path.resolve(__dirname, 'src/a')) // D: \cd\nodejs\example\path\src\a 绝对路劲
console.log(path.resolve('/foo/bar', './baz'))  // D:\foo\bar\baz
console.log(path.sep) //  Windows 上是 \。 POSIX 上是 /。

console.log(path.posix)
/**
 * { resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: format],
  parse: [Function: parse],
  sep: '/',
  delimiter: ':',
  win32:
   { resolve: [Function: resolve],
     normalize: [Function: normalize],
     isAbsolute: [Function: isAbsolute],
     join: [Function: join],
     relative: [Function: relative],
     toNamespacedPath: [Function: toNamespacedPath],
     dirname: [Function: dirname],
     basename: [Function: basename],
     extname: [Function: extname],
     format: [Function: format],
     parse: [Function: parse],
     sep: '\\',
     delimiter: ';',
     win32: [Circular],
     posix: [Circular],
     _makeLong: [Function: toNamespacedPath] },
  posix: [Circular],
  _makeLong: [Function: toNamespacedPath] }

 */



console.log(path.parse('/home/user/dir/file.txt'))
/**
 * { root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file' }
 */


path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
}); // 返回: '/home/user/dir/file.txt'
