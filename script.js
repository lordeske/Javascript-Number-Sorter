const SortButton = document.getElementById("sort");


const bubbleSort = (array) => {

    for (let i=0; i<array.length;i++)
    {
        for (let j=0; j<array.length-1;j++)
        {
            if(array[j] > array[j+1])
            {
                const temp = array[j];
                array[j] =array[j+1];
                array[j+1]=temp;
            }
        }
    }
    return array;


}



const selectionSort = (array)=>
{

    for (let i=0;i<array.length; i++)
    {
        let minIndex = i;

        for (let j =i+1 ; j<array.length;j++)
        {
            if(array[j]< array[minIndex])
            {
                minIndex = j;
            }
        }
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;
   
}


const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
      const currValue = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > currValue) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = currValue;
    }
    return array;
  }




const dispayArray = (array = []) => {


    array.forEach((val, indx)=> {

        const outputValueNode = document.getElementById(`output-value-${indx}`);

        outputValueNode.innerText=val;

    })

}

const sortInptArray = (event) => {

    event.preventDefault();


    const outputArray = [...document.getElementsByClassName("values-dropdown")].map((dropdown)=> Number(dropdown.value));

    const sortetArray1 = bubbleSort(outputArray);
    const sortetArray2 = selectionSort(outputArray);
    const sortetArray = insertionSort(outputArray);

    dispayArray(sortetArray);




}





SortButton.addEventListener("click" , sortInptArray);




