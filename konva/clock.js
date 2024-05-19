const scriptTag = document.querySelector('script[src$="clock.js"]');
const stageName = scriptTag.getAttribute('stage');
// console.log(stageName);

const stageWidth = window.innerWidth;
const stageHeight = window.innerHeight;
const lineColor = 'blue';
const lineWidth = 3;
const minutesInWindow = 90;
const minutesStep = 5;
const windowWidth = stageWidth/2;
const windowHeight = stageHeight/2;

const lineCount = minutesInWindow/minutesStep;
const lineDistance = windowHeight/lineCount;
const lineLen = 10;

const stage = new Konva.Stage({
  container: stageName,
  width: stageWidth,
  height: stageHeight,
  offsetX: -windowWidth,
  offsetY: -windowHeight,
});

const layer = new Konva.Layer();
stage.add(layer);

// build central vertical line 
const line = new Konva.Line({
  x: 0,
  y: 0,
  points: [0, -windowHeight/2, 
           0,  windowHeight/2],
  stroke: lineColor,
  strokeWidth: lineWidth,
  tension: 1
})
layer.add(line);

// build 5 min intervals down 
for(var i=0; i<lineCount/2; i++){
    const yPosition = lineDistance*i;
    const nextMinuteLine = new Konva.Line({
        points: [      0, yPosition, 
                 lineLen, yPosition],
        stroke: lineColor,
        strokeWidth: lineWidth,
        tension: 1
    })
    layer.add(nextMinuteLine);
}

// build 5 min intervals up 
for(var i=0; i<lineCount/2; i++){
    const yPosition = -lineDistance*i;
    const minLine = new Konva.Line({
        x: 0,
        y: 0,
        points: [      0, yPosition, 
                 lineLen, yPosition],
        stroke: lineColor,
        strokeWidth: lineWidth,
        tension: 1
    })
    layer.add(minLine);
}
