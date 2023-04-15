function foo(param = "no") { 
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());

/* foo function is set up as default parameter.
If there's no argument provided, it will default as "no"; hence it will return "yes".
If there's argument provided, it will still return "yes"
for bar function, since the arugment is "yes", it will return "no"
final output is "no"
*/