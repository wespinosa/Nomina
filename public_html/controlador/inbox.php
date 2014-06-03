<?php

$mbox = imap_open ("https://mail.google.com/mail", "wespinosa86@gmail.com", "Walejandro86");

$imap_obj = imap_check($mbox);
$cabecera = imap_headerinfo($mbox, $imap_obj);
$from = $cabecera->from;
$subject = $cabecera->subject;
print_r($imap_obj);

?>