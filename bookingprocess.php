
<?php

	$fName = $_GET["name"];
	$lName = $_GET["lName"];
	$mNumber = $_GET["mNum"];
	$unitNum = $_GET["uNum"];
	$strNum = $_GET["sNum"];
	$strName = $_GET["sName"];
	$suburb = $_GET["sub"];
	$destSub = $_GET["dSub"];
	$aDate = $_GET["date"];
	$aTime = $_GET["time"];
	$address = $unitNum." ".$strNum." ".$strName." ".$suburb;
	$bookingDate = date("Y-m-d H:i:s");
	$bookingRef = 0;
	$status = 'unassigned';

    //connect to database
    $db = new mysqli("localhost", "root", "", "cabsonline") or die("Unable to connect");
    $query = "SELECT MAX(bookingRef) FROM bookings";
    $queryResult = mysqli_query($db,$query);
    $row = mysqli_fetch_row($queryResult);
    if($row[0] < 1)
	{	
        $bookingRef = 20161;
		
    }
	else
	{
		$bookingRef = $row[0] + 1;
	}
	$query = "INSERT INTO bookings VALUES ('$bookingRef', '$fName', '$lName', '$address', '$mNumber', '$destSub', '$aDate', '$aTime', '$bookingDate', '$status')";
	$queryResult = mysqli_query($db,$query); 
	ECHO ("Thank you! Your booking reference number is: ".$bookingRef. "<br>You will be picked up in front of your provided address at ".$aTime." on ".$aDate);

?>
