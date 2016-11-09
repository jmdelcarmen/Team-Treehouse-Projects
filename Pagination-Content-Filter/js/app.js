//Problem: No links of pagination to click on and no search field
  //Too much students in 1 page

//Solution: Add pagination in every page with 10 students/page and page given the .active class

//1. Append .student-search to pageheader
var header = document.getElementsByTagName('div')[1];
var studentSearch = document.createElement('div');
studentSearch.classList.add('student-search');
var searchInput = document.createElement('input');
searchInput.setAttribute('placeholder', 'Search for students...');
var searchButton = document.createElement('button');
searchButton.innerText = 'Search';
studentSearch.appendChild(searchInput);
studentSearch.appendChild(searchButton);
header.appendChild(studentSearch);


//2. Create pagination elements
  //2.1 Append appropriately


  //2.2 Show number of pages depending of number of students
    //2.3 Append paginationLi to paginationUl
var numberOfStudents = document.getElementsByTagName('ul')[0].childElementCount;




//Creates number of pages for pagination depending on number of students
 
var paginationDiv = document.createElement('div');
paginationDiv.classList.add('pagination');
var paginationUl = document.createElement('ul');
paginationDiv.appendChild(paginationUl);


var activate = function () {
  this.classList.add('active');
}

for (var i = 0; i < (Math.ceil(numberOfStudents/10)); i++) {
    var pageNumber = (i+1);
    var paginationLi = document.createElement('li');
    paginationUl.appendChild(paginationLi);
    
    var paginationAnchor = document.createElement('a');
    paginationAnchor.textContent = pageNumber;
    paginationAnchor.setAttribute('href', '#');
    paginationLi.appendChild(paginationAnchor);
    paginationAnchor.addEventListener("click", activate);
  }
  var searchPage = document.getElementsByTagName('body')[0];
  searchPage.appendChild(paginationDiv);
var linkItem = document.getElementsByClassName('pagination')[0].querySelector('ul');


//Activate page number















