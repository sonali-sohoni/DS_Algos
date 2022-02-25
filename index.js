const arr =  ['test','fest','nemo','west'];
function searchNemo(arr){
  let t0 = performance.now();
  for(let i = 0 ; i < arr.length; i++){
    if(arr[i] ==='nemo') console.log("Nemo found!!");
  }
   let t1 = performance.now();
  console.log("time taken = "+(t1 - t0))
}

searchNemo(arr);