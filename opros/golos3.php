<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Голосование с выводом в iframe</title>
</head>
<body>

<form action="vote.php" method="get" target="hero">
<input type="Hidden" name="id" value="3">
<p><b>Оцените сайт:</b></p>
<input type="Radio" name="vote" value="1" checked>Отлично<br>
<input type="Radio" name="vote" value="2">Хорошо<br>
<input type="Radio" name="vote" value="3">Удовлет.<br>
<input type="Radio" name="vote" value="4">Плохо<br>
<input type="Radio" name="vote" value="5">Очень плохо<br>
<input type="Submit" value=" Голосовать" style="margin-top:10px;">
</form>

<p><a href='vote.php?id=3' target="hero"><button>Результаты</button></a></p>

<iframe name="hero"  src="vote.php?id=3" width="150" height="200" frameborder="0" style="border: 0px solid black" scrolling="auto">
    Ваш браузер не поддерживает плавающие фреймы!
</iframe>
<p>Lorem ipsum</p>

</body>
</html>

