var a = prompt("Enter String:")
if(a.startsWith("www."))
    document.writeln(`${a} is a Domain Name`)
else if(a.endsWith("@gmail.com"))
    document.writeln(`'${a}' is a gmail address`)
else
    document.writeln(` '${a}' is a Normal String`)