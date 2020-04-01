let startButton = document.querySelector('#start'),
    sMin = document.querySelector('#sMin'),
    sPlus = document.querySelector('#sPlus'),
    mMin = document.querySelector('#mMin'),
    mPlus = document.querySelector('#mPlus'),
    time = document.querySelector('#time')

let mm = 0, m = 0, ss = 0, s = 0,
    innerTime = '' + mm + m + ':' + ss + s,
    isWork = false

sPlus.addEventListener('click',()=>{
    if (isWork) return 
    if (s < 10) s++ 
    if (s > 9) {
        ss++
        s = 0
    } 
    innerTime = '' + mm + m + ':' + ss + s
    time.innerText = innerTime
})

sMin.addEventListener('click',()=>{
    if (isWork) return 
    if (s > 0 || ss > 0){
            if (s < 10 && s != -1) s--
        if (s == -1) {
            ss--
            s = 9
        }
        innerTime = '' + mm + m + ':' + ss + s
        time.innerText = innerTime
    }
})

mPlus.addEventListener('click',()=>{
    if (isWork) return 
    if (m < 10) m++ 
    if (m > 9) {
        mm++
        m = 0
    } 
    innerTime = '' + mm + m + ':' + ss + s
    time.innerText = innerTime
})

mMin.addEventListener('click',()=>{
    if (isWork) return 
    if (m > 0 || mm > 0){
        if (m < 10 && m != -1) m--
        if (m == -1) {
            mm--
            m = 9
        }
        innerTime = '' + mm + m + ':' + ss + s
        time.innerText = innerTime
    }
})

startButton.addEventListener('click', function(){
    let timer = setInterval(()=>{ 
        if(s == 0 && ss!= 0){
            ss--
            s = 10
        }
        if(ss == 0 && m > 0 && s == 0){
            m--
            ss = 5
            s = 10
        }
        if(m == 0 && ss == 0 && s == 0 && mm > 0){
            mm--
            m = 9
            ss = 5
            s = 10
        }
        s--
        innerTime = '' + mm + m + ':' + ss + s
        time.innerText = innerTime

        if (s == 0 && ss == 0 && m == 0 && mm == 0){
            clearInterval(timer)
            isWork = false
        } 
    }, 1000)   
})