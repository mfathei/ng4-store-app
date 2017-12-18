<?php


require_once __DIR__ . "/../vendor/autoload.php";


$app = new \Slim\App();

$app->get('/version', function(){
    echo json_encode(array("version" => "1.0.0"));
});

$app->run();

