import { objectParseToStr } from "./util";
import { people } from "./classes"

objectParseToStr(people)
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise finished")
})