<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Получаем данные из формы
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Дополнительные действия для регистрации пользователя
    // ...

    // Выводим сообщение об успешной регистрации
    echo 'Регистрация прошла успешно!';
}
?>