function goToShareEmail() {
    window.location.href = 'shareEmail.html';
}
function shareOnFacebook() {
        const score = <%= score %>;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=https://testingweb-iyxq.onrender.com/score?score=${score}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}
function copyResultLink() {
    const resultLink = "https://testingweb-iyxq.onrender.com/score?score=${score}";
    navigator.clipboard.writeText(resultLink).then(() => {
        alert("Đường dẫn đã được sao chép thành công: " + resultLink);
    }).catch(err => {
        alert("Sao chép thất bại. Vui lòng thử lại.");
        console.error("Error copying link: ", err);
    });
}
