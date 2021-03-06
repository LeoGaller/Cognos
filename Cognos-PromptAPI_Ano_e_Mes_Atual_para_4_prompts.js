<script>
    //Capturing the actual report
    var ocr = cognos.Report.getReport("_THIS_");

    //Creating the current year
   function anoAtual() {
        var dtToday = new Date();

        return dtToday.getFullYear();
    }
    //End current year

	//Creating the last year
   function anoAnterior() {
        var dtToday = new Date();

        return dtToday.getFullYear() - 1;
    }
    //End current year
	
	
	 //Creating the current month
   function mesAtual() {
        var dtToday = new Date();
		
		//Passing month names
		if(dtToday.getMonth() == 0){
			return 1
		}else if(dtToday.getMonth() == 1){
			return 2
		}else if(dtToday.getMonth() == 2){
			return 3
		}else if(dtToday.getMonth() == 3){
			return 4
		}else if(dtToday.getMonth() == 4){
			return 5
		}else if(dtToday.getMonth() == 5){
			return 6
		}else if(dtToday.getMonth() == 6){
			return 7
		}else if(dtToday.getMonth() == 7){
			return 8
		}else if(dtToday.getMonth() == 8){
			return 9
		}else if(dtToday.getMonth() == 9){
			return 10
		}else if(dtToday.getMonth() == 10){
			return 11
		}else if(dtToday.getMonth() == 11){
			return 12
		}
        
	}
    //End current month
		
    //function that commands run because the selections are made
    function sendFinishRequest() {
       ocr.sendRequest(cognos.Report.Action.FINISH);
    }

    //Setting the current year
    function setPromptAno(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : anoAtual()}]);

    }
	
	//Setting the last year
    function setPromptAnoAnt(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : anoAnterior()}]);

    }
	
	//setting the current month
	function setPromptMes(promptName){
	
		var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : mesAtual()}]);
	}
	
    setPromptAno('PAno');
	setPromptAnoAnt('PAnoAnt');
	setPromptMes('PMes');
	setPromptMes('PMesAnt');
    setTimeout(function(){ sendFinishRequest() }, 500);
</script>
