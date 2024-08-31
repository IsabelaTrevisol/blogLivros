document.addEventListener("DOMContentLoaded", function () {
    const reviewForm = document.getElementById("reviewForm");

    // Listener para o evento de envio do formulário
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário

        // Coletando os valores dos campos do formulário
        const bookTitle = document.getElementById("bookTitle").value;
        const author = document.getElementById("author").value;
        const reviewText = document.getElementById("reviewText").value;
        const reviewerName = document.getElementById("reviewerName").value;

        // Criando um objeto de review
        const newReview = {
            bookTitle,
            author,
            reviewText,
            reviewerName,
        };

        // Recuperando os reviews existentes no localStorage
        let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        // Adicionando o novo review à lista de reviews
        reviews.push(newReview);

        // Salvando a lista atualizada de reviews no localStorage
        localStorage.setItem("reviews", JSON.stringify(reviews));

        // Limpando o formulário após a submissão
        reviewForm.reset();

        alert("Review enviado com sucesso!");
    });
});