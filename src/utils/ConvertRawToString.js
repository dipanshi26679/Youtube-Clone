export const ConvertRawToString = (labelValue,isSub = false)=>{

const num= Math.abs(Number(labelValue));


if(num>=1.0e9){
    return(num/1.0e6).toFixed(0) + "B";
}

if(num>=1.0e3){
    return(num/1.0e3).toFixed(isSub ? 2 :0) + "K";
}



return num.toString();
}