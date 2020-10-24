# Goal: File system configuration
Make a data structure that represents the structure of a folder and extracts data about how the folder is organized. 
## General use case:
We want to configure files and folders in a certain way, and we want to extract data about this structure that allows us to automatically navigate the file system, as well as configuring it so that we can represent it in the shape of a tree for instance.

## Motivation
When I use vuepress, sidebars are normally configured 

## Feature specific to vuepress
Return the module as a flat object (collection), this could be actually a method.....
```js
// build modules
let modules = {
  '/modulo_1/': [ 'Capitulo.md', '' ],
  '/modulo_2/': [ 'Intro.md', '' ],
  '/': [ '' ],
  '/modulo_3/': [ 'Capitulo.md', '' ],
  '/modulo_4/': [ 'Intro.md', '' ]
}
```
### Issues
1. If a module has the same name currently it will override.... Solution, assign a random character to differentiate the object....???? Even in this case because it is random it could happen....Another solution is to just teach people to not name modules the same...
   todo: Make a list of dos and donts...