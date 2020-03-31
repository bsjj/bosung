$(document).ready(function(){
    var myFullpage = new fullpage('#fullpage', {
		sectionsColor: ['#f9f9f9','#f9f9f9','#f9f9f9','#f9f9f9','#f9f9f9','#f9f9f9','#e9e9e9'],
        navigation:true,
        navigationPosition: 'left', 
        navigationTooltips: ['Main', 'Works','Works','Works','Works','Works','Copyright'],
        anchors:['firstPage', 'secondPage','thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
	});
});