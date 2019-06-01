var container = document.getElementById('list')
var clear= document.getElementById("btnClr")
clear.style.display="none"
document.getElementById('add').addEventListener('click', function(a) {
  var inputElement = document.getElementById('input-item')
  var count=0
  if (inputElement.value != '') {
      var newItem = document.createElement('li')
      newItem.style="list-style-type:none";
      var box = '<input type="checkbox" id="box" class="checkboxes"/>';
      var line= box+ '<label class="label">' +inputElement.value + '</lable>';
      newItem.innerHTML= line;
      var newBtn = document.createElement('button')
      newBtn.innerText = 'Done'
      newBtn.className="newbtns"
      newBtn.addEventListener('click', function() {
        container.removeChild(newItem)
        console.log(container.childNodes.length)
        //newBtn.parentNode.removeChild(newBtn)
        if (container.childNodes.length<=1){
          clear.style.display= "None"
        }
    })

      newItem.appendChild(newBtn);
      container.prepend(newItem)
      check=document.getElementById("box")
      check.addEventListener('change', function() {
        if(this.checked) {
          // Checkbox is checked..
          newItem.childNodes[1].style.textDecoration = "line-through";
        } else {
          // Checkbox is not checked..
          newItem.childNodes[1].style.textDecoration = "";
        }
      });
      count=count+1
      if (count!==0){
        clear.style.display= "inline"
      }
      inputElement.value = ''
      clear.addEventListener('click', function(){
        container.innerHTML="";
        clear.style.display= "None"
      }
      )
      
  }
  else{
    alert("You need to enter something")
  }
} )
