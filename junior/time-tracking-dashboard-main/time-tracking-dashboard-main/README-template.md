# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://frontend-mentors-xlqx.vercel.app/?vercelToolbarCode=nrSQakXPe58ggN2). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://frontend-mentors-xlqx.vercel.app/?vercelToolbarCode=nrSQakXPe58ggN2)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TypeScript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
.proud-of-this-css::not(:hover) {
  color: papayawhip;
}
```

```ts
//
const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    profileData = holder(data);
    sessionStorage.setItem("profileData", JSON.stringify(profileData));//
    renderData(profileData);
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
};

//
const data = sessionStorage.getItem("profileData");
if (data) {
  profileData = holder(JSON.parse(data));
  renderData(profileData);
} else {
  fetchData();
}

// 
function renderData(data: Profile[]) {
  allArticles.forEach((article, index) => {
    const title = article.querySelector(".card-title")! as HTMLHeadingElement;
    if (title) {
      AppendData(data[index], article);
    }
  });
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for MDN. I really liked this pattern and will use it going forward.


## Author

- Website - [Time Tracking Dashboard](https://frontend-mentors-xlqx.vercel.app/?vercelToolbarCode=nrSQakXPe58ggN2)
- Frontend Mentor - [@warmarth](https://www.frontendmentor.io/profile/Warmarth)
- Twitter - [@cobbyfranky](https://www.twitter.com/cobbyfranky)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Special thanks to Bobby for their invaluable support and inspiration on this project. Your insights and contributions have been greatly appreciated!