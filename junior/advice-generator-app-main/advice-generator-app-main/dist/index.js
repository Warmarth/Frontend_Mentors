"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const quotesStore = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
    },
    {
        quote: "Your limitation—it’s only your imagination.",
        author: null, // No author provided
    },
    {
        quote: "Every moment is a fresh beginning.",
        author: "T.S. Eliot",
    },
    {
        quote: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
    },
    {
        quote: "By failing to prepare, you are preparing to fail.",
        author: "Benjamin Franklin",
    },
    {
        quote: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
    },
    {
        quote: "It’s hard to beat a person who never gives up.",
        author: "Babe Ruth",
    },
    {
        quote: "A goal without a plan is just a wish.",
        author: "Antoine de Saint-Exupéry",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        author: "Charles Kingsleigh",
    },
    {
        quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        author: "Roy T. Bennett",
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
    },
    {
        quote: "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        author: "Roy T. Bennett",
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "The best way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
];
const randomQoute = () => {
    return quotesStore[Math.floor(Math.random() * quotesStore.length)];
};
const API_KEY = window.API_KEY || process.env.NEXT_PUBLIC_API_KEY || "default_api_key";
const button = document.querySelector("button");
const advice = document.querySelector("#advice");
const author = document.querySelector("#author");
const categories = "amazing";
const headers = new Headers({
    "X-Api-Key": API_KEY,
    "Content-Type": "application/json",
});
button.addEventListener("click", () => {
    // const quotes: Quote = { quote: "", author: "" };
    // getQoute(categories, quotes);
    advice.textContent = randomQoute().quote;
    author.textContent = randomQoute().author;
});
function getQoute(categories, quotes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://api.api-ninjas.com/v1/quotes?category=${categories}`, {
                method: "GET",
                headers: headers,
            });
            const data = yield response.json();
            quotes = yield data[0];
            advice.textContent = quotes.quote;
            author.textContent = quotes.author;
        }
        catch (error) {
            console.error(error);
        }
    });
}
