//Capturing the actual report
    var ocr = cognos.Report.getReport("_THIS_");

	
function settingPeriodo(){

	var dtToday = new Date();
	
	var dtTodayYear = dtToday.getFullYear();
	
	var dtMonth = dtToday.getMonth()-1;
		if (dtMonth == 0) {
			var strMonth = 'Jan'
            
    	} else if(dtMonth == 1){
        	var strMonth = 'Fev'
        
        } else if(dtMonth == 2){
        	var strMonth = 'Mar'
        
        } else if(dtMonth == 3){
        	var strMonth = 'Abr'
        
        } else if(dtMonth == 4){
        	var strMonth = 'Mai'
        
        } else if(dtMonth == 5){
        	var strMonth = 'Jun'
        
        } else if(dtMonth == 6){
        	var strMonth = 'Jul'
        
        } else if(dtMonth == 7){
        	var strMonth = 'Ago'
        
        } else if(dtMonth == 8){
        	var strMonth = 'Set'
        
        } else if(dtMonth == 9){
        	var strMonth = 'Out'
        
        } else if(dtMonth == 10){
        	var strMonth = 'Nov'
        
        } else if(dtMonth == 11){
        	var strMonth = 'Dez'
        
        }
	/* Concatenating year and month */
    var periodoAtual = [strMonth,dtTodayYear].join("-");
/*window.alert('Criando o período!');    */
return periodoAtual;
}

function sendFinishRequest() {

       ocr.sendRequest(cognos.Report.Action.FINISH);
	   
    }

//Setting the first day
function setPromptPeriodo(promptName) {
		/*window.alert('Aplicando o valor no prompt');*/
        var oP1 = ocr.prompt.getControlByName(promptName);
        oP1.setValues([{'use' : settingPeriodo()}]);

    }	
setTimeout(function(){ sendFinishRequest() }, 500);