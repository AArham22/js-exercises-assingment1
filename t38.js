let city ,country ;

function describe_city(city , country = "pakistan" ) {
    console.log(city + " is in " + country);
}

describe_city("karachi");
describe_city("lahore");
describe_city("tokyo","japan");