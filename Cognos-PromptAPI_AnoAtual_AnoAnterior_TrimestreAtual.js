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
   //End last year
   
   //Actual Semester Function Start
   
   function trimestreAtual(){
        var dtToday = new Date();
				
        if( dtToday.getMonth() >= 0 && dtToday.getMonth() < 3 ){
        	return 1
    		} else if(dtToday.getMonth() >= 3 && dtToday.getMonth() < 6){
        	return 2        
        } else if(dtToday.getMonth() >= 6 && dtToday.getMonth() < 9){
        	return 3        
        }else if(dtToday.getMonth() >= 9){
        	return 4        
        }      
    }
   
   //Actual Semester Function end
		
    //function that commands run because the selections are made
    function sendFinishRequest() {
       ocr.sendRequest(cognos.Report.Action.FINISH);
    }
	
	//setting the current year
	function setPromptAno(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : anoAtual()}]);

    } //end of current year
	
	//Setting the last year
    function setPromptAnoAnt(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : anoAnterior()}]);

    }//end of last year
	
	//Setting the actual semester
    function setPromptTrimestre(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : trimestreAtual()}]);

    }//end of actual semester
	
	//setPromptAno('PAno');
	//setPromptAnoAnt('PAnoAnt');
	
    setTimeout(function(){ sendFinishRequest() }, 300);
</script>


//<script>setPromptAno('PAno');</script>

//<script>setPromptAnoAnt('PAnoAnt');</script>

//<script> setPromptTrimestre('PTrimestre'); </script>

//<script>setPromptTrimestre('PTrimestreAnt');</script>