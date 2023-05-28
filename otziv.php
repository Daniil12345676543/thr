<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
<?php
session_start();

// Проверяем, были ли отправлены данные с формы отзыва
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Получаем данные из формы
  $reviewContent = $_POST['review'];

  // Проверяем, авторизован ли пользователь (можно добавить дополнительную проверку, например, наличие сессии)
  $username = isset($_SESSION['username']) ? $_SESSION['username'] : 'Аноним';

  // Сохраняем отзыв в базу данных или файл
  // Ваш код сохранения отзыва

  // Возвращаем обновленные данные для обновления страницы
  $response = array(
    'status' => 'success',
    'message' => 'Отзыв успешно отправлен',
    'overallReview' => 'Общий отзыв: 5.0', // Пример общего отзыва
    'reviews' => array(
      array(
        'username' => $username,
        'content' => $reviewContent
      )
    )
  );

  echo json_encode($response);
}
