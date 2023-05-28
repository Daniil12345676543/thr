// Функция для обновления отзывов
function updateReviews() {
  // Очищаем контейнер с отзывами
  const reviewsContainer = document.getElementById('reviews');
  reviewsContainer.innerHTML = '';

  // Запрос на сервер для получения списка отзывов
  fetch('get_reviews.php')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Обновляем общий отзыв
      const overallReviewElement = document.getElementById('overallReview');
      overallReviewElement.textContent = data.overallReview;

      // Обновляем список отзывов
      const reviews = data.reviews;
      for (let i = 0; i < reviews.length; i++) {
        const review = reviews[i];
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');
        reviewItem.innerHTML = `<span>${review.username}</span>: <p>${review.content}</p>`;
        reviewsContainer.appendChild(reviewItem);
      }
    });
}

// Обновляем отзывы при загрузке страницы
updateReviews();
