"use strict";
let timeframe = "weekly";
let profileData = [];
const holder = (data) => data;
const fetchData = async () => {
    try {
        const response = await fetch("./data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        profileData = holder(data);
        renderData(profileData);
    }
    catch (error) {
        console.error("There was a problem with your fetch operation:", error);
    }
};
fetchData();
const allArticles = document.querySelectorAll("article");
function renderData(data) {
    allArticles.forEach((article, index) => {
        const title = article.querySelector(".card-title");
        if (title) {
            AppendData(data[index], article);
        }
    });
}
const schedulers = document.getElementById("schedulers");
const scheduler = Array.from(schedulers.children);
const initializeSchedulers = () => {
    scheduler.forEach((button) => {
        if (button.id === timeframe) {
            button.classList.add("active");
        }
        button.addEventListener("click", (event) => {
            const target = event.target;
            timeframe = target.id;
            scheduler.forEach((button) => button.classList.remove("active"));
            target.classList.add("active");
            renderData(profileData);
        });
    });
};
initializeSchedulers();
const AppendData = (data, article) => {
    const timeframeData = data.timeframes[timeframe];
    if (!timeframeData)
        return;
    const current = article.querySelector(".first span");
    const previous = article.querySelector(".previous");
    if (current && previous) {
        current.textContent = timeframeData.current.toString();
        previous.textContent =
            timeframe === "daily"
                ? `yesterday ${timeframeData.previous.toString()}hrs`
                : `last month-${timeframeData.previous.toString()}hrs`;
    }
};
