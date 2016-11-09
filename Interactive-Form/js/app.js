'use strict';

//Default settings on pageload 
$(window).ready(function () {
  $('#name').focus();
  $('#color option:not(:nth-child(4))').hide();
  $('#color option:nth-child(4)').prop('selected', true);
  $('#payment option[value*=credit]').prop('selected', true);
  $('#bitcoin').hide();
  $('#paypal').hide();
  $otherTextInput.hide();
  $firstFieldSet.append($otherTextInput);
});

//1. Job title selection
var $jobTitleSelect = $('#title');
var $otherTextInput = $('<input id="other" type="text" placeholder="Your job role">');
var $firstFieldSet = $('fieldset:first-child');

function jobSelect () {
  var optionVal = $('#title :selected').val();
  if (optionVal === 'other') {
    $otherTextInput.show();
  } else {
    $otherTextInput.hide();
  }
}

//Bind event
$jobTitleSelect.change(jobSelect);


//2. T-shirt design selection
var $jsPunsOption = $('#color option:nth-child(1)');
var $jsPunsColors = $('#color option:nth-child(-n+3)');
var $iHeartJsOption = $('#color option:nth-child(5)');
var $iHeartJsColors = $('#color option:nth-child(n+5)');
var $selectTheme = $('#color option:nth-child(4)');
var $colorSelect = $('#color');

function tshirtDesignSelect () {
  var optionVal = $('#design option:selected').val();
  //3.1.1. If 'Theme-JS Puns' is selected
      //3.1.1.1. Only show Cornflower Blue, Dark Slate Grey, and Gold (Color menu)
  if (optionVal === 'js puns') {
      $jsPunsOption.prop('selected', true);
      $colorSelect.css('width', '120px');
      $jsPunsColors.siblings().hide();
      $jsPunsColors.show();
  //3.1.2. If 'Theme- I <3 JS' is selected
      //3.1.2.1. Only show Tomato, Steel Blue, and Dim Grey (Color menu)
  } else if (optionVal === 'heart js') {
      $colorSelect.css('width', '95px');
      $iHeartJsOption.prop('selected', true);
      $iHeartJsColors.siblings().hide();
      $iHeartJsColors.show();
  //3.1.3. If no theme is selected
      //3.1.3.1. Tell user to select a theme
  } else if (optionVal === 'select-theme') {
      $colorSelect.css('width', '208px');
      $selectTheme.prop('selected', true);
      $selectTheme.siblings().hide();
      $selectTheme.show();
  }
}

//Bind event
$colorSelect.change(tshirtDesignSelect);
    


//3. Events. Times and Dates. 
var $activities = $('.activities');
var $expressCheckBox = $('input[name=express]');
var $nodeJsCheckBox = $('input[name=node]');
var $jsFrameworksCheckBox = $('input[name=js-frameworks]');
var $jsLibsCheckBox = $('input[name=js-libs]');
var $totalText = $('#total');

