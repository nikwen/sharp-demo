# sharp-demo

Demonstrates an [issue](https://github.com/lovell/sharp/issues/1222) with svgs that take way too long to be resized and converted to png.

## Run

```
npm install && node index.js
```

## Run details

Duration: 1 hour 55 minutes 46.02 seconds (for a single image!)

**System:**

* CPU: Intel Core i5-4570 CPU @ 3.20GHz × 4
* RAM: 8GB
* OS: Fedora 27 (Linux kernel 4.16.6)

## Observations

It takes less time for sizes that are powers of 2 (such as 512x512), but it still takes too long.

## Image source

https://openclipart.org/detail/172385/lipstick (License: CC0)