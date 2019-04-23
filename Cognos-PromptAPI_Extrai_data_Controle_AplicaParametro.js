<script>
    //Capturing the actual report
    var ocr = cognos.Report.getReport("_THIS_");
	
	// Capturing the information at the avulso
	function getDateCognos() {
		var c = document.getElementById('getMe').children[0].innerHTML;
    
        return c;
}

	function getDateCognos2() {
		var c = document.getElementById('getMe2').children[0].innerHTML;
    
        return c;
}

    //function that commands run because the selections are made
    function sendFinishRequest() {
       ocr.sendRequest(cognos.Report.Action.FINISH);
    }

    //Setting the first day
    function setPromptDate1(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : getDateCognos()}]);

    }
    
	function setPromptDate2(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : getDateCognos2()}]);

    }
	
    setPromptDate1('PDateCognos');
    setPromptDate2('PDateCognos2');
	
	
    setTimeout(function(){ sendFinishRequest() }, 1000);

</script>

<span id="getMe">

</span>

<span id="getMe2">

</span>