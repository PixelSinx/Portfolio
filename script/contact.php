<!--php script that sends a completed contact for to the recipients email inbox
-->
<?php $name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "1bholmer@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Email sent, Thank You!";

if( isset( $_POST['message'])) {
    header( 'Location: http://brodyholmer.com/contact.html#success');
    exit();
}
?>
