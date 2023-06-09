# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

![](./src/images/short1.png)
![](./src/images/short.png)

### Links

- Solution URL: [Code](https://github.com/joe801/Shortly)
- Live Site URL: [live](https://shortly.joecrypt.repl.co/)

## My process

### Built with

- Jsx
- Tailwind CSS
- Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

```js
const copyToClipboard = (shortLink) => {
    navigator.clipboard.writeText(shortLink)
      .then(() => {
          console.log("Link copied to clipboard!");
      })
      .catch((error) => {
          console.error("Failed to copy link to clipboard:", error);
      });
    }
```

## Author

- Website - [Joecrypt](https://www.joecrypt.ml)
- Frontend Mentor - [@joe801](https://www.frontendmentor.io/profile/joe801)
- Twitter - Twitter - [@Joecrypt_](https://www.twitter.com/Joecrypt_)
