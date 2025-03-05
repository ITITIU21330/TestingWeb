const questions = [
    "Các phòng ban khác nhau thu thập và phân tích phản hồi một cách độc lập (ví dụ: phiếu khảo sát, lắng nghe qua tổng đài, lắng nghe qua các nền tảng truyền thông xã hội - social listening) bằng các công cụ của riêng họ.",
    "Việc phân loại phản hồi khách hàng (ví dụ: thắc mắc/khiếu nại) được các phòng ban phân nhóm riêng biệt và được xử lý thông qua các thông báo cơ bản.",
    "Có một nhóm chuyên trách về việc thu thập, phân tích nguyên nhân gốc rễ vấn đề của khách hàng và truyền thông về phản hồi của khách hàng đến quản lý và ban lãnh đạo cấp cao.",
    "Có một vài cuộc khảo sát được thiết kế thống nhất cho một số điểm chạm theo hành trình mua hàng và vòng đời của khách hàng.",
    "Các thông báo được gửi đến khách hàng đều được cá nhân hoá bao gồm cả về tình trạng của khiếu nại/phản hồi của họ, thông qua hệ thống quản lý thông tin khách hàng hoặc hệ thống xử lý khiếu nại tự động.",
    "Phản hồi trực tiếp (ví dụ: khảo sát), gián tiếp (ví dụ: mạng xã hội) và suy đoán (ví dụ: tần suất đặt hàng) được hợp nhất để cung cấp một góc nhìn chung về trải nghiệm tại mỗi giai đoạn của vòng đời khách hàng.",
    "Đã hoàn thiện năng lực về phản hồi khách hàng (VoC) tiêu chuẩn - và được hỗ trợ bởi một nền tảng VoC duy nhất, được sử dụng để phối hợp các hoạt động phản hồi khách hàng trên toàn doanh nghiệp.",
    "Phản hồi của khách hàng được phân loại thông qua các quy trình của từng phòng ban cụ thể. Thông tin về phản hồi của khách hàng và dự đoán hành vi của khách hàng được chuyển giao cho các nhân sự liên quan trên toàn tổ chức.",
    "Phản hồi của khách hàng (VoC) được định lượng bằng cách liên kết chặt chẽ với các hành động cụ thể của khách hàng như tần suất mua hàng, giá trị đơn hàng.",
    "Trải nghiệm của nhân viên và đánh giá của nhân viên được cân nhắc thành yếu tố để cải thiện trải nghiệm khách hàng.",
];

let currentQuestionIndex = 0;
let scores = Array(questions.length).fill(0);
let answeredQuestions = Array(questions.length).fill(false);
let totalScore = 0;

// Lấy các phần tử từ DOM
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const finishBtn = document.getElementById("finish-btn");
const optionButtons = document.querySelectorAll(".option");

function updateQuestion() {
    questionNumber.textContent = `CÂU HỎI ${currentQuestionIndex + 1}/${questions.length}`;
    questionText.textContent = questions[currentQuestionIndex];

    prevBtn.disabled = currentQuestionIndex === 0;

    // Kiểm tra nếu câu hỏi đã được trả lời thì hiện "Tiếp theo", ngược lại ẩn đi
    nextBtn.style.display = answeredQuestions[currentQuestionIndex] && currentQuestionIndex < questions.length - 1 ? "inline-block" : "none";

    // Nếu là câu hỏi cuối thì hiện "Hoàn thành", ẩn "Tiếp theo"
    if (currentQuestionIndex === questions.length - 1) {
        finishBtn.style.display = answeredQuestions[currentQuestionIndex] ? "inline-block" : "none";
        nextBtn.style.display = "none";
    } else {
        finishBtn.style.display = "none";
    }

    // Reset trạng thái nút đáp án
    optionButtons.forEach(button => {
        button.classList.remove("selected");
    });

    // Đánh dấu lựa chọn trước đó nếu đã chọn
    if (answeredQuestions[currentQuestionIndex]) {
        let selectedScore = scores[currentQuestionIndex];
        optionButtons.forEach(button => {
            if ((selectedScore === 1 && button.textContent === "Có") ||
                (selectedScore === 0.5 && button.textContent === "Không rõ về vấn đề này") ||
                (selectedScore === 0 && button.textContent === "Không")) {
                button.classList.add("selected");
            }
        });
    }
}

function handleOptionClick(event) {
    if (currentQuestionIndex >= questions.length) return;

    // Xóa trạng thái chọn cũ
    optionButtons.forEach(button => button.classList.remove("selected"));
    event.target.classList.add("selected");

    const selectedOption = event.target.textContent;
    let score = selectedOption === "Có" ? 1 : selectedOption === "Không rõ về vấn đề này" ? 0.5 : 0;

    // Cập nhật điểm
    totalScore -= scores[currentQuestionIndex];
    scores[currentQuestionIndex] = score;
    totalScore += score;

    // Đánh dấu câu hỏi đã được trả lời
    answeredQuestions[currentQuestionIndex] = true;

    console.log(`Điểm sau câu hỏi ${currentQuestionIndex + 1}: ${score}`);
    console.log(`Tổng điểm hiện tại: ${totalScore}`);

    // Nếu chưa phải câu cuối, tự động chuyển sang câu hỏi tiếp theo
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    } else {
        finishBtn.style.display = "inline-block";
    }
}

function handlePrevClick() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
}

function handleNextClick() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
}

function handleFinishClick() {
    localStorage.setItem("score", totalScore.toFixed(1));
    window.location.href = `/score?score=${totalScore.toFixed(1)}`;
}

// Gán sự kiện cho các nút
prevBtn.addEventListener("click", handlePrevClick);
nextBtn.addEventListener("click", handleNextClick);
finishBtn.addEventListener("click", handleFinishClick);
optionButtons.forEach(button => button.addEventListener("click", handleOptionClick));

// Cập nhật giao diện lần đầu
updateQuestion();
