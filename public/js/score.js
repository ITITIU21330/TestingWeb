const needle = document.querySelector('.needle');

function updateNeedleAnimated(targetScore) {
  let currentScore = 0;
  let maxScore = 10;
  let duration = 2000;
  let startTime = null;
  const minAngle = -110;
  const maxAngle = 110;

  function animate(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      currentScore = targetScore * progress;
      let angle = minAngle + (currentScore / maxScore) * (maxAngle - minAngle); 

      needle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; 

      if (progress < 1) {
          requestAnimationFrame(animate);
      }
  }

  requestAnimationFrame(animate);
}

const score = parseFloat(localStorage.getItem("score"));
console.log("Điểm lấy từ localStorage:", score);

if (!isNaN(score)) {
    const levels = [
      { 
        level: 1, 
        name: "Sơ khai", 
        range: [0, 2], 
        icon: "https://assets.filum.ai/assessments/voc-level1.svg", 
        description: "Nguồn dữ liệu chính về phản hồi khách hàng đến từ các khảo sát theo năm hoặc không đều đặn. Các cuộc khảo sát được thực hiện độc lập bởi các phòng ban khác nhau mà không có sự chia sẻ kết quả và không lưu trữ tập trung. Hiếm khi thu thập phản hồi gián tiếp (từ bản ghi cuộc gọi, tin nhắn, bình luận v.v) hoặc phản hồi được suy luận từ hành vi, tần suất hay thói quen mua hàng của khách. Các quyết định từ đó kém hiệu quả khi dựa nhiều vào phản hồi đã cũ và không đáng tin cậy.",
        key_actions: [
          "Hình thành một đội nhóm liên phòng ban để quản lý quy trình thu thập và phân tích phản hồi khách hàng.",
          "Định kỳ tổ chức phỏng vấn khách hàng để thu thập thông tin chi tiết.",
          "Xây dựng cơ sở dữ liệu tập trung lưu trữ phản hồi khách hàng.",
          "Xác định và thực hiện phân tích nguyên nhân gốc rễ từ phản hồi khách hàng.",
          "Tạo cơ chế thông báo kết quả phản hồi cho các đại diện phòng ban liên quan."
        ],
        key_actions_cta: {
          text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
          url: "https://filum.ai/products/dynamic-feedback"
        }
      },
      { 
        level: 2, 
        name: "Thành lập", 
        range: [2, 4], 
        icon: "https://assets.filum.ai/assessments/voc-level2.svg", 
        description: "Có đội nhóm liên phòng ban để đánh giá và điều phối việc thu thập phản hồi, phân tích nguyên nhân gốc rễ và thông báo kết quả đến các đại diện. Bước đầu quản trị năng lực Lắng nghe khách hàng để giải quyết vấn đề phân mảnh và thiếu phối hợp, tuy nhiên vấn đề thực thi còn yếu. Băt đầu có các cuộc khảo sát tại điểm chạm nhưng chưa phải tất cả các điểm chạm quan trọng.",
        key_actions: [
          "Xây dựng một hệ thống thu thập phản hồi và lắng nghe khách hàng hiệu quả.",
          "Đảm bảo tích hợp dữ liệu phản hồi trực tiếp và gián tiếp từ nhiều nguồn khác nhau.",
          "Thực hiện quy trình đóng vòng phản hồi để xử lý các khiếu nại và vấn đề của khách hàng.",
          "Mở rộng việc thực hiện khảo sát tại tất cả các điểm chạm quan trọng.",
          "Phát triển các tiêu chí và chỉ số để đo lường hiệu quả của việc Lắng nghe khách hàng."
        ],
        key_actions_cta: {
          text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
          url: "https://filum.ai/products/dynamic-feedback"
        }
      },
      { 
        level: 3, 
        name: "Vận hành", 
        range: [4, 6], 
        icon: "https://assets.filum.ai/assessments/voc-level3.svg", 
        description: "Quản trị năng lực Lắng nghe khách hàng đã hình thành và đem lại hiệu quả. Dữ liệu phản hồi trực tiếp từ khách hàng được kết hợp với dữ liệu từ các nguồn khác (Ví dụ: từ điểm chạm web, cửa hàng, v.v.) và phản hồi gián tiếp (Ví dụ: bản ghi cuộc gọi, tin nhắn, bình luận mạng xã hội v.v). Quy trình đóng vòng phản hồi giúp xác định và giải quyết các khiếu nại hoặc vấn đề khách hàng gặp phải. Phản hồi được thu thập trong nhiều giai đoạn của hành trình khách hàng.",
        key_actions: [
          "Xây dựng năng lực Lắng nghe khách hàng tập trung trên một nền tảng.",
          "Ban hành các quy trình và biểu mẫu về Lắng nghe khách hàng cho toàn công ty.",
          "Tạo báo cáo và bảng điều khiển dữ liệu phản hồi theo thời gian thực.",
          "Tích hợp phản hồi khách hàng vào các ứng dụng quan trọng như CRM."
        ],
        key_actions_cta: {
          text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
          url: "https://filum.ai/products/dynamic-feedback"
        }
      },
      { 
        level: 4, 
        name: "Tối ưu", 
        range: [6, 8], 
        icon: "https://assets.filum.ai/assessments/voc-level4.svg", 
        description: "Năng lực Lắng nghe khách hàng hoạt động đầy đủ trên một nền tảng duy nhất với quy định về trách nhiệm và thực thi rõ ràng. Các quy trình làm việc, báo cáo và phân tích được thông báo đầy đủ và tường minh, cung cấp dữ liệu thời gian thực, phù hợp cho từng nhân viên và phòng ban. Thông tin về phản hồi được tích hợp vào các ứng dụng quan trọng và phổ biến như CRM.",
        key_actions: [
          "Ứng dụng công nghệ tự động dựa trên dữ liệu lớn và AI để phân tích phản hồi.",
          "Định lượng giá trị của Lắng nghe khách hàng qua các chỉ số vận hành.",
          "Tổ chức các hoạt động khuyến khích nhân viên tham gia cải thiện trải nghiệm khách hàng.",
          "Tích hợp sâu hơn các phản hồi khách hàng vào hệ thống CRM và các ứng dụng khác."
        ],
        key_actions_cta: {
          text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
          url: "https://filum.ai/products/dynamic-feedback"
        }
      },
      { 
        level: 5, 
        name: "Thấm nhuần", 
        range: [8, 10], 
        icon: "https://assets.filum.ai/assessments/voc-level5.svg", 
        description: "Hiệu quả của Lắng nghe khách hàng được định lượng bằng việc kết nối các hành động đề xuất với kết quả thu được lên các chỉ số liên quan đến vận hành và khách hàng. Có cơ chế liên tục để thu thập ý kiến phản hồi từ nhân viên nhằm cải thiện trải nghiệm khách hàng.",
        key_actions: [
          "Duy trì một hệ thống Lắng nghe khách hàng đồng nhất và liên tục.",
          "Đầu tư vào công nghệ và công cụ hiện đại như dữ liệu lớn và AI.",
          "Tạo dựng văn hóa doanh nghiệp tập trung vào cải tiến trải nghiệm khách hàng.",
          "Phát triển các chương trình đào tạo nâng cao nhận thức về năng lực Lắng nghe khách hàng."
        ],
        key_actions_cta: {
          text: "Mô hình xử lý phản hồi cho mọi quy mô Doanh Nghiệp",
          url: "https://filum.ai/products/dynamic-feedback"
        }
      }
    ];

    const result = levels.find(level => score >= level.range[0] && score <= level.range[1]);

    if (result) {
        document.getElementById("score").textContent = `${score}`;
        document.getElementById("level").textContent = `${result.name}`;
        document.getElementById("result-text").textContent = result.description;
        document.getElementById("result-icon").src = result.icon;

        const actionsContainer = document.getElementById("actions");
        actionsContainer.innerHTML = "";
        result.key_actions.forEach(action => {
            const li = document.createElement("li");
            li.textContent = action;
            actionsContainer.appendChild(li);
        });

        const ctaLink = document.getElementById("result-link");
        ctaLink.textContent = result.key_actions_cta.text;
        ctaLink.href = result.key_actions_cta.url;

        updateNeedleAnimated(score);
    } else {
        console.log("Score không hợp lệ hoặc không nằm trong mức đánh giá.");
    }
} else {
    console.log("Điểm không hợp lệ.");
}

fetch(`/score?score=${score}`)
.then(response => response.json())
.then(data => {
    document.getElementById('score').textContent = data.score;
    document.getElementById('result-icon').src = data.imageUrl;
    // Cập nhật các phần khác nếu cần
})
.catch(error => console.error('Error:', error));

function goToSharePage() {
    window.location.href = 'share.html';
}
