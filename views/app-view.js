
// Define App View Constructor
AppView = Backbone.View.extend({

  // Wrap the view in a div w/ class menu-view
  tagName: 'div',
  className: 'app-view',


  // Listen for a click on view buttons
  events: {
    'click .do-again': 'doAgain',
    'click .swap': 'swap',
    'click .share': 'share'    
  },



  initialize: function(){
    //define templates for each view    
    appTemplate = _.template($('#app-template').html())
    lyricTemplate = _.template($('#lyric-template').html())
    doAgainTemplate = _.template($('#do-again-template').html())
    swapTemplate = _.template($('#swap-template').html())
    shareTemplate = _.template($('#share-template').html())


    // Render & Append the view when it is instantiated
    this.render();
    $('.app-container').prepend(this.$el);
  
    new LyricView();
    $("#verseOne_div").append(verseOne.join("<br>"));
    $("#chorus1_div").append(chorus1.join("<br>"));
    $("#chorus2_div").append(chorus2.join("<br>"));
    $("#verseTwo_div").append(verseTwo.join("<br>"));
    $("#bridge_div").append(bridge.join("<br>"));
    $("#chorus1_div2").append(chorus1.join("<br>"));
    $("#chorus2_div2").append(chorus2.join("<br>"));

  },


 // When rendering, Pass in the App Template
  render: function(){
    this.$el.html(appTemplate());
  },

  doAgain: function() {
    $('.verse_container').html('');
    new LyricView();
    $("#verseOne_div").append(verseOneAlt.join("<br>"));
    $("#chorus1_div").append(chorus1Alt.join("<br>"));
    $("#chorus2_div").append(chorus2Alt.join("<br>"));
    $("#verseTwo_div").append(verseTwoAlt.join("<br>"));
    $("#bridge_div").append(bridgeAlt.join("<br>"));
    $("#chorus1_div2").append(chorus1Alt.join("<br>"));
    $("#chorus2_div2").append(chorus2Alt.join("<br>"));

  },

  swap: function() {
    $('.verse_container').html('');
    new SwapView()
    $("#verseOne_div").append(verseOneAlt.join(' '+' <img src="img/right_arrow.png"><br>'));
    $("#verseOne_div").append(' '+' <img src="img/right_arrow.png">');
    $("#chorus1_div").append(chorus1Alt.join(' '+' <img src="img/right_arrow.png"><br>'));
    $("#chorus1_div").append(' '+' <img src="img/right_arrow.png">');
    $("#chorus2_div").append(chorus2Alt.join(' '+' <img src="img/right_arrow.png"><br>'));
    $("#chorus2_div").append(' '+' <img src="img/right_arrow.png">');
    $("#verseTwo_div").append(verseTwoAlt.join(' '+' <img src="img/right_arrow.png"><br>'));
    $("#verseTwo_div").append(' '+' <img src="img/right_arrow.png">');
    $("#bridge_div").append(bridgeAlt.join(' '+' <img src="img/right_arrow.png"><br>'));
    $("#bridge_div").append(' '+' <img id=swapBridge src="img/right_arrow.png">');

  }


});


//Instatiate App View on page load
$(document).ready(function(){
  new AppView();
});



var verseOneAlt = 
["You know its all the same another time and place",
"With a smile baby baby",
"Ive never been anywhere cold as you",
"Shes never gonna love you like I want to"]

var chorus1Alt =
["They might be bigger",
"Were you just kidding",
"Looking so innocent",
"And my old faded blue jeans"]

var chorus2Alt =
["Cause its tragedy and itll only bring you down",
"Find things they never found"]

var verseTwoAlt =
["You had me crawling for you honey",
"And we caught onto something",
"But he leaves you out like a penny in the rain",
"Have you ever thought just maybe"]

var bridgeAlt=
["Tonight we stand get off our knees",
"This is the last straw",
"You belong with me",
"Daddys smart"]

var bridgeAltSwap=
["So Ive got some things to say to you ha",
"And we talk and window-shop",
"And you can tell me that youre sorry",
"Talks business with my father"
]


var verseOne = 
["A Place In This World",
"But she wears short skirts",
"Now at school",
"And well sing hallelujah well sing hallelujah"]

var chorus1 =
["With a smile baby baby",
"Dont know how long its gonna take to feel okay",
"Far enough away",
"Ive got my big coat on"]

var chorus2 =
["Did I say something way too honest made you run and hide",
"I believe it was a Tuesday when I caught your eye"]

var verseTwo =
["I wear t-shirts",
"And youre the prettiest lady in the whole wide world",
"There is a video",
"And now youre asking me to listen"]

var bridge=
["Were you just kidding",
"Did I say something way too honest made you run and hide",
"And the battle was long its the fight of our lives",
"Couldve loved you all my life"]


