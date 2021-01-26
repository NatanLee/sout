<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$company = $_POST['user_company'];
$email = $_POST['user_email'];
$volume = $_POST['user_volume'];
$message = $_POST['user_message'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'usmolin@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Urik271983='; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('usmolin@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('soyt@himanalit.ru');     // Кому будет уходить письмо 
// $mail->addAddress('usmolin@himanalit.ru');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
$mail->addAttachment($_FILES['upload1']['tmp_name'], $_FILES['upload1']['name']);
$mail->addAttachment($_FILES['upload2']['tmp_name'], $_FILES['upload2']['name']);
   // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на СОУТ';
$mail->Body    = 'Клиент, который представился как "' .$name . '" оставил заявку, его телефон ' .$phone. '<br>Название компании - ' .$company. '<br>Почта клиента - ' .$email. '<br>Требуемое колличество рабочих мест - ' .$volume. '<br>Сообщение от Клиента:<br>' .$message;

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>