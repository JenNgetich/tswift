
// Define Swap View Constructor
SwapView = Backbone.View.extend({

  // Wrap the view in a div w/ class menu-view
  tagName: 'div',
  className: 'swap-view',

  events: {
    'click #swapBridge': 'swap',
    'click .save': 'save'
  },

  initialize: function(){
 
    // Render & Append the view when it is instantiated
    this.render();
    $('.verse_container').append(this.$el);
  
  },


 // When rendering, Pass in the App Template
  render: function(){

    this.$el.html(swapTemplate());

  },

  swap: function(){
    console.log("you clicked swap")
    var i=0;
    $("#bridge_div").html('')
    $("#bridge_div").append(bridgeAlt[0] + ' <img class="arrow" src="img/right_arrow.png"><br>' + bridgeAlt[1] + ' <img class="arrow" src="img/right_arrow.png"><br>' + bridgeAlt[2] + ' <img class="arrow" src="img/right_arrow.png"><br>')
    $("#bridge_div").append(bridgeAltSwap[i] + ' <img class="arrow" id="swapBridge" src="img/right_arrow.png">')
    i=i+1;
  },

  save: function(){
    $(".arrow").hide();
    $(".save").hide();
  }


});
