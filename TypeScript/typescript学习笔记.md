1. ts的环境搭建

   >首先安装node
   >
   >npm install -g  typescript   (mac系统前面要加sudo)
   >
   >tsc 用来变异ts文件
   >
   >npm install -g npm    升级npm

2. 编译选项

   > --outDir 指定编译文件输出目录
   >
   > `tsc --outDir ./dist ./src/helloTypescript.ts`
   >
   > --target 指定编译的代码版本目标 ，默认是ES3
   >
   > `tsc --outDir ./dist --target ES6 ./src/helloTyptscript.ts `
   >
   > --watch 在监听模式下运行，当前文件发生改变的时候自动编译
   >
   > `tsc --outDir ./dist --target ES6 --watch ./src/helloTypescript.ts`

3. `tsconfig.json`默认跟src平级，直接运行tsc，默认找到src平级的`tsconfig.json`运行,(**放在默认的与src平级的好处是编译的文件变量不会报红线**),如果把`tsconfig.json`文件放到其他文件夹下面，默认的方式找不到，就要用专用的命令去寻找

   `tsc -p ./configs/tsconfig.json `

   即使用 `--project`或`-p`指定某个具体的配置文件

   `tic -p ./src`使用-p指定文件夹，tsc会默认加载该文件夹下面的`tsconfig.json`文件

4. 上课装了`npm install --save @types/baidumap-web-sdk`作为案例演示

5. 


