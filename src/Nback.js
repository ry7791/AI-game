import React,{useState} from 'react';

export default function Nback() {
    const [num, setNum] = useState(3);
    const [fin, setFin] = useState(false);
    const [realAnswerd, setRealAnswerd] = useState([]);
    const [myAnswerd, setMyAnswerd] = useState([]);
    const [answerd, setAnswerd] = useState([]);
    const [time,setTime] = useState(1500);
    //const [count,setCount] = React.useState(0);
    //const [answer,setAnswer] = React.useState(0);

var test;
const start = () => {
    let answer = [];
    let realAnswer = [];
    let myAnswer = [];
    let key= -1;
    let count = 0;
    let position=0;
    let flag = 0;
    setFin(false);
    var interval = setInterval(function(){
        
        key= -1;
        count++;
        console.log(count);
        let RandVal = Math.floor(Math.random()*(12)) + 1;
        if(answer.length >=num){
            if(Math.floor(Math.random()*(3)) == 0){
                RandVal = answer[answer.length-num];
            }
        }
        
        answer.push(RandVal);
        document.getElementById(`box${RandVal}`).style.background="white";
        setTimeout(function(){
            document.getElementById(`box${RandVal}`).style.background="#307cc6";
            if(answer.length >=num+1 && flag ==0){
                myAnswer.push("x");
            }
            flag = 0;
        },time-50);

        if(answer.length >=num+1){
            window.onkeydown = (e) =>{
                if(flag === 0){
                    myAnswer.push(e.key);
                    flag = 1;
                }
            }

            if(answer[position] === RandVal){
                realAnswer.push("일치");
                //console.log("일치");
            }
            else{
                realAnswer.push("불일치");
                //console.log("불일치");
            }
            position++;
        }
        console.log("count"+count);
        if(count == 15){ //15번 수행
            setTimeout(function(){
                clearInterval(interval);
                setFin(true);
            },time-50);
            
            
        setAnswerd(answer);
        setRealAnswerd(realAnswer);
        setMyAnswerd(myAnswer);
        }


    },time);

}

const setNumber = (e) =>{
    setNum(Number(e.target.value));
}

    return (
        
        <div>
            <div style={{fontSize:'40px'}}> N-back 게임</div>
            <button style={{position:'relative', right:'10%',float:'right',height:'50px',width:'100px',fontSize:'30px'}}onClick={start}>Start</button>
            <div style={{position:'absolute',fontSize:'40px'}}>N = </div>
            <select value ={num} onChange = {setNumber} style={{position:'absolute', left:'8%',fontSize:'40px'}}>
                <option value={2} >2</option>
                <option value={3} >3</option>
            </select>
            <div style={{position:'absolute', top:'15%',fontSize:'30px'}}>시간 조절</div>
            <select value ={time} onChange = {e=>{setTime(e.target.value)}} style={{position:'absolute', top:'15%',left:'10%',fontSize:'30px'}}>
            <option value={10} >0.01초</option>
                <option value={1000} >1초</option>
                <option value={1500} >1.5초</option>
                <option value={2000} >2초</option>
                <option value={2500} >2.5초</option>
                <option value={3000} >3초</option>
            </select>
            <div style={{position:'absolute', top:'25%',fontSize:'20px'}}>일치하면 1 불일치하면 2 를 키보드로 입력하세요</div>
            <div style={{position:'absolute',left:'35%',width:'30%',top:'10%', height:'70%', border: ''}}>
                <div style={{position:'absolute',width:'100%',height:'25%'}}>
                    <div id="box1" style={{position:'absolute', backgroundColor:'#307cc6', border:'2px solid #307cc6', width:"20%",height:"100%"}}></div>
                    <div id="box2" style={{position:'absolute', backgroundColor:'#307cc6', left:'25%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                    <div id="box3" style={{position:'absolute', backgroundColor:'#307cc6', left:'50%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                    <div id="box4" style={{position:'absolute', backgroundColor:'#307cc6', left:'75%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                </div>
                <div style={{position:'absolute',top:'30%',width:'100%',height:'25%'}}>
                    <div id="box5" style={{position:'absolute', backgroundColor:'#307cc6', border:'2px solid #307cc6', width:"20%",height:"100%"}}></div>
                    <div id="box6" style={{position:'absolute', backgroundColor:'#307cc6', left:'25%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                    <div id="box7" style={{position:'absolute', backgroundColor:'#307cc6', left:'50%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                    <div id="box8" style={{position:'absolute', backgroundColor:'#307cc6', left:'75%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                </div>
                <div style={{position:'absolute',top:'60%',width:'100%',height:'25%'}}>
                    <div id="box9" style={{position:'absolute', backgroundColor:'#307cc6', border:'2px solid #307cc6', width:"20%",height:"100%"}}></div>
                    <div id="box10" style={{position:'absolute', backgroundColor:'#307cc6', left:'25%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                    <div id="box11" style={{position:'absolute', backgroundColor:'#307cc6', left:'50%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                    <div id="box12" style={{position:'absolute', backgroundColor:'#307cc6', left:'75%',border:'2px solid #307cc6', width:"20%", height:"100%"}}></div>
                </div>
            </div>
            <div style={{position:"absolute", bottom:"20%", width:"85%",fontSize:"20px"}}>흰색
            {fin != false && answerd.map((test1,index)=>
                (<div style={{position:"absolute", bottom:"20%",left:`${10+index*5}%`, fontSize:"20px"}}>{test1}</div>)
            )}
            </div>
            <div style={{position:"absolute", bottom:"15%", width:"85%",fontSize:"20px"}}>정답
            {fin != false && num == 2 && realAnswerd.map((test1,index)=>
                (<div style={{position:"absolute", bottom:"20%",left:`${20+index*5}%`, fontSize:"10px"}}>{test1}</div>)
            )}
            {fin != false && num == 3 && realAnswerd.map((test1,index)=>
                (<div style={{position:"absolute", bottom:"20%",left:`${25+index*5}%`, fontSize:"10px"}}>{test1}</div>)
            )}
            </div>
            <div style={{position:"absolute", bottom:"10%",width:"85%", fontSize:"20px"}}>나의답
            {fin != false && num == 2 && myAnswerd.map((test1,index)=>
                (<div style={{position:"absolute", bottom:"20%",left:`${20+index*5}%`, fontSize:"20px"}}>{test1}</div>)
            )}
            {fin != false && num == 3 && myAnswerd.map((test1,index)=>
                (<div style={{position:"absolute", bottom:"20%",left:`${25+index*5}%`, fontSize:"20px"}}>{test1}</div>)
            )}
            </div>

        </div>
    );
};