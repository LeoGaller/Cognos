<script>
    //Capturing the actual report
    var ocr = cognos.Report.getReport("_THIS_");

    //Returning the host
   function settingPeriodo() {
		return 'IISP105';
    }
    //End 

    //function that commands run because the selections are made
    function sendFinishRequest() {
       ocr.sendRequest(cognos.Report.Action.FINISH);
    }

    //Setting the first day
    function setPromptHost(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : settingPeriodo()}]);

    }
    setPromptDate('PHost');
    setTimeout(function(){ sendFinishRequest() }, 200);
</script>
