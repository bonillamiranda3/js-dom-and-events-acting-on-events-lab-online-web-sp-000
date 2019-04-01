function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value;
}


function addNewElementAsLi() {
  let Ul = document.querySelector(".employee-list")
  let el = retrieveEmployeeInformation();
  Ul.append(el);
}


function addNewLiOnClick() {
  let submit = document.querySelector('input'[type='submit'])
  submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    resetInput();
  });
}



function clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event){
    Ul = document.querySelector(".employee-list")
    Ul.innerHTML = ''
  });
}
