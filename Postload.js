if (typeof (SiebelAppFacade.Postload) == "undefined") {
    Namespace('SiebelAppFacade.Postload');

    (function(){
        SiebelApp.EventManager.addListner( "postload", OnPostload, this );
        function OnPostload( ){
            try{
				//add class in View Tabs
				$('#s_sctrl_tabScreen').find('li').each(function(){
					$(this).addClass('askmesiebel-tile');
				});
				//add class in Contact Tiles
				$('.siebui-tile').each(function(){
					$(this).addClass('askmesiebel-tile');
				});
				
                console.log(" post load Loaded");
				
				setTimeout(function(){
					
					// Find all tile elements
					var tileElements = document.getElementsByClassName( 'askmesiebel-tile' );console.log(tileElements);
					var i;
					console.log(tileElements.length);

					// Apply tile functions 
					for ( i = 0; i < tileElements.length; i++ ) {

						Tile( tileElements[i] );

					}
				},2000);

            }
            catch(error)
            {
                //No-Op
            }
        }
    }());
}