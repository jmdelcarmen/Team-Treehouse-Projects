var $numberOfStudents;
var $page = $('.page');
var $paginationDiv = $('<div class="pagination"></div>');
var $paginationUl = $('<ul></ul>');

//determine how many students are on the list
var $studentList = $('.student-list');
$numberOfStudents = $studentList.children().length;

//create search elements 
var $searchDiv = $('<div class="student-search"></div>');
var $searchInput = $('<input placeholder="Search for students...">');
var $searchButton = $('<button>Search</button>');
  //Append elements to $searchDiv
  $searchDiv.append($searchInput);
  $searchDiv.append($searchButton);
//Append input and button to page-header
$('.page-header').append($searchDiv);

//create pagination numbers depending on $numberOfStudents
for (var i = 0; i < Math.ceil($numberOfStudents/10); i++) {
    var $paginationLi = $('<li><a href="#"></a></li>');
    $paginationLi.children().text(i+1);
    $paginationUl.append($paginationLi);
}
  //append appropriately
$paginationDiv.append($paginationUl);
$page.append($paginationDiv);

function search () {
  var inputValue;
  //hide students that don't include the string in input
  $studentList.children().hide();
  //Input field value
  inputValue = $searchInput.val();
  //cycle through all the name & email texts
  for (var i = 0; i < $numberOfStudents; i++) {
    //get names
    var $presentStudents = $('h3').eq(i).text();
    //get emails
    var $presentEmails = $('.email').eq(i).text();
    //if undefined or blank show first 10 students with page 1 .active
    if (inputValue.length == 0 || inputValue == " " ) {
        $('.pagination a').parent('li').siblings().children().removeClass('active');
        $('.pagination a')[0].classList.add('active');
        $('.pagination li').show();
        for (var x = 0; x < 10; x++) {
          $studentList.children().eq(x).show();
        } 
      //if input value includes h3 string show these students
    } else if ($presentStudents.toLowerCase().includes(inputValue.toLowerCase()) || $presentEmails.toLowerCase().includes(inputValue.toLowerCase())) {
        $studentList.children().eq(i).show();
    } else if ($presentStudents.toLocaleLowerCase() != inputValue.toLocaleLowerCase()) {
        $('.pagination li').hide();
    }
  }
}

//show 10 students depending on page number
function showStudents () {
  var number = parseInt($(this).text());
  var firstStudent = (((number - 1) * 10 ) + 1);
  var lastStudent = (number * 10);
  $studentList.children().hide();
  for (var i = firstStudent; i <= lastStudent; i++) {
    $studentList.children().eq(i-1).fadeIn();
  }
  //removes active class from unclicked pages
  $(this).parent('li').siblings().children().removeClass('active');
  //Adds active class to clicked page
  $(this).addClass('active');
}

//initally hide .student-list
$studentList.children().hide();
//initially show first 10 students
for (var i = 0; i < 10; i++) {
  $studentList.children().eq(i).show();
}
//initally set active class to page 1
$paginationUl.children().first().children().addClass('active');

//bind events
$('.pagination li a').click(showStudents);
$searchButton.click(search);
$('input').keyup(search);











