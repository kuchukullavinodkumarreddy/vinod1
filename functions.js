console.log("Welcome to javascript functions");



function addition()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    sum=a+b;
    document.getElementById('result1').value=sum;
    console.log("the sum is"+sum);
}

function substraction()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    sub=a-b;
    document.getElementById('result2').value=sub;
    console.log("the substraction is"+sub);
}

function multiplication()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    mul=a*b;
    document.getElementById('result3').value=mul;
    console.log("the multiplication is"+mul);
}

function division()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    div=a/b;
    document.getElementById('result4').value=div;
    console.log("the division is"+div);
}
function modulous()
{
    a=parseInt(document.getElementById('txt1').value);
    b=parseInt(document.getElementById('txt2').value);
    mod=a%b;
    document.getElementById('result5').value=mod;
    console.log("the modulous is"+mod);
}


addition();

substraction();

multiplication();

division();

modulous();




