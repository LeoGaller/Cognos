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
   
   function semestreAtual() {
        var dtToday = new Date();
				
        if(dtToday.getMonth() >= 0){
        	if(dtToday.getMonth() <= 5){
          		return 1;
          
          } else{
          		return 2;
          }
                
        } else {
        	return 2;
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
    function setPromptSemestre(promptName) {

        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : semestreAtual()}]);

    }//end of actual semester
	
	//setPromptAno('PAno');
	//setPromptAnoAnt('PAnoAnt');
	
    setTimeout(function(){ sendFinishRequest() }, 300);
</script>


//<script>setPromptAno('PAno');</script>

//<script>setPromptAnoAnt('PAnoAnt');</script>

//<script> setPromptSemestre('PSemestre'); </script>

//<script>setPromptSemestre('PSemestreAnt');</script>