# nc-wrapper [![NPM Version](https://img.shields.io/npm/v/nc-wrapper.svg)](https://www.npmjs.com/package/nc-wrapper) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Use netcat everywhere, with fallback support.

Cross-platform. Supports: macOS, Windows, Linux, OpenBSD, FreeBSD.

See also the full node.js implementation of [netcat](https://github.com/roccomuso/nc).

## Install

    $ npm i -g nc-wrapper

## Usage `ncw`

| Server side         | Client side                        |
|---------------------|------------------------------------|
| `ncw -l -p 2389` | `ncw localhost 2389` |

By default on Linux and Windows will use the embedded binaries and the global installed ones only on exception raised.

On MacOS will try to use only the global `nc` if available.

**Known issue**. The process exit is handled as exception so it will enter into the `catch` block and spawn the fallback. I'm still looking for an elegant way to handle this.

### Other example

Easily transfer a file:

| Server side         | Client side                        |
|---------------------|------------------------------------|
| `ncw -l 2389 > test` | <code>cat testfile &#124; ncw localhost 2389</code> |

## Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))
