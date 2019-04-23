<script>
    //Capturing the actual report
    var ocr = cognos.Report.getReport("_THIS_");

    //Creating the first day
    function firstOfMonth() {
        var dtToday = new Date();

        var dtFirstOfMonth = new Date(dtToday.getFullYear(), dtToday.getMonth(), 1);

        var strFirstOfMonth = [dtFirstOfMonth.getUTCFullYear(), dtFirstOfMonth.getMonth() + 1,
            dtFirstOfMonth.getDate()
        ].join("-");

        return strFirstOfMonth;
    }
    //End first of month

    //*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

    //Creating the last day
    function Ontem() {
        var dtToday = new Date();

        var dtOntem = new Date(dtToday.getFullYear(), dtToday.getMonth(), dtToday.getDate()-1);

        var strOntem = [dtOntem.getUTCFullYear(), dtOntem.getMonth() + 1,
            dtOntem.getDate()
        ].join("-");

        return strOntem;
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
    function setPromptLastDate(promptName) {

        var oP = ocr.prompt.getControlByName(promptName);
        oP.setValues([{'use' : Ontem()}]);

    }
    setPromptFirstDate('PDateFrom');
    //setPromptLastDate('PDateTo');
	//it is always necessary the use of the setTimeout function because of the 
    setTimeout(function(){ sendFinishRequest() }, 500);
</script>
