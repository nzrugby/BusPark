import {Dir,EAST_BORDER,NORTH_BORDER,SOUTH_BORDER,WEST_BORDER,ANGLE,INSTRUCTIONS} from './const.js'
import {output} from './ui.js'

function Car(){
    var X = 0,Y = 0;
    var direction = "NORTH";
    // 
    var cellLength = 42;
    // for car rotation
    var angle = 0;
    // to judge if bus is inside carpark
    var insideCarPark = false;
    var isValidCmd = false;

    var car = document.querySelector('.car');

    // every time when start button clicked the car will be reseted to original location and status
    this.reset = function(){
        insideCarPark = false;
        setCarPosition(0,0,"NORTH");
        angle = 0;
        car.style.transform = `rotate(${angle}deg)`;
    }
    // accept instruction from control system
    this.instruction = function(cmd){ 
        console.log(cmd);
        var instrs = analyze(cmd);
        executeCmd(instrs);
        showReport(cmd,isValidCmd);
    }
    // analyze input instruction
    //function analyze(cmd){
    function analyze(cmd){    
        var instrs = cmd.replace(" ",",").split(",");
        return instrs;
    }

    function executeCmd(instrs){
        if(instrs.indexOf('PLACE')>=0){
            place(parseInt(instrs[1]),parseInt(instrs[2]),instrs[3])
            isValidCmd = true;
        }
        else if(instrs.length==1 && INSTRUCTIONS.indexOf(instrs[0])>=0){
            var fun = insideCarPark? instrs[0].toLowerCase()+"()":"";
            isValidCmd = true;
            eval(fun);
        }
        else{
            isValidCmd = false;
        }
    }
    // private function to show real-time data and report
    function showReport(cmd,isValidCmd){
        output.innerHTML = `Real-time data:<br>
                            Current instruction:  ${cmd}  is ${isValidCmd?"Valid":"Ignored"}<br>
                            Current X position:  ${X-2}<br>
                            Current Y position:  ${6-Y}<br>
                            Current Direction:  ${direction}<br>
                            Report:  ${cmd.indexOf('REPORT')>=0? [X-2,6-Y,direction]:""}
                            `;
    }
    // execute PLACE cmd
    function place(x,y,d){
        if(isInsideCarPark(x+2,6-y)){
            X = x+2;
            Y = 6-y;
            angle = ANGLE[direction];
            insideCarPark = true;
            setCarPosition(X,Y,d);
        }
    }
    // set car position. called by reset and place 
    function setCarPosition(x,y,d){
        direction = d;
        car.style.top = y*cellLength + 'px';
        car.style.left = x*cellLength + 'px';
        car.style.transform = `rotate(${angle}deg)`;
    }

    function isInsideCarPark(x,y){
        return x>= WEST_BORDER && x<=EAST_BORDER && y>=NORTH_BORDER && y<=SOUTH_BORDER
    }

    // execute LEFT cmd
    function left(){
        angle -= 90;
        direction = Dir[(Dir.indexOf(direction)+3)%4];
        car.style.transform = `rotate(${angle}deg)`;
    }
    // execute RIGHT cmd
    function right(){
        angle +=90;
        direction = Dir[(Dir.indexOf(direction)+1)%4];
        car.style.transform = `rotate(${angle}deg)`;
    }
    // execute MOVE cmd
    function move(){
        var p = {x:X,y:Y,ang:angle};
        switch(direction){
            case 'NORTH': p.y--;p.ang=0;break;
            case 'SOUTH': p.y++;p.ang=180;break;
            case 'EAST' : p.x++;p.ang=-90;break;
            case 'WEST' : p.x--;p.ang=90;break;
            default:break;
        }
        if(isInsideCarPark(p.x,p.y)){
            X = p.x;
            Y = p.y;
            angle = p.ang;
            setCarPosition(X,Y,direction)
        }
    }
     // execute REPORT cmd
    function report(){
        console.log( [X-2,6-Y,direction] );
    }
}

export default Car;

