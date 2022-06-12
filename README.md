# Redwoodjs-stripe Demo

A little sneak peak of the [redwoodjs-stripe](https://github.com/chrisvdm/redwoodjs-stripe) plugin.

The idea is that by running one or two commands you will have everything you need for your own commerce site. 

Since the plugin is still a work in progress so please do not use it in production *yet*.

### Try it out

Before you start you need a [Stripe](https://stripe.com/) account. You are going to need your secret key and publishable key in a bit. You can find them on your Dashboard in the bottom right corner.

> Make sure you're in **Test Mode**. You can toggle this in the top right corner of the screen

1. Let's start by getting the `redwoodjs-stripe` package.
```
yarn add redwoodjs-stripe
```

2. Now let's set up the demo to use the plugin. 
```
yarn redwoodjs-stripe setup
```

You'll be asked for your Stripe api keys (the secret key and publishable key) and whether you'd like some dummy products to be added to your Stripe account.

If all went well, you should see that the following happened:
- your api keys were added to the .env file
- if you opted for it, dummy products was added to your Stripe account
- a `StripeProductsCell` was created
- a `StripeDemoPage` was generated

3. Congratulations you now have a commerce app! Now run: 
```
yarn rw dev
```
Then navigate to [localhost:8910/stripe-demo](http://localhost:8910/stripe-demo) to see the store.

### Features
This isn't a complete list of what the plugin will do and the api will most likely change, but this is what it can do so far.

- do a once-off checkout via the Stripe hosted checkout page.
```
import { useCheckoutHandler, useStripeCart } from 'redwoodjs-stripe/web'

...
const checkout = useCheckoutHandler()
const { cart } = useStripeCart()

...
const checkoutButtonClicked = async () => {
  await checkout(cart)
}
```
- use a super lofi cart we created
```
import { useStripeCart } from 'redwoodjs-stripe/web'
...
const {cart, addToCart, editCartItem, removeFromCart, clearCart } = useStripeCart()
...
addToCart({
  id: 'price_sdfsdfsdf, 
  name: 'Folding', 
  price: 500 
})

...
removeFromCart('price_sdfsdfsdf')
...

editCartItem({
  id: 'price_sdfsdfsdf,
  quantity: 4
})

...
clearCart()
...
...
```
- fetch products by their associated price via cells
- fetch products with their price data via cells

### Thank you!
This plugin is being developed with the help of the awesome people from [Redwoodjs](https://redwoodjs.com/) and [Stripe](https://stripe.com). 



