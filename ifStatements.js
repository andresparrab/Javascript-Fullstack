function testZise(num)
{
    if (num < 5)
    {
        return "Tiny";
    }
    else if (num < 10)
    {
    return "Small";
    }
    else if (num < 20)
    {
        return "Large";
    }
    else
    {
        return "Hudge";
    }
}

console.log(testZise(4));