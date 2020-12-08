<?php
$serverName = "localhost";
$username = "root";
$password = "";
$databaseName = "pune_metro_rail";
$conn = mysqli_connect($serverName, $username, $password,$databaseName);
$query = "SELECT * FROM station";

if(mysqli_query($conn,$query)){
    
}
else {
    echo "Error"
}