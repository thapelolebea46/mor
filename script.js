function calculate2()
{
    let x1=document.getElementById("a1").value;
    let y1=document.getElementById("b1").value;
    let x2=document.getElementById("a2").value;
    let y2=document.getElementById("b2").value;
    let z1=document.getElementById("c1").value;
    let z2=document.getElementById("c2").value;




    let determinant=x1*y2-x2*y1;
    let xDeterminant=z1*y2-z2*y1;
    let yDeterminant=x1*z2-x2*z1;

    let xValue=xDeterminant/determinant;
    let yValue=yDeterminant/determinant;
    document.getElementById("xValue2").innerHTML="The value of X is: <span>"+xValue+"</span><br>";
    document.getElementById("yValue2").innerHTML="The value of Y is: <span>"+yValue+"</span>";




    console.log("The main determinant: ",determinant);
    console.log("The x determinant: ",xDeterminant);
    console.log("The y determinant: ",yDeterminant);
   
}
function calculate3()
{
    let x1=document.getElementById("x1").value;
    let y1=document.getElementById("y1").value;
    let z1=document.getElementById("z1").value;
    let k1=document.getElementById("k1").value;

    let x2=document.getElementById("x2").value;
    let y2=document.getElementById("y2").value;
    let z2=document.getElementById("z2").value;
    let k2=document.getElementById("k2").value;
     
    let x3=document.getElementById("x3").value;
    let y3=document.getElementById("y3").value;
    let z3=document.getElementById("z3").value;
    let k3=document.getElementById("k3").value;



    let determinant=x1*(y2*z3-z2*y3)+(-1)*y1*(x2*z3-z2*x3)+z1*(x2*y3-y2*x3);
    let xDeterminant=k1*(y2*z3-z2*y3)+(-1)*y1*(k2*z3-z2*k3)+z1*(k2*y3-y2*k3);
    let yDeterminant=x1*(k2*z3-z2*k3)+(-1)*k1*(x2*z3-z2*x3)+z1*(x2*k3-k2*x3);
    let zDeterminant=x1*(y2*k3-k2*y3)+(-1)*y1*(x2*k3-k2*x3)+k1*(x2*y3-y2*x3);

    let xValue=xDeterminant/determinant;
    let yValue=yDeterminant/determinant;
    let zValue=zDeterminant/determinant;
    document.getElementById("xValue3").innerHTML="The value of X is: <span>"+xValue+"</span><br>";
    document.getElementById("yValue3").innerHTML="The value of Y is: <span>"+yValue+"</span><br>";
    document.getElementById("zValue3").innerHTML="The value of Z is: <span>"+zValue+"</span>";


    console.log("The determinant is: ",determinant);
    console.log("The x determinant is: ",xDeterminant);
    console.log("The y determinant is: ",yDeterminant);
    console.log("The z determinant is: ",zDeterminant);


}
function show2()
{
            document.getElementById("sys1").style.display="block";
            document.getElementById("sys2").style.display="none";

}
function show3()
{
    document.getElementById("sys2").style.display="block";
    document.getElementById("sys1").style.display="none";

}