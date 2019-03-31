/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
/*
  Global Variables
*/
const list_of_students = document.getElementsByClassName('student-item');

/***
   showPage` function hides all of the items in the
   list except for the ten you want to show.

***/

 const showPage = (page, list) => {
  const max_index = (page * 10) - 1;
  const lowest_index = (max_index - 9);
  for(let i = 0; i < list.length; i++){
    if (i >= lowest_index && i <= max_index ){
       list[i].style.display = '';
    }else{
       list[i].style.display = 'none';
    }
  }
}

/***
   appendPageLinks generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {

  //this if statement deletes all page links (if there is any) before creating new ones
  test = document.querySelector('.pagination');
  if(test){
    test.parentNode.removeChild(test);
  }

  const pages = Math.ceil(list.length/10);
  const newDiv = document.createElement('div');
  const div = document.querySelector('.page');
  newDiv.className = 'pagination';
  div.appendChild(newDiv);
  const ul = document.createElement('ul');
  newDiv.appendChild(ul);
  for(let i = 0; i < pages; i++){
    const li = document.createElement('li');
    const a = document.createElement('a');
    const page = i + 1;
    a.textContent = page;
    a.href = '#';
    li.appendChild(a);
    ul.appendChild(li);

    /*
      EventLisner for the pagination links,
       - calls the showpage function with
       - loops through and removes alll active classes from the links,
       then assigns one to the properly selected link

    */
    a.addEventListener('click', (e) => {
      showPage(e.target.textContent, list);
      const paginationLinks = document.querySelectorAll('.pagination a');
      for(let i = 0; i < paginationLinks.length; i++){
        paginationLinks[i].classList.remove('active');
        e.target.className = 'active';
      }
    });

  }
  showPage(1, list)// shows the first page when the page loads
  const firstA = document.querySelector('.pagination a');
  firstA.className = 'active';//making sure the first page is active on pageload

}

/*
SearchFuntion : builds input field and the submit button.
- contains two Eventlistners

*/
const searchFunction = (list) => {
  const inputDiv = document.createElement('div');
  inputDiv.className = 'student-search';
  const parentDiv = document.querySelector('.page-header');
  parentDiv.appendChild(inputDiv);
  const input = document.createElement('input');
  input['placeholder'] = "Search for students...";
  input.className = "inputSearch";
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';
  searchButton.className = 'searchButton'
  inputDiv.appendChild(input);
  inputDiv.appendChild(searchButton);
  const inputSearch = document.querySelector('.inputSearch');
  const studentNames = document.querySelectorAll('.student-details h3');
  const searchSubmit = document.querySelector('.searchButton');

  // EventLisner for the search input - real time search as the user types in the input field
  inputSearch.addEventListener('keyup', (e) => {
    const newList = [];
    const searchFail = document.querySelector('.searchFail');
    //testing to see if the 'fail search' display is showing
    if(searchFail){
      searchFail.parentNode.removeChild(searchFail);
    }

    for(let i = 0; i < list.length; i++){
      const name = studentNames[i].textContent.toUpperCase();
      list[i].style.display = 'none';
      if(name.indexOf(inputSearch.value.toUpperCase())!= -1){
        newList.push(list[i]);
      }
    }

    if(newList.length === 0){
       displaySearchFail(inputSearch.value);
     }
    appendPageLinks(newList);
   });

   // EventLisner for the submit button,
   searchSubmit.addEventListener('click', (e) => {
     const searchFail = document.querySelector('.searchFail');
     searchFail.parentNode.removeChild(searchFail);

     const newList = [];
     for(let i = 0; i < list.length; i++){
       const name = studentNames[i].textContent.toUpperCase();
       list[i].style.display = 'none';
       if(name.indexOf(inputSearch.value.toUpperCase())!= -1){
         newList.push(list[i]);
       }

     }

     if(newList.length === 0){
        displaySearchFail(inputSearch.value);
      }
   appendPageLinks(newList);
   });
}

/* funtion that creates and displays a h2 search error message ("Sorry, but "${badResult}" is not a student in the system.")*/
const displaySearchFail = (badResult) =>{
  const test = document.querySelector(`.searchFail`);
  if(test){
    test.parentNode.removeChild(test);
  }
  const searchFail = document.createElement('h2');
  searchFail.innerHTML =  `<br>Sorry, but "${badResult}" is not a student in the system.`;
  searchFail['style'] = `font-size: 30px; color: tomato; text-align: right; `;
  searchFail.className = `searchFail`;
  const studentHeader = document.querySelector(`h2`);
  console.log(studentHeader);
  studentHeader.parentNode.insertBefore(searchFail, studentHeader.nextSibling);
}



/*call the appendpagelinks function to properly display site: the appendpageLinks
 calls the show page function to display the page one correctly(line 74)
*/
appendPageLinks(list_of_students);

searchFunction(list_of_students);
