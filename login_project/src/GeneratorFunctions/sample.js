function* accetArray(arr) {
  let i = 0;
  while(i < arr.length) {
    yield arr[i];
    i++;
  }
}

let arr = [1,2,3,4,5,6];
const it = accetArray(arr);
console.log(it.next());

//------------------------------------------------

function* greet(name) {
  while(true){
    yield "hi "+name;
  }
}

const it = greet('shweta');
console.log(it.next());

//-------------------------------------------------

import apiHelper from "./apis/apiHelper";
function* login() {
  try{
    const res = yield apiHelper('post', 
                                'https://api.taiga.io/api/v1/auth', 
                                {username: "shweta@gmail.com", 
                                password: "shweta", 
                                type: "normal"});
    console.log("inside generator", res);
  } catch(error){
    console.log(error);
  }
}

const it = login();
const promise = it.next().value;
promise.then(res => {
  it.next(res);
}).catch(err => {
  it.next(err);
});