"use strict";
// const qoutes: [string, string, string] = [
//   "“The only way to do great work is to love what you do.” – Steve Jobs",
//   "“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb",
//   "“Your limitation—it’s only your imagination",
// ];
// const randomQoute = () => {
//   return qoutes[Math.floor(Math.random() * qoutes.length)];
// };
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const apiKey = window.API_KEY;
const button = document.querySelector("button");
const advice = document.querySelector("#advice");
const author = document.querySelector("#author");
const categories = "amazing";
const headers = new Headers({
    "X-Api-Key": apiKey !== null && apiKey !== void 0 ? apiKey : "",
    "Content-Type": "application/json",
});
button.addEventListener("click", () => {
    const quotes = { quote: "", author: "" };
    getQoute(categories, quotes);
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
            console.log(error);
        }
    });
}
