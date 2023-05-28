const balanceValue = document.getElementById('balance-value');
const refreshButton = document.getElementById('refresh-button');

// Функция для получения баланса пользователя из сервера
const fetchUserBalance = () => {
  // Ваш код для отправки запроса на сервер, чтобы получить баланс пользователя
  // Пример:
  // fetch('get_balance.php')
  //   .then(response => response.json())
  //   .then(data => {
  //     const userBalance = data.balance;
  //     balanceValue.innerText = userBalance;
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

  // Временно задаем случайное значение баланса для примера
  const userBalance = parseInt(localStorage.getItem('snakeBalance')) || 0;
  balanceValue.innerText = userBalance;
};

// Обновляем баланс пользователя при загрузке страницы
window.addEventListener('load', fetchUserBalance);

// Обновляем баланс пользователя при нажатии на кнопку Refresh
refreshButton.addEventListener('click', () => {
  // Ваш код для обнуления общего баланса и обновления на сервере
  // Пример:
  // fetch('reset_balance.php')
  //   .then(response => response.json())
  //   .then(data => {
  //     const userBalance = data.balance;
  //     balanceValue.innerText = userBalance;
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });

  // Временно обнуляем общий баланс для примера
  localStorage.setItem('snakeBalance', 0);
  balanceValue.innerText = 0;
});
