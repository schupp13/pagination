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
const number_of_pages = Math.ceil(list_of_students.length/10);
const number_for_last_page = list_of_students.length % 10;

console.log(number_for_last_page);

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

function showPage(page, all_students){
  max_index = (page * 10) - 1;
  lowest_index = (max_index - 9);
  const new_div = document.createElement('div');
  const new_ul = document.createElement('ul');
  new_div.appendChild(new_ul);
  for(let i = 0; i < all_students.length; i++){
    const li = document.createElement('li');
    if (i >= lowest_index && i <= max_index ){
      li = all_students[i].style.display = '';
    }else{
      li = all_students[i].style.display = 'none';
    }
    new_ul.appendChild(li);
  }

}

showPage(1, list_of_students);




/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

function appendPageLinks(){

  for(let i = 0; i < number_of_pages.length; i++){

  }

}



// Remember to delete the comments that came with this file, and replace them with your own code comments.
