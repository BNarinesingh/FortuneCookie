////////////////////////////////////////////////////////
// Random Quote of the Day
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $(".quote-text").text(data.quoteText);
  console.log(jQuery.isEmptyObject({data}));
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

////////////////////////////////////////////////////////
// Random Numbers for lotto
var numRand='';
var numA=[];
var holder;

 for( var i=0; i <= 5; i++){
   holder=(Math.floor(Math.random() * 59) + 1) + ' ';
   numA[i]+= holder;

   for (var j=0; j <=numA.length; j++){
     if(numA[j]===holder)
      holder=(Math.floor(Math.random() * 59) + 1) + ' ';
   
  }
 numRand+= (Math.floor(Math.random() * 59) + 1) + ' ';

}
$(".horo-numbers").append("Lucky Numbers = " + numRand);

var url_lotto= "https://data.ny.gov/resource/h6w8-42p9.json";
$.getJSON(url_lotto, getNumbers, 'jsonp');
var getNumbers = function(nums){

  var isItLucky= nums.winning_numbers;
  var tally;

  $(".horo-numbers").append(tally);
};

////////////////////////////////////////////////////////
// Random Horoscope

$("#getHoroscope").click(function() {
  $.getJSON(url, getQuote, 'jsonp');

});


var horoRand='';
var randomN= (Math.floor(Math.random() * 11) + 1);
var signs= ['capricorn','aquarius','pisces','aries','taurus',
            'gemini','cancer','leo','virgo','libra','scorpio','sagittarius'];
var sign = signs[randomN];


var getHid = document.getElementById('hday');


var url1 ="http://sandipbgt.com/theastrologer/api/horoscope/"+sign+"/today/";

//reference 
//$("#sagittarius").click(function() {
//  url1 ="http://sandipbgt.com/theastrologer/api/horoscope/sagittarius/today/";
//   $.getJSON(url1, getAstro, 'jsonp');
//   getHid.innerHTML='Horoscope of the Day : Sagittarius';
// });

$(".ZodiacSign").click(function() {
  console.log(this.innerHTML);
  url1 =`http://sandipbgt.com/theastrologer/api/horoscope/${this.innerHTML}/today/`;
  $.getJSON(url1, getAstro, 'jsonp');
  getHid.innerHTML=`Horoscope of the Day : ${this.innerHTML}`;

  
});


var getAstro = function(data1){
  $(".horoscope").text(data1.horoscope);
};

////////////////////////////////////////////////////////
//Background change

aBox.style.backgroundColor="white";
var bgsign= "./images/"+ sign +".jpeg";


document.body.style.backgroundImage = 'url("'+bgsign+'")';
document.body.style.backgroundSize = "auto";

////////////////////////////////////////////////////////
//Move stuff around

$('#quotet').addClass('animated zoomIn');

$('.giphy-embed').fadeToggle(6500);

$('#aBox').hide();
$('#aBox').fadeIn(6500);
$('#aBox2').hide();

////////////////////////////////////////////////////////
// extra info for DOB
// {
//   "code": 400,
//   "msg": "Date must be between Jun 16, 1995 and May 17, 2017.",
//   "service_version": "v1"
// }
// "https://api.nasa.gov/planetary/apod?date=1996-01-30&api_key=fkOMTtVZ59xXE7wyNcNqXTLxVhOgs5Dh4Nu9EmLb";

//gets random date between two periods
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


$('#submit').on('click', function(){
      var date = new Date($('#date-input').val());
      day = date.getDate() + 1;
      month = date.getMonth() + 1;  
      year = date.getFullYear();
      
      if(day === 32 || month === 13){
        day=31;
        month=12;
      }

      if(year <= 1995 || year >= 2017)
        year = getRandomArbitrary(1996, 2017);

      console.log(month +'-'+day+'-'+ year);

  var signis;

 if(month === 3 && day >=21)
  signis="Aries";

  else if(month===4 && day <=19)
  signis="Aries";

   else if(month===4 && day >=20)
  signis="Taurus";

   else if(month===5 && day <=20)
  signis="Taurus";

  else if(month===5 && day <=21)
  signis="Gemini";

  else if(month===6 && day <=20)
  signis="Gemini";

  else if(month===6 && day >=21)
  signis="Cancer";

  else if(month===7 && day <=22)
  signis="Cancer";

  else if(month===7 && day >=23)
  signis="Leo";

  else if(month===8 && day <=22)
  signis="Leo";

  else if(month===8 && day >=23)
  signis="Virgo";

  else if(month===9 && day <=22)
  signis="Virgo";

  else if(month===9 && day >=23)
  signis="Libra";

  else if(month===10 && day <=22)
  signis="Libra";

  else if(month===10 && day >=23)
  signis="Scorpio";

  else if(month===11 && day <=21)
  signis="Scorpio";

  else if(month===11 && day >=22)
  signis="Sagittarius";

  else if(month===12 && day <=21)
  signis="Sagittarius";

  else if(month===12 && day >=22)
  signis="Capricorn";

  else if(month===1 && day <=19)
  signis="Capricorn";

  else if(month===1 && day >=20)
  signis="Aquarius";

  else if(month===2 && day <=18)
  signis="Aquarius";

  else if(month===2 && day >=19)
  signis="Pisces";

  else if(month===3 && day <=20)
  signis="Pisces";
  
  var getgp = document.getElementById('yourHoro');
  signis = "Your Sign is: " + signis;
  
  getgp.innerHTML=signis;

  console.log(getgp);
 // $('#yourHoro').append("Your Sign is:" + signis);



      

////////////////////////////////////////////////////////


var url3 = "https://api.nasa.gov/planetary/apod?date="+year+"-"+month+"-"+day+"&api_key=fkOMTtVZ59xXE7wyNcNqXTLxVhOgs5Dh4Nu9EmLb";

    
$.getJSON({
  url: url3,
  success: function(result){
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }
  
  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none"); 
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none"); 
    $("#apod_img_id").attr("src", result.url);
  }
  $("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));  
  $("#apod_explaination").text(result.explanation);
  $("#apod_title").text(result.title);
}
});

$('#aBox2').fadeIn(5000);


////////////////////////////////////////////////////////
// Numbers API

var url4= "http://numbersapi.com/"+month+"/"+day+"/date";
$.get(url4, function(data3){
  $('.funfact').text(data3)

});


  });

////////////////////////////////////////////////////////




