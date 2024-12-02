  const score = parseFloat(localStorage.getItem("score"));
  console.log("Điểm lấy từ localStorage:", score);

  if (!isNaN(score)) {
      const levels = [
          { level: 1, name: "Sơ khai", range: [0, 2], icon: "https://assets.filum.ai/assessments/voc-level1.svg", description: "Nguồn dữ liệu chính về phản hồi khách hàng đến từ các khảo sát theo năm hoặc không đều đặn. Các cuộc khảo sát được thực hiện độc lập bởi các phòng ban khác nhau mà không có sự chia sẻ kết quả và không lưu trữ tập trung. Hiếm khi thu thập phản hồi gián tiếp (từ bản ghi cuộc gọi, tin nhắn, bình luận v.v) hoặc phản hồi được suy luận từ hành vi, tần suất hay thói quen mua hàng của khách. Các quyết định từ đó kém hiệu quả khi dựa nhiều vào phản hồi đã cũ và không đáng tin cậy.",},
          { level: 2, name: "Thành lập", range: [2, 4], icon: "https://assets.filum.ai/assessments/voc-level2.svg", description: "Có đội nhóm liên phòng ban để đánh giá và điều phối việc thu thập phản hồi, phân tích nguyên nhân gốc rễ và thông báo kết quả đến các đại diện. Bước đầu quản trị năng lực Lắng nghe khách hàng để giải quyết vấn đề phân mảnh và thiếu phối hợp, tuy nhiên vấn đề thực thi còn yếu. Băt đầu có các cuộc khảo sát tại điểm chạm nhưng chưa phải tất cả các điểm chạm quan trọng.",},
          { level: 3, name: "Vận hành", range: [4, 6], icon: "https://assets.filum.ai/assessments/voc-level3.svg", description: "Quản trị năng lực Lắng nghe khách hàng đã hình thành và đem lại hiệu quả. Dữ liệu phản hồi trực tiếp từ khách hàng được kết hợp với dữ liệu từ các nguồn khác (Ví dụ: từ điểm chạm web, cửa hàng, v.v.) và phản hồi gián tiếp (Ví dụ: bản ghi cuộc gọi, tin nhắn, bình luận mạng xã hội v.v). Quy trình đóng vòng phản hồi giúp xác định và giải quyết các khiếu nại hoặc vấn đề khách hàng gặp phải. Phản hồi được thu thập trong nhiều giai đoạn của hành trình khách hàng.",},
          { level: 4, name: "Tối ưu", range: [6, 8], icon: "https://assets.filum.ai/assessments/voc-level4.svg", description: "Năng lực Lắng nghe khách hàng hoạt động đầy đủ trên một nền tảng duy nhất với quy định về trách nhiệm và thực thi rõ ràng. Các quy trình làm việc, báo cáo và phân tích được thông báo đầy đủ và tường minh, cung cấp dữ liệu thời gian thực, phù hợp cho từng nhân viên và phòng ban. Thông tin về phản hồi được tích hợp vào các ứng dụng quan trọng và phổ biến như CRM.",},
          { level: 5, name: "Thấm nhuần", range: [8, 10], icon: "https://assets.filum.ai/assessments/voc-level5.svg", description: "Hiệu quả của Lắng nghe khách hàng được định lượng bằng việc kết nối các hành động đề xuất với kết quả thu được lên các chỉ số liên quan đến vận hành và khách hàng. Có cơ chế liên tục để thu thập ý kiến phản hồi từ nhân viên nhằm cải thiện trải nghiệm khách hàng.",}
      ];

      const result = levels.find(level => score >= level.range[0] && score <= level.range[1]);

      if (result) {
        document.getElementById("score").textContent = `${score}`;
          document.getElementById("level").textContent = `${result.name}`;
          document.getElementById("result-text").textContent = result.description;
          document.getElementById("result-icon").src = result.icon;
          document.getElementById("result-link").href = result.ctaUrl || "#";
      }
  }