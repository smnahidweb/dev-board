const taskCountElement = document.getElementById("task-count").innerText;
        const completedCountElement = document.getElementById("increment").innerText;
        
        let taskCount = parseInt(taskCountElement); 
        let completedCount = parseInt(completedCountElement); 

     
      const parentHistory =   document.getElementById("history-container");


        const buttons = document.querySelectorAll(".btn-completed");

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function() {
                
           if(taskCount >0 ){
            taskCount --;
            completedCount++;
            
           alert("Board Updated successfully");
           document.getElementById("task-count").innerText = taskCount;
           document.getElementById("increment").innerText = completedCount;

           buttons[i].disabled = true;
           
           const now = new Date();
                const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true });
            const taskTitle = buttons[i].closest(".task-card").querySelector(".task-title").innerText;

            const div = document.createElement("div");
            div.classList.add("bg-gray-100")
            div.innerHTML = `
            
            <p> You have completed the task <b> ${taskTitle} </b> at ${time} </p>

            `
           parentHistory.appendChild(div);
           
           }

            });
        }

        
       document.getElementById("clear-history").addEventListener("click",function(){
     
        const parentHistory =   document.getElementById("history-container");
        parentHistory.style.display="none";

       })

       document.getElementById('discover-new').addEventListener("click",function(event){
       
      window.location.href="discover.html";
       })

       document.getElementById('back-btn').addEventListener("click",function(){
        
    //   alert("hi");
        
        });