<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Голосование с выводом в новом окне</title>
</head>
<body>

<form action="vote.php" method="get" target='_blank'>
<input type="Hidden" name="id" value="1">
<p><b>Оцените сайт:</b></p>
<input type="Radio" name="vote" value="1" checked>Отлично<br>
<input type="Radio" name="vote" value="2">Хорошо<br>
<input type="Radio" name="vote" value="3">Удовлет.<br>
<input type="Radio" name="vote" value="4">Плохо<br>
<input type="Radio" name="vote" value="5">Очень плохо<br>
<input type="Submit" value=" Голосовать" style="margin-top:10px;">
</form>

<form action="vote.php" method="get" target='_blank'>
<input type="Hidden" name="id" value="1">
<p><b>Оцените сайт:</b></p>
<input type="Radio" name="vote" value="1" checked>Отлично<br>

<input type="Submit" value=" Голосовать" style="margin-top:10px;">
</form>

<form action="vote.php" method="get" target='_blank'>
<input type="Hidden" name="id" value="1">
<p><b>Оцените сайт:</b></p>
<input type="Radio" name="vote" value="2" checked>Хорошо<br>
<input type="Submit" value=" Голосовать" style="margin-top:10px;">
</form>

<form action="vote.php" method="get" target='_blank'>
<input type="Hidden" name="id" value="1">
<input type="Hidden" name="vote" value="3">
<p><b>Оцените сайт:Удовлет</b></p>
<input type="Submit" value=" Голосовать" style="margin-top:10px;">
</form>


<p><a href='vote.php?id=1' target='_blank'><button>Результаты</button></a></p>

</body>
</html>

