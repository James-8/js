let a=document.getElementsByClassName("l_items");
console.log(a);
for( let i=0;i<a.length;i++){
    if(i%2==0)
    {
        a[i].style.color="red";

    }
    else
    {
        a[i].style.color="black";
    }
}