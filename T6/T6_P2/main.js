import { objectParseToStr } from "./util";
import { people } from "./mockdata";

const run = async () => {
    let result = await objectParseToStr(people);
    console.log(result);
}

run();