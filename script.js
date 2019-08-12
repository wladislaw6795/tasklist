// создаём checked и div 
		// checked служить в дальнейшем что бы отмечать задание как сделанное. div удаляет задания. 
		var addtask = document.querySelector('ul');
		addtask.addEventListener('click', function (check) {
			if(check.target.tagName == "LI") {
       			check.target.classList.toggle('checked'); 
    			} else if(check.target.tagName == "SPAN") {
    			// здесь мы находи родительский элемент
     			 var div = check.target.parentNode; 
      			 // тут удаляем 
      			 div.remove();  
  			    }
		});

		// создаем новый элемент dom дерева
		function newTask() {
			var valueofinput = document.getElementById('checklist').value;
			// проверка на наличие информации в input'e
			if (valueofinput === ''){
				alert('task is not find')
			} else {
			 // создание самого нового элемента li
			  var li = document.createElement('li');
			  var text = document.createTextNode(valueofinput);
			  li.appendChild(text);
			  		// добавление в лист ul 
			   document.getElementById('addtask').appendChild(li);   
			    // очищение input после ввода задания
			   document.getElementById('checklist').value = "";  
 
			   	 // создание dom елемента, которое будет удалять задание.
			     var cancel  = document.createElement("SPAN");
	   			 var txt = document.createTextNode("X");
	   			 cancel.className = "cancel";
	    		 cancel.appendChild(txt);
	   			 li.appendChild(cancel);
				} 
		} 
