# Horizontal Scalability - Producer
This is a web service with three ends point `/`, `/api` and `/consume`, the former two return information on the element present in the system, instead the latter it is used to consume an element. After the service starts it creates a virtual list of random element from a configurable random seed.

### Output example:

------
elements: **2345/100000**

time: **23.456**

-----

### JSON Objects
The `/api` endpoint return a JSON object with the following fields:
- `total`, total number of element in the system
- `left`, elements left to consume
- `time`, time spend to consume the elements
- `consumers`, number of consumers

The `/consume` endpoint return a JSON object with the following fields:
- `value`, a number or `EOS`
- `info`, and object with the state of the producer


### Default configuration:
- port: `3000`
- random_seed: `8n9d0mu1xz7anyd`
- N: `10000`
- max_value: `1000`
