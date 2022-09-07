var count=0;
function add(){
    var boxdiv= document.getElementById("box-div");
    var box= document.createElement("div");
    box.className="box";
    box.id=count;

    var titlee= String(prompt("What's your tasks?"));
    var listitems=Number(prompt("Enter the number of tasks to be done"));
    
    var arr=new Array();
    for(var i=0;i<listitems;i++){
        arr[i]=prompt("Enter task number "+(i+1));
    }
    box.innerHTML+=`<h2>${titlee}</h2>`;
    box.innerHTML+=`<hr>`;
    
    // box.id = `box${count}`;
    for(var i=0;i<listitems;i++){

        box.innerHTML+=`<h4>
            <input type="checkbox" onclick="check(box${count}id${i}, box${count}label${i})" id="box${count}id${i}">
            <label for="box${count}id${i}" id="box${count}label${i}"> ${arr[i]}</label>
            </h4>`
           }
           box.innerHTML+=`<button class ="btn3" id = "${count}" onclick="del(${box.id})">Delete</button>`;
    boxdiv.appendChild(box);

    count++;
} 


function check(id1,labell){
    var checkboxx=id1;
    var label=labell;
    if(checkboxx.checked==true){
        label.style.textDecorationLine="line-through";
        label.style.color="#C2C2C2";
    }
    else{
        labell.style.textDecorationLine="none";
        labell.style.color="black";
    }
}
function del(box_id){
    const a= document.getElementById(box_id);
    a.remove();
}