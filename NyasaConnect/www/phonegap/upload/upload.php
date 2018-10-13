<?php
    header('Access-Control-Allow-Origin: *');
    $new_image_name = urldecode($_FILES["file"]["name"]).".jpg";
    move_uploaded_file($_FILES["file"]["tmp_name"], "upload/".$new_image_name);
?>