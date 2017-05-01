$(document).ready(function(){

// this changes the welcome circle to include a text input and button
var changeContent = function(){
  $('p').remove();
  $('h2').remove();
  $('#welcome').append('<h4 id="newText">').append('<input type="text" class="choice">').append('<button type="button" id="inputButton">Give it a go!</button>');
  $('h4').html('Pick a topic!</br>But please, keep it safe for work.');
};

$('#click').click(function(){
  console.log('workds');
  changeContent();
});

//this makes the welcome div hidden and runs the main function to append children to the page
$('#welcome').on('click', '#inputButton', function(){

   var search = $('#welcome input').val();
      searchReddit(search);
      console.log('clicked');
      $('#again').css('visibility', 'visible')
     $('.holder').css('visibility', 'hidden');
});

// this changes the visibility on the welcome circle back to visible so a new search can be run
$('#again').on('click', function(){
  $('.holder').css('visibility', 'visible');
  $('#welcome input').val('');
})

//This code adds the reddit divs to the #images div---------
function searchReddit(subreddit) {

  $.get('https://www.reddit.com/r/' + subreddit + '.json').done(function(response){
console.log(subreddit);
    console.log(response.data.children[0].data);

    response.data.children.forEach(function(i){

      var title = i.data.title;
      var thumbnail = i.data.thumbnail;
      var author = i.data.author;
      var link = i.data.url;

      if(i.data.over_18 === true){
        alert("This is not safe for work. Try again.");
      };

      if(i.data.post_hint === 'image' && i.data.over_18 === false){
      $('#images').append("<div class='container'><p id='title'>" + title +
      '</p>' + '<p id="op">OP: ' + author + '</p><img src=' + thumbnail + '><a href='+ link +'>link to original source</a></div>');
      };

      search = "";
     });//closing for forEach()

   $('#images div:gt(11)').remove(); //this removes every element aftter index 11

   $('#images div').mouseover(function(){
     $(this).addClass('over');
     $('.border').addClass('spin');
   });

   $('#images div').mouseout(function(){
     $(this).removeClass('over');
     $('.border').removeClass('spin');
   });

// $(function(){
//    $('#container')sortable();
// }

});// closing for $get function

}; //closing for on click function
//end of appending function------------------------------------------


//closing document ready function.................................
});

// $('holder').mouseover(function(){
//   $('border').css('transform', 'rotate(1080deg)');
// })
