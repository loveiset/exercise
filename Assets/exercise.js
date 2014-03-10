#pragma strict

function Start () {
    var i:int = 0;
    while(i<10)
    {
        print(i);
        i++;
    }
    for(var b:int =0;b<10;++b)
    {
        print(b);
    }
var j:int = 0;
do
{
    print(j);
    ++j;
}while(j<10);
{
    var nameVarry:String[]=["lucy","tom","jack"];
    for(var str:String in nameVarry)
    {
        print(str);
    }
}


}

function Update () {

}