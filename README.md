# web ai 51pwn, node 20.4.0


## Install
```
yarn upgrade --latest
yarn add web-ai-51pwn

```

## Usage

### Import module

```javascript
import yolo from 'web-ai-51pwn';
```

### Initialize and load model

```javascript
import yolo from 'web-ai-51pwn';

global.charset4ai = "_zh"

// Use default models (stored in my GitHub demo repo)
let myYolo = await yolo.v1tiny();
let myYolo = await yolo.v2tiny();
let myYolo = await yolo.v3tiny();
let myYolo = await yolo.v3();

// or specify path or handler, see https://js.tensorflow.org/api/0.13.3/#loadModel
let myYolo = await yolo.v3tiny("https://.../model.json");

// or use frozen model, see https://js.tensorflow.org/api/0.13.3/#loadFrozenModel
let myYolo = await yolo.v3tiny(
  "https://.../weights_manifest.json",
  "https://.../tensorflowjs_model.pb"
);

```

### Run model

Supported input html element:
- img
- canvas
- video

```javascript
const boxes = await myYolo.predict(canvas);

// Optional settings
const boxes = await myYolo.predict(
  canvas,
  {
    maxBoxes: 5,          // defaults to 20
    scoreThreshold: .2,   // defaults to .5
    iouThreshold: .5,     // defaults to .3
    numClasses: 80,       // defaults to 80 for yolo v3, tiny yolo v2, v3 and 20 for tiny yolo v1
    anchors: [...],       // See ./src/config.js for examples
    classNames: [...],    // defaults to coco classes for yolo v3, tiny yolo v2, v3 and voc classes for tiny yolo v1
    inputSize: 416,       // defaults to 416
  }
);
```

### Output box format

```javascript
{
  top,    // Float
  left,   // Float
  bottom, // Float
  right,  // Float
  height, // Float
  width,  // Float
  score,  // Float
  class   // String, e.g. person
}
```

### Dispose model

```javascript
myYolo.dispose();
```

