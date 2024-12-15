"use strict";

interface Timeframe {
  current: number;
  previous: number;
}

interface Profile {
  title: string;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
}

let timeframe: "daily" | "weekly" | "monthly" = "weekly";

let profileData: Profile[] = [];

const holder = <T>(data: T): T => data;

const fetchData = async () => {
  try {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    profileData = holder(data);
    renderData(profileData);
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
};

fetchData();

const allArticles = document.querySelectorAll(
  "article"
) as NodeListOf<HTMLElement>;

function renderData(data: Profile[]) {
  allArticles.forEach((article, index) => {
    const title = article.querySelector(".card-title")! as HTMLHeadingElement;
    if (title) {
      AppendData(data[index], article);
    }
  });
}

const schedulers = document.getElementById("schedulers") as HTMLUListElement;
const scheduler = Array.from(schedulers.children);
const initializeSchedulers = () => {
  scheduler.forEach((button) => {
    if (button.id === timeframe) {
      button.classList.add("active");
    }
    button.addEventListener("click", (event) => {
      const target = event.target as HTMLButtonElement;
      timeframe = target.id as "daily" | "weekly" | "monthly";
      scheduler.forEach((button) => button.classList.remove("active"));
      target.classList.add("active");
      renderData(profileData);
    });
  });
};

initializeSchedulers();

const AppendData = (data: Profile, article: HTMLElement) => {
  const timeframeData = data.timeframes[timeframe];
  if (!timeframeData) return;

  const current = article.querySelector(".first span")! as HTMLParagraphElement;
  const previous = article.querySelector(".previous")! as HTMLParagraphElement;

  if (current && previous) {
    current.textContent = timeframeData.current.toString();
    previous.textContent =
      timeframe === "daily"
        ? `yesterday ${timeframeData.previous.toString()}hrs`
        : `last month-${timeframeData.previous.toString()}hrs`;
  }
};
