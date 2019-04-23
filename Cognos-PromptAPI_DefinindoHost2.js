<script>
    
    var ocr = cognos.Report.getReport("_THIS_");

  
   function setHost() {
		var host = "IISP105";
		return host.trim();
    }
    

    function sendFinishRequest() {
       ocr.sendRequest(cognos.Report.Action.FINISH);
    }

    function setPromptHost(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : setHost()}]);

    }
    setPromptHost('PHost');
	
    setTimeout(function(){ sendFinishRequest() }, 500);
</script>
