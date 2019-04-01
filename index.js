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
  let ul = document.querySelector('employee-list');
  let li = document.createElement('li');
  li.innerHTML = retrieveEmployeeInformation();
  ul.appendChild(li);
}

function addNewLiOnClick() {
  let submit = document.querySelector('input'[type='submit'])
  submit.addEventListener('click', function(event) {
    addNewElementAsLi();
    resetInput();
  });
}

functionn clearEmployeeListOnLinkClick() {
  document.querySelector('a').addEventListener('click', function(event) {
    let ul = document.querySelector('.employee-list')
    ul.innerHTML = ''
  });
}
