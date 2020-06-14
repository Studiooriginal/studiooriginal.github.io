<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Голосование с выводом во всплывающем окне</title>
<script language=JavaScript><!--
function pop_voice() {pop=window.open('','voice','width=250,height=350,left=250,top=100'); pop.focus();}
//-->
</script>
</head>
<body>

<form action="vote.php" method="get" target='voice'>
<input type="Hidden" name="id" value="2">
<p><b>Оцените сайт:</b></p>
<input type="Radio" name="vote" value="1" checked>Отлично<br>
<input type="Radio" name="vote" value="2">Хорошо<br>
<input type="Radio" name="vote" value="3">Удовлет.<br>
<input type="Radio" name="vote" value="4">Плохо<br>
<input type="Radio" name="vote" value="5">Очень плохо<br>
<input type="Submit" value=" Голосовать" style="margin-top:10px;"  onClick='pop_voice();' >
</form>

<p><a href='vote.php?id=2' onClick='pop_voice();' target='voice'><button>Результаты</button></a></p>

</body>
</html>

