const taskCountElement = document.getElementById("task-count").innerText;
        const completedCountElement = document.getElementById("increment").innerText;
        
        let taskCount = parseInt(taskCountElement); 
        let completedCount = parseInt(completedCountElement); 

     
      const parentHistory =   document.getElementById("history-container");


        const buttons = document.querySelectorAll(".btn-completed");
let sum=6;
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

 
            if(buttons[i].disabled === true){
            sum = sum -1
            }
            

            const div = document.createElement("div");
            div.classList.add('bg-blue-100', 'p-5', 'rounded-md','mb-4')
            div.innerHTML = `
            
            <p> You have completed the task <b> ${taskTitle} </b> at ${time} </p>

            `
           parentHistory.appendChild(div);
           
           }
            
           if(sum===0){
            alert("Cognates !! You have completed all the current tasks");
           }
            });

        }
          

        
       document.getElementById("clear-history").addEventListener("click",function(){
     
        const parentHistory =   document.getElementById("history-container");
        parentHistory.innerHTML=" ";

       })

       document.getElementById('discover-new').addEventListener("click",function(event){
       
      window.location.href="discover.html";
       })

       

       const collectionOfColors = ['bg-blue-400', 'bg-zinc-400','bg-green-400','bg-yellow-400','bg-red-400'];
       
         let index=0;
        document.getElementById("ring-btn").addEventListener("click",function(){
          const body = document.getElementById("body-color");
          body.className = '';
          body.classList.add(collectionOfColors[index]);
          index = (index + 1) % collectionOfColors.length;
       
       })

      