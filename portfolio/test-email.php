<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
$to = "goooleon@gmail.com";
$subject ="Movie request";
$email = "$REQUEST ['email'];
$message = "$REQUEST['message'];
$headers = "From: $email";
$sent = mail($to,$subject,$message, $headers);
if($sent)
{print("thanks for contact");}
else
{print"error 404 ";}
?>
</body>
</html>