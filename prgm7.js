weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]



//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

op = {}
for( data of weatherData){
    dist = data.district
    curTemp = data.weather
    if(dist in op){
        oldTemp = op[dist]
        if(oldTemp>curTemp){
            op[dist] = oldTemp
        }
        else{
            op[dist] = curTemp
        }
    }
    else{
        op[dist] = curTemp
    }
}
console.log(op);


console.log('-------------------------------');


//
