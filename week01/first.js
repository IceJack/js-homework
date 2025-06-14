let userName = "조석근"; // 사용자 이름
const absoluteZero = -273.15; //절대 영도, 상수
let isLogin = false; // 로그인 여부
let userAge = 29; // 사용자 나이
let productPrice = 199.99; // 상품 가격
const backgroundColor = "#ffffff"; // 배경색, 상수
let replyCount = 12; // 댓글 수
let currentPageCount = 3; // 현재 페이지
let userGrade = "VIP"; // 사용자 등급
let isClicked = true; // 클릭 여부

function greetUser(username) {
    return "안녕하세요! " + username + "님. 좋은 하루되세요!"; //유저에게 인사하는 함수, 함수 선언식
}

const tax = 0.1; // 세금 상수, 10%

let calculateOriginalPrice = function (priceWithTax) {
    return priceWithTax - tax; // 세금 포함 가격에서 원래 가격을 계산하는 함수, 함수 표현식
};

let registrationCard = {
    // 사용자 등록 카드
    name: "조석근",
    age: 29,
    sex: "male",
};

let canSellAlcohol = (registrationCard) => {
    // 주류 판매 가능 여부를 확인하는 함수
    if (registrationCard.age >= 19) return true;
    else return false;
};

let getDiscountedPrice = (originalPrice, discountPercent) => {
    // 할인된 가격을 계산하는 함수
    return originalPrice - (originalPrice * discountPercent) / 100;
};

let checkTestGrade = (grade) => {
    // 시험 성적을 평가하는 함수
    let result = {
        // 결과 객체
        score: grade,
        grade: "",
        description: "",
    };

    if (grade >= 90) {
        result.grade = "A";
        result.description = "매우 우수";
    } else if (grade >= 80) {
        result.grade = "B";
        result.description = "우수";
    } else if (grade >= 70) {
        result.grade = "C";
        result.description = "보통";
    } else if (grade >= 60) {
        result.grade = "D";
        result.description = "미달, 통과 기준 근접";
    } else {
        result.grade = "F";
        result.description = "낙제";
    }

    return result; // 성적 결과를 반환하는 함수
};
