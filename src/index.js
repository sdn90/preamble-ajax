/*
 * Client for Shopify Ajax API
 * More info: https://docs.shopify.com/support/your-website/themes/can-i-use-ajax-api
 */

const headers = {
  'Accept': 'text/javascript',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest'
}

export default function getProduct(handle) {
  return fetch(`/products/${handle}`, {
    method: 'GET',
    credentials: 'include',
    headers
  });
}

export default function addCart(options) {
  return fetch(`/cart/add.js`, {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(options),
    headers
  });
}

export default function getCart() {
  return fetch('/cart.js', {
    method: 'GET',
    credentials: 'include',
    headers
  });
}

export default function updateCart(options) {
  return fetch('/cart/update.js', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(options),
    headers
  });
}

export default function changeCart(options) {
  return fetch('/cart/change.js', {
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(options),
    headers
  });
}

export default function clearCart() {
  return fetch('/cart/clear.js', {
    method: 'POST',
    credentials: 'include',
    headers
  });
}

export default function getShipping(options) {
  let url = '/cart/shipping_rates.json?' +
              'shipping_address[zip]=' + options.zip
            + '&shipping_address[country]=' + options.country
            + '&shipping_address[province]=' + options.state
  return fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers
  });
}

