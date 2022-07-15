import BigNumber from "bignumber.js";

const jsonObject = {
    complexValueD: {
        complexValueH: {
            simpleValueJ: 222,
            simpleValueK: new BigNumber(12363869049704382),
        },
        simpleValueE: "value2",
        simpleValueF: 1111,
        simpleValueG: new BigNumber(12363869049704383),
    },
    simpleValueA: 10,
    simpleValueB: "value",
    simpleValueC: new BigNumber(12363869049704384),
};
console.log(jsonObject);
console.log("------------------");

function replaceObject(inputObject: any): any {
    const returnValue = {};
    for (const [key, value] of Object.entries(inputObject)) {
        if (typeof (value) === "object") {
            // console.log(`simple: ${key} ${value} typeof: ${typeof (value)} instanceof: ${value instanceof BigNumber}`);
            if (value instanceof BigNumber) {
                returnValue[key] = (value as BigNumber).toFixed().toString();
            } else {
                returnValue[key] = replaceObject(value);
            }
        } else {
            // console.log(`simple: ${key} ${value} typeof: ${typeof (value)} instanceof: ${value instanceof BigNumber}`);
            returnValue[key] = value;
        }
    }
    return returnValue;
}

function changeType(inputObject: any): any {
    return replaceObject(inputObject);
}

console.log(changeType(jsonObject));
