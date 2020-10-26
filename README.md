# Generate content object from folders using metadata
Aggregates metadata describing contents and child contents into a content object.

## Motivation
**Problem**: When I use vuepress, sidebars are normally configured manually. 

**Solution**:This library automates the process by creating an object aggregating metadata files which are then can be used for different purposes.

### General use case:
We want to configure files and folders in a certain way, and we want to extract data about this structure that allows us to automatically navigate the file system, as well as configuring it so that we can represent it in the shape of a tree for instance.

## Specific use case: generate sidebars and urls to different content folders
An adapter that generates this data:
```js
// 
let modules = {
  '/modulo_1/': [ 'Capitulo.md', '' ],
  '/modulo_2/': [ 'Intro.md', '' ],
  '/': [ '' ],
  '/modulo_3/': [ 'Capitulo.md', '' ],
  '/modulo_4/': [ 'Intro.md', '' ]
}
```
## Usage 

### Add a metadata file in the folders containing markdowns
Create a `content.yaml` file inside directories in your project
Provide the following fields in the `content.yaml`. 
```yaml
type: module                              # REQUIRED: Describe the type of module
title: Demonstrate how to use this lib    # REQUIRED: Provide a title for the content module
description: >                            # REQUIRED
  Describe your module in 2 sentences     
isPublic: true                            # REQUIRED
isDraft: false
level: 2                                  
```

### Create urls and sidebars based on folders containing metadata
⚠ The current workflow is far from ideal and requires a lot of improvements still. Now I have to use a `main.js` and require the buildContents function from the library, run this main script before every develop, to get the contents.js metadata.

```js
const fs = require('fs')
const path = require('path')
const { buildSidebar } = require('metacon')

let contents = require('./contents.data.json')
contents = contents.contents
let modules = buildSidebar(contents, path.join( __dirname, '../'))

module.exports = {
  themeConfig: {
    //... 
    // This builds a sidebar for each folder
    // and a url for each folder name
    sidebar: modules
  },
}

```