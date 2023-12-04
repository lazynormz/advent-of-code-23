import { File } from "./util/types";
import { ReadFile } from "./util/file_reader";

let f: File = ReadFile("d1.txt")

let nums_pre1: string[] = f.lines.map(x => { return (x.replace(/\D/g, '')) })
let nums_post1: number[] = nums_pre1.map(x => { return Number.parseInt(`${x[0]}${x[x.length - 1]}`) })
let sum1: number = 0

for (let i = 0; i < nums_post1.length; i++) {
    if (!Number.isNaN(nums_post1[i]))
        sum1 += nums_post1[i]
}

//console.log(nums_post1);
console.log(sum1);

//  ------------------  PART 1 DONE ----------------------

const StringToNum = (x: string): string => {

    let _s: string = ""

    for (let i = 0; i < x.length; i++) {
        switch (x[i].toLowerCase()) {
            case 'o':
                if (!((i + 3) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}` === "one")
                        _s += "1"
                break;
            case 't':
                if (!((i + 3) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}` === "two")
                        _s += "2"
                if (!((i + 5) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}${x[i + 3]}${x[i + 4]}` === "three")
                        _s += "3"
                break;
            case 'f':
                if (!((i + 4) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}${x[i + 3]}` === "four")
                        _s += "4"
                if (!((i + 4) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}${x[i + 3]}` === "five")
                        _s += "5"
                break;
            case 's':
                if (!((i + 3) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}` === "six")
                        _s += "6"
                if (!((i + 5) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}${x[i + 3]}${x[i + 4]}` === "seven")
                        _s += "7"
                break;
            case 'e':
                if (!((i + 5) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}${x[i + 3]}${x[i + 4]}` === "eight")
                        _s += "8"
                break;
            case 'n':
                if (!((i + 4) > x.length))
                    if (`${x[i]}${x[i + 1]}${x[i + 2]}${x[i + 3]}` === "nine")
                        _s += "9"
                break;
            default:
                _s += x[i]
                break;
        }
    }

    return _s
}

let nums_pre_convert2: string[] = f.lines.map(StringToNum)

let nums_pre2: string[] = nums_pre_convert2.map(x => { return (x.replace(/\D/g, '')) })
let nums_post2: number[] = nums_pre2.map(x => { return Number.parseInt(`${x[0]}${x[x.length - 1]}`) })
let sum2: number = 0

for (let i = 0; i < nums_post2.length; i++) {
    if (!Number.isNaN(nums_post2[i]))
        sum2 += nums_post2[i]
}

//console.log(nums_post1);
console.log(sum2);