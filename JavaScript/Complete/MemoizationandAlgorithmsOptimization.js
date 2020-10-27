{
  pow.calculated = {};

  function pow(x, y) {
    let strinVersion = x + "^" + y;
    console.log("string version is : " + strinVersion);
    console.log(this);

    // this will look if the calculation is alreade calculate, for not calculate again, just return the answer
    if (strinVersion in pow.calculated) {
      console.log("Found");
      return pow.calculated[strinVersion];
    }

    //if the calculation is not found in the object pow.calculated then calculate and save the new value and save it in the object for later use
    console.log("CALCULATING....");

    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    pow.calculated[strinVersion] = total;
    // console.log(pow.calculated);
    return total;
  }
}

pow(3, 2);
pow(3, 3);
pow(10, 2);
pow(3, 3);
pow(10, 4);
