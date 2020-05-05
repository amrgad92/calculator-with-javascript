let input = document.getElementById("input");

function addnumber(num)
{
    input.value += num
}
function equal()
{
    if(eval(input.value) < 0)
    {
        window.alert("sorry this is a negative number")
        document.getElementById("input").value = ""
    }
    else
    {
        input.value = eval(input.value)
    }
}

function del()
{
    document.getElementById("input").value = ""
}