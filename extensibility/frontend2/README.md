# Independent deployability - Extensibility - Frontend2
This is a web service with two endpoints, `/` and `/api`, which return respectively HTML and JSON. In both case it does an HTTP get request to the backed to get a random number and it checks if the number is prime.

### Output example:

------
num: **31239**

prime: **false**

-----

### JSON object
```
{
  num: /* random number */,
  is_prime: /* boolean value */
}
```

### Default configurations:
- port: `3001`
- backend_endpoint: `http://127.0.0.1:3000`
