
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
	
    onDeviceReady: function() {
        var onSuccess = function(position) {
			
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;


$.ajax({ //ajax weather recuperer donnees avec coord gps
				type: "GET",
				dataType: "json",
				url: "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lng+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr",
				
				success: function(data) {


					var city_name = data.name;
					var general = data.weather[0].main;
					var description = data.weather[0].description;
					var icon = data.weather[0].icon;
					var wind = data.wind.deg;
					var celsiusmin = Math.round(data.main.temp_min - 273.15);
					var celsiusmax = Math.round(data.main.temp_max - 273.15);

				  console.log(city_name);


				  //on concatene la div en une variable
					var weather_now = city_name+'<br>';
					weather_now += '<img src="http://openweathermap.org/img/w/'+icon+'.png"><br>';
					weather_now += description +'<br>';
					weather_now += 'Temp min: '+ celsiusmin + '<br>';
					weather_now += 'Temp max: '+ celsiusmax + '<br>';
					weather_now +=  wind + '<br>';

		
		
				

					$("#nom_ville").html(city_name);
					$("#icone").html('<img src="img/'+icon+'.png"><br>');
					$("#description").html('Type de temps : '+description);
					$("#temp_min").html('Températures : '+celsiusmin+ '/'+celsiusmax+'°C');
					$("#temp_max").html('Force du vent : '+wind);
								  
		
		
                                  
         }, // success
                          
	 }); ///END AJAX WEATHER////

 };//onsuccess geoloc

    // onError Callback receives a PositionError object
   function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
			
		$("#go").click(function(){
		
		var ville = $("#ville").val();
		
			$.ajax({ //ajax weather recuperer donnees avec coord gps
				type: "GET",
				dataType: "json",
				url: "http://api.openweathermap.org/data/2.5/weather?q="+ville+"&appid=c6f7c305685d791568deb77d851e9c3b&lang=fr ",
				
				success: function(data) {


					var city_name = data.name;
					var general = data.weather[0].main;
					var description = data.weather[0].description;
					var icon = data.weather[0].icon;
					var wind = data.wind.deg;
					var celsiusmin = Math.round(data.main.temp_min - 273.15);
					var celsiusmax = Math.round(data.main.temp_max - 273.15);

				  console.log(city_name);


				  //on concatene la div en une variable
					var weather_now = city_name+'<br>';
					weather_now += '<img src="http://openweathermap.org/img/w/'+icon+'.png"><br>';
					weather_now += description +'<br>';
					weather_now += 'Temp min: '+ celsiusmin + '<br>';
					weather_now += 'Temp max: '+ celsiusmax + '<br>';
					weather_now +=  wind + '<br>';

		
		
				

					$("#nom_ville2").html(city_name);
					$("#icone2").html('<img src="img/'+icon+'.png"><br>');
					$("#description2").html('Type de temps : '+description);
					$("#temp_min2").html('Températures : '+celsiusmin+ '/'+celsiusmax+'°C');
					$("#temp_max2").html('Force du vent : '+wind);
								  
		
		
                                  
         }, // success
                          
	 }); ///END AJAX WEATHER////
	
		
	});//click function
		
		
    },//deviceReady

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }//receivedEvent
};//app

app.initialize();