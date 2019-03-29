/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.
   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
//const basic_div = document.querySelector
//console.log(main_div);
const list_of_students = document.getElementsByClassName('student-item');

/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.
   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
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
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
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
  firstA.className = 'active';

}

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
    for(let i = 0; i < list.length; i++){
      const name = studentNames[i].textContent.toUpperCase();
      list[i].style.display = 'none';
      if(name.indexOf(inputSearch.value.toUpperCase())!= -1){
        newList.push(list[i]);
      }
    }
    appendPageLinks(newList);
   });

}
appendPageLinks(list_of_students);
searchFunction(list_of_students);
// Remember to delete the comments that came with this file, and replace them with your own code comments.
