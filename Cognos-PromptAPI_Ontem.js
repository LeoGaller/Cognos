<script>
    //Capturing the actual report
    var ocr = cognos.Report.getReport("_THIS_");

    //Creating the yesterday
   function Ontem() {
        var newHost = new Date();

        var dtOntem = new Date(dtToday.getFullYear(), dtToday.getMonth(), dtToday.getDate()-1);

        var strOntem = [dtOntem.getUTCFullYear(), dtOntem.getMonth() + 1,
            dtOntem.getDate()
        ].join("-");

        return strOntem;
    }
    //End yesterday

    //function that commands run because the selections are made
    function sendFinishRequest() {
       ocr.sendRequest(cognos.Report.Action.FINISH);
    }

    //Setting the first day
    function setPromptDate(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : Ontem()}]);

    }
    setPromptDate('PDate');
    setTimeout(function(){ sendFinishRequest() }, 500);
</script>
