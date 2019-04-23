<script>
    //Capturing the actual report
    var ocr = cognos.Report.getReport("_THIS_");

    //Creating the first day
    function firstOfMonth() {
        var dtToday = new Date();

        var dtFirstOfMonth = new Date(dtToday.getFullYear(), dtToday.getMonth()-1, 1);

        var strFirstOfMonth = [dtFirstOfMonth.getUTCFullYear(), dtFirstOfMonth.getMonth() + 1,
            dtFirstOfMonth.getDate()
        ].join("-");

        return strFirstOfMonth;
    }
    //End first of month

    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    //Creating the last day
    function lastOfMonth() {
        var dtToday = new Date();

        var dtLastOfMonth = new Date(date.getFullYear(), date.getMonth()+1, 1);

        var strLastOfMonth = [dtLastOfMonth.getUTCFullYear(), dtLastOfMonth.getMonth() + 1,dtLastOfMonth.getDate()].join("-");

        return strLastOfMonth;
    }
    //End last of month

    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    //function that commands run because the selections are made
    function sendFinishRequest() {
       ocr.sendRequest(cognos.Report.Action.FINISH);
    }

    //Setting the first day
    function setPromptFirstDate(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : firstOfMonth()}]);

    }

    //Setting the last day
    function setPromptP(promptName) {

        var oP = ocr.prompt.getControlByName(promptName);
        oP.setValues([{'use' : lastOfMonth()}]);

    }
    setPromptFirstDate('PDateFrom');
    //setPromptLastDate('PDateTo');
	//it is always necessary the use of the setTimeout function because of the 
    setTimeout(function(){ sendFinishRequest() }, 500);
</script>
