const games = {
    game1: {
        title: "크로노 오디세이",
        description: "멈춰 있던 시간이 흐른다",
        category: "MMORPG",
    },
    game2: {
        title: "아키에이지 워",
        description: "시대의 전설을 향해",
        category: "MMORPG",
    },
    game3: {
        title: "패스 오브 엑자일 2",
        description: "얼리 액세스 오픈!",
        category: "핵앤슬레시",
    },
    game4: {
        title: "오딘 : 발할라 라이징",
        description: "신의 영역을 차지하라",
        category: "MMORPG",
    },
    game5: {
        title: "롬: 리멤버 오브 마제스터",
        description: "세계는 하나의 전장이 된다",
        category: "MMORPG",
    },
    game6: {
        title: "배틀그라운드",
        description: "최후까지 생존하라!",
        category: "배틀로얄",
    },
};

const carouselMain = document.querySelector(".carousel__main");
const gameEntries = Object.entries(games);
let currentPageIndex = 0;
let totalPages = 0;

const leftBtn = document.getElementById("carousel-left-btn");
const rightBtn = document.getElementById("carousel-right-btn");
const carouselPageNumbering = document.querySelector(
    ".carousel__page__numbering"
);

function createGameCard() {
    const pageCount = Math.ceil(gameEntries.length / 2);
    for (let i = 0; i < pageCount; i++) {
        carouselMain.innerHTML += `<div class="carousel__page"></div>`;
    }

    const pages = carouselMain.querySelectorAll(".carousel__page");

    gameEntries.forEach(([key, value], index) => {
        const pageIndex = Math.floor(index / 2);
        const targetPage = pages[pageIndex];

        targetPage.innerHTML += `
            <div class="carousel__page__item">
                <div class="carousel__item__image__wrapper">
                    <img class="carousel__item__background" src="./assets/gameList/${key}/배경.png" alt="" />
                    <img class="carousel__item__character" src="./assets/gameList/${key}/캐릭터.png" alt="" />
                </div>
                <h2 class="carousel__item__game__title">${value.title}</h2>
                <h3 class="carousel__item__game__discription">${value.description}</h3>
                <h4 class="carousel__item__game__category">${value.category}</h4>
            </div>
        `;
    });
}

function initializeCarousel() {
    const pages = document.querySelectorAll(".carousel__page");
    pages.forEach((page, index) => {
        if (index === 0) {
            page.classList.add("carousel__current__page");
        } else {
            page.classList.remove("carousel__current__page");
        }
    });

    const gameEntries = Object.entries(games);

    carouselPageNumbering.innerHTML = `<span class="carousel__page__numbering"
                    ><span class="carousel__current__page">1</span> <span class="carousel__all__page">/ ${Math.ceil(
                        gameEntries.length / 2
                    )}</span></span
                >`;

    totalPages = Math.ceil(gameEntries.length / 2);
}

function updateCarousel(newIndex) {
    const pages = carouselMain.querySelectorAll(".carousel__page");
    pages[currentPageIndex].classList.remove("carousel__current__page");
    currentPageIndex = newIndex;
    pages[currentPageIndex].classList.add("carousel__current__page");
    carouselPageNumbering.innerHTML = `<span class="carousel__page__numbering"
                    ><span class="carousel__current__page">${
                        newIndex + 1
                    }</span> <span class="carousel__all__page">/ ${Math.ceil(
        gameEntries.length / 2
    )}</span></span
                >`;
}

// 왼쪽 버튼 클릭
leftBtn.addEventListener("click", () => {
    if (currentPageIndex <= 0) {
        updateCarousel(totalPages - 1);
    } else {
        updateCarousel(currentPageIndex - 1);
    }
});

// 오른쪽 버튼 클릭
rightBtn.addEventListener("click", () => {
    if (currentPageIndex >= totalPages - 1) {
        updateCarousel(0);
    } else updateCarousel(currentPageIndex + 1);
});

createGameCard();
initializeCarousel();
