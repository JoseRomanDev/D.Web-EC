import { objectParseToStr } from "./util";
import { people } from "./mockdata"


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