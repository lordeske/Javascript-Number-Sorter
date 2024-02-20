const SortButton = document.getElementById("sort");




const dispayArray = (array = []) => {


    array.forEach((val, indx)=> {

        const outputValueNode = document.getElementById(`output-value-${indx}`);
        outputValueNode.innerText=val;




    })








}

const sortInptArray = (event) => {

    event.preventDefault();


    const outputArray = [...document.getElementsByClassName("values-dropdown")].map((dropdown)=> Number(dropdown.value));


    dispayArray(outputArray);




}





SortButton.addEventListener("click" , sortInptArray);




