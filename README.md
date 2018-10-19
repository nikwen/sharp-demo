# sharp-demo

Demonstrates an [issue]() with resizing svg files and converting them to png if

* the image has a height and width specified in pixels and
* the size it should be resized to is larger than these values.

Then the resulting image is very pixelated.

## Example

The provided svg file has a specified height and width of 32px and it is being resized to 512px. Then it is really pixelated and blurry.

Check out the file `output.png` to see the output.

## Run

```
npm install && node index.js
```

## Image source

https://openclipart.org/detail/193083/simple-key (License: CC0), modified to add a height and a width