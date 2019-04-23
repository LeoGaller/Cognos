<script>

        var ocr = cognos.Report.getReport("_THIS_");

        function sendPRMT_Request(eAction) {
            ocr.sendRequest(eAction);
        }

        function sendFinishRequest() {
            sendPRMT_Request(cognos.Report.Action.FINISH);
        }

        function setPromptValue(promptName) {

            var oP = ocr.prompt.getControlByName(promptName);
			var oValues = null;
			var valuePrompt = oP.getValues()[0]['use'];
			
			if(valuePrompt == 'v1'){
				oValues = [{'use': 'v2','display': 'v2'}];
			}else if(valuePrompt == 'v2'){
				oValues = [{'use': 'v3','display': 'v3'}];
			}else if(valuePrompt == 'v3'){
				oValues = [{'use': 'v4','display': 'v4'}];
			}else if(valuePrompt == 'v4'){
				oValues = [{'use': 'v5','display': 'v5'}]; 
			else {
				oValues = [{'use': 'v1','display': 'v1'}];
			}			
			
            oP.setValues(oValues);
        }
		
        // This is the timeinterval
		this.setTimeout(function() {
            setPromptValue ('VisaoAba'); sendFinishRequest();
        },30000);

</script>