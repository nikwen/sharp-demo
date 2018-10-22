# sharp-demo

Demonstrates an [issue](https://github.com/lovell/sharp/issues/1421) with resizing svg files and converting them to png if

* the svg file has a height and a width specified in pixels and
* the size it should be resized to is larger than these values.

Then the resulting image is very pixelated.

## Example

The provided svg file has a specified height and width of less than 40px each and is being resized to 512px. Then it is really pixelated and blurry.

Check out the file `output.png` to see the output.

## Run

```
npm install && node index.js
```

## Image source

https://openclipart.org/detail/308663/b17-memphis-belle (License: CC0), modified to add a height and a width