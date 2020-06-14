<?php
// получаем файлы по определенному голосованию
$id =  (int) $_GET[id];
$vote = (int) $_GET[vote];

if (file_exists("$id.dat")) {

$ip= $_SERVER['REMOTE_ADDR'];
$ip_file = file_get_contents("ip$id.dat");
$ip_abbr = explode(",", $ip_file);

$data = file("$id.dat");

// если это не просто просмотр результатов
if ($vote) {

foreach($ip_abbr as $value)
if ($ip == $value) {echo "<p><b><font color=red> Вы уже голосовали! </font></b></p>";
exit;
}
// выводим благодарность
echo "<p><b><font color=green> Спасибо! </font></b><br /><i>*Показаны результаты до Вашего голосования:</i><p>";
}

// выводим заголовок голосования - 1я строка файла
echo "<b>$data[0]</b><p>";

// печатаем список ответов и результатов - остальные строки
for ($i=1;$i<count($data);$i++) {
  $votes = explode("~", $data[$i]); // значение~ответ
  echo "$votes[1]: <b>$votes[0]</b><br>";
}
echo "<br>Всего проголосовало: <b>".(count($ip_abbr)-1)."</b>";

// если это не просмотр результатов, а голосование,
// производим необходимые действия для учета голоса
if ($vote) {
  $f = fopen("$id.dat","w");
  flock($f,LOCK_EX);
  fputs($f, "$data[0]");
  for ($i=1;$i<count($data);$i++) {
    $votes = explode("~", $data[$i]);
    if ($i==$vote) $votes[0]++;
    fputs($f,"$votes[0]~$votes[1]");
	fflush($f);
flock($f,LOCK_UN);
  }
  fclose($f);
  
  $ip_adr = fopen("ip$id.dat","a++");
	flock($ip_adr,LOCK_EX);
		fputs($ip_adr, "$ip".",");
		fflush($ip_adr);
	flock($ip_adr,LOCK_UN);
fclose($ip_adr);
  }

  } else {
     echo "Такого голосования не существует.";
	exit;
}

?>