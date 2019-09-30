module.exports = function check(str, bracketsConfig) {

  let confmap  = new Map (bracketsConfig);
  let mas=[];
  for (let s of str)
  {
    if (confmap.has(s))
    {
        if ((confmap.get(s) == s) && (mas.length!=0))
        {
          let samebracket = mas.pop();
          if (samebracket != s)
          {
            mas.push(samebracket);
            mas.push(s);
          }
        }
        else 
          mas.push(s);
    }
    else 
    {
      if ( (mas.length == 0) || (confmap.get(mas.pop()) != s))
        return false;
    }
  }
  if (mas.length == 0) 
    return true; 
  else
    return false;
}
