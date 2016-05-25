$(function(){
   $("#submit-btn").on('click', function(event){
    event.preventDefault();
    var city = $('#city-type').val();
    if(city === 'New York' || city == 'nyc'){
        $('body').attr('class', 'nyc')
    }
    else if(city === 'Sydney' || city == 'sydney'){
        $('body').attr('class', 'sydney')

    }
    else if(city === 'San Francisco' || city == 'san francisco'){
        $('body').attr('class', 'sf')

    }
    else if(city === 'Austin' || city == 'austin'){
        $('body').attr('class', 'austin')

    }
    else if(city === 'LA' || city == 'la'){
        $('body').attr('class', 'la')

    }

   })
});