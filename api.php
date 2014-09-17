<?php

$endpoint = "http://api.nytimes.com/svc/mostpopular/v2/mostshared/all-sections/1.json?api-key=6dbc5b9ea9ecb3e43c4e5d1de0080368%3A3%3A69819941";

//  Initiate curl
$ch = curl_init();

// Set The Response Format to Json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: application/json'));

// Disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

// Will return the response, if false it print the response
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Set the url
curl_setopt($ch, CURLOPT_URL,$endpoint);

// Execute
$result = curl_exec($ch);

// Closing
curl_close($ch);

echo $result;
?>
