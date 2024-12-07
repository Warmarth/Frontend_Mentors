// const qoutes: [string, string, string] = [
//   "“The only way to do great work is to love what you do.” – Steve Jobs",
//   "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
//   "“Your limitation—it’s only your imagination",
// ];
// const randomQoute = () => {
//   return qoutes[Math.floor(Math.random() * qoutes.length)];
// };

//quotes.textContent = randomQoute();

interface Quote {
  quote: string;
  author: string;
  category?: string;
}

interface Window {
  API_KEY: string;
}
const apiKey = window.API_KEY;

const button = <HTMLButtonElement>document.querySelector("button")!;
const advice = <HTMLParagraphElement>document.querySelector("#advice")!;
const author = <HTMLSpanElement>document.querySelector("#author")!;

const categories = "amazing";
const headers = new Headers({
  "X-Api-Key": apiKey ?? "",
  "Content-Type": "application/json",
});

button.addEventListener("click", () => {
  const quotes: Quote = { quote: "", author: "" };
  getQoute(categories, quotes);
});

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
  } catch (error) {
    console.log(error);
  }
}
