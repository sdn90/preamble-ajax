# Preamble Ajax

You need to bring your own Promise polyfill.

## Usage

### getProduct(handle)

#### Arguments
1. `handle` *(String)*: The handle of the product

#### Returns
*(Object)*: JSON representation of the product

#### Example

```javascript
import { getProduct } from 'preamble-ajax';

getProduct('black-t-shirt');
// → { id: 1, handle: 'black-t-shirt', ... }
```

### addCart(options)

#### Arguments
1. `options` *(Object)*

#### Returns
*(Object)*: JSON representation of the product added

#### Example
```javascript
import { addCart } from 'preamble-ajax';

addCart({
  id: 1234567,
  quantity: 1,
  properties: {
    'Foo': 'Bar'
  }
});
```