//3.1 Total Pricing
function showTotalPrice () {
  var price = 0;
  for (var i = 0; i < 7; i++) {
    var activity = $('.activities input').eq(i);
    if (activity.prop('checked') === true) {
      price += parseInt(activity.val());
    }
  }
  if (price === 0) {
    $totalText.hide();
  } else {
    $totalText.text('Total : $' + price).show();
  }
}
//3.2 Schedule clashing
function scheduleClashCheckBox () {
  for (var i = 0; i < 7; i++) {
    var activity = $('.activities input').eq(i);
    //disable when checkbox is (checked) and decorate text
    if (activity.prop('checked') === true && activity.parent('label').text().includes('JavaScript Frameworks')) {
        $expressCheckBox.prop('disabled', true); 
        $expressCheckBox.parent('label').css('text-decoration', 'line-through');
    } else if (activity.prop('checked') === true && activity.parent('label').text().includes('JavaScript Libraries')) {
        $nodeJsCheckBox.prop('disabled', true); 
        $nodeJsCheckBox.parent('label').css('text-decoration', 'line-through');
    } else if (activity.prop('checked') === true && activity.parent('label').text().includes('Express Workshop')) {
        $jsFrameworksCheckBox.prop('disabled', true); 
        $jsFrameworksCheckBox.parent('label').css('text-decoration', 'line-through');
    } else if (activity.prop('checked') === true && activity.parent('label').text().includes('Node.js Workshop')) {
        $jsLibsCheckBox.prop('disabled', true); 
        $jsLibsCheckBox.parent('label').css('text-decoration', 'line-through');
  //enable wen checkbox is (unchecked) and remove text decoration
    } else if (activity.prop('checked') === false && activity.parent('label').text().includes('JavaScript Frameworks')) {
        $expressCheckBox.prop('disabled', false); 
        $expressCheckBox.parent('label').css('text-decoration', 'none');
    } else if (activity.prop('checked') === false && activity.parent('label').text().includes('JavaScript Libraries')) {
        $nodeJsCheckBox.prop('disabled', false);
        $nodeJsCheckBox.parent('label').css('text-decoration', 'none');
    } else if (activity.prop('checked') === false && activity.parent('label').text().includes('Express Workshop')) {
        $jsFrameworksCheckBox.prop('disabled', false); 
        $jsFrameworksCheckBox.parent('label').css('text-decoration', 'none');
    } else if (activity.prop('checked') === false && activity.parent('label').text().includes('Node.js Workshop')) {
        $jsLibsCheckBox.prop('disabled', false);
        $jsLibsCheckBox.parent('label').css('text-decoration', 'none');
    }
  }
}

//Bind events
$activities.on('change', 'input', showTotalPrice);
$activities.on('change', 'input', scheduleClashCheckBox);



//4. Payment info
function paymentMethod () {
  var optionVal = $('#payment :selected').val();
  if (optionVal === 'credit_card') {
      $('#payment option[value*=credit]').prop('selected', true);
      $('#paypal').hide();
      $('#bitcoin').hide();
      $('#credit-card').show();
  } else if (optionVal === 'paypal') {
      $('#payment option[value*=paypal]').prop('selected', true);
      $('#paypal').show();
      $('#bitcoin').hide();
      $('#credit-card').hide();
  } else if (optionVal === 'bitcoin') {
      $('#payment option[value*=bitcoin]').prop('selected', true);
      $('#paypal').hide();
      $('#bitcoin').show();
      $('#credit-card').hide();
  } else {
      $('#payment option[value*=select]').prop('selected', true);
      $('#paypal').hide();
      $('#bitcoin').hide();
      $('#credit-card').hide();  
  }
}

//Bind events
$('#payment').change(paymentMethod);
$('#design').change(tshirtDesignSelect);


//Register button action


var $nameLabel = $('label[for=name]');
var $mailLabel = $('label[for=mail]');

function emptySubmits () {
  if ($('#name').val().length === 0) {
    event.preventDefault();
    $nameLabel.html('Name: (please provide your name)');
    $nameLabel.css({'color': 'firebrick', 'font-weight': '500' });
  }
  if ($('#mail').val().length === 0) {
    event.preventDefault();
    $mailLabel.html('Email: (please provide a valid email address)');
    $mailLabel.css({'color': 'firebrick', 'font-weight': '500' }); 
  }
  if ($('#design :selected').val() === 'select-theme') {
    event.preventDefault();
    $('#pick-shirt').text("Don't forget to pick a T-Shirt");
    $('#pick-shirt').css({'color': 'firebrick', 'font-weight': '500', 'font-size': '0.75em' }); 
  } 
  if (($('.activities input').prop('checked') == true)) {
    console.log('Hi from the console');
  }
  else {
    event.preventDefault();
    $('#select-activity').text("Please select an Activity");
    $('#select-activity').css({'color': 'firebrick', 'font-weight': '500', 'font-size': '0.75em' });
  }
  if ($('#cc-num').val().length === 0) {
    event.preventDefault();
    $('label[for=cc-num]').css({'color': 'firebrick', 'font-weight': '500'});
  }
  if ($('#zip').val().length === 0) {
    event.preventDefault();
    $('label[for=zip]').css({'color': 'firebrick', 'font-weight': '500'});
  }
  if ($('#cvv').val().length === 0) {
    event.preventDefault();
    $('label[for=cvv]').css({'color': 'firebrick', 'font-weight': '500'});
  }
} 

$('button').click(emptySubmits);





























