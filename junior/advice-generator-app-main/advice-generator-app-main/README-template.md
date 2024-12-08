# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

## Overview

### The challenge

### Screenshot

(./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://github.com/Warmarth/Frontend_Mentors/tree/main/junior/advice-generator-app-main/advice-generator-app-main)
- Live Site URL: [Add live site URL here](https://frontend-mentors-byqr.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- TypeScript

### What I learned

Use this section to recap over async function in typescript and fetch method while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```ts
async function getQoute(categories: string, quotes: Quote) {
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${categories}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const data = await response.json();
    quotes = await data[0];
    advice.textContent = quotes.quote;
    author.textContent = quotes.author;
  }
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://mslearn.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.mdn.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [advice generator app](https://frontend-mentors-byqr.vercel.app/)
- Frontend Mentor - [@warmarth](https://www.frontendmentor.io/profile/warmarth)
- Twitter - [@cobbyfranky](https://www.twitter.com/cobbyfranky)
