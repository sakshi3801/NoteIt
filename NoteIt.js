
    function update()
    {
    console.log("Updating list...");

    let tit = document.getElementById('title').value;
    let desc = document.getElementById('description').value;

    if(localStorage.getItem('jsonItems') == null)
    {
        jsonArray = [];
        jsonArray.push([tit,desc]);
        localStorage.setItem('jsonItems', JSON.stringify(jsonArray));
    }
    else{
        jsonString = localStorage.getItem('jsonItems');
        jsonArray = JSON.parse(jsonString);
        jsonArray.push([tit,desc]);
        localStorage.setItem('jsonItems',JSON.stringify(jsonArray));
    }

    let tableBody = document.getElementById("tableBody");
    let str = "";

    jsonArray.forEach((element,index) => {

        str+=`
        <tr>
           <td scope="row">${index+1}</td>
            <td scope="row">${element[0]}</td>
            <td scope="row">${element[1]}</td>
            
            <td scope="row"><button type="button" class="btn btn-secondary btn-sm" onclick="deleted(${index})" style="background-color: #92967d " >Delete</button></td>
        </tr>
        `;
        
    });

    tableBody.innerHTML = str;
};

function update1()
{
    if(localStorage.getItem('jsonItems') == null)
    {
        jsonArray = [];
        localStorage.setItem('jsonItems', JSON.stringify(jsonArray));
    }

    else{
        jsonString = localStorage.getItem('jsonItems');
        jsonArray = JSON.parse(jsonString);
     
    }


    let tableBody = document.getElementById("tableBody");
    let str = "";
   
    jsonArray.forEach((element,index) => {

        str+=`
        <tr>
           <td scope="row">${index+1}</td>
            <td scope="row">${element[0]}</td>
            <td scope="row">${element[1]}</td>
  
            <td scope="row"><button type="button" class="btn btn-secondary btn-sm" onclick="deleted(${index})" >Delete</button></td>
        </tr>
        `;
        
    });

    tableBody.innerHTML = str;
}

add = document.getElementById("add");

add.addEventListener('click', update);
update1();

function deleted(item)
{
    console.log("Deleting an item");
    console.log(localStorage.getItem('jsonItems'));
    jsonString = localStorage.getItem('jsonItems');
    jsonArray = JSON.parse(jsonString);
    jsonArray.splice(item,1);
    localStorage.setItem('jsonItems', JSON.stringify(jsonArray));
    update1();

}

clear = document.getElementById('clear');
clear.addEventListener('click', ()=>{
    if (confirm("Do you areally want to clear?")){
        console.log('Clearing the storage')
        localStorage.clear();
        }
    update1();
})