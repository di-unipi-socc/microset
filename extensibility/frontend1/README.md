# Independent deployability - Extensibility - Frontend1
This is a web service with two endpoints, `/` and `/api`, which return respectively HTML and JSON. In both case it does an HTTP get request to the backed to get a random number and it evaluates the largest prime factor of it.

### Output example:

------
num: **31239**

LPF: **89**

-----

### JSON object
```
{
  num: /* random number */,
  prime: /* largest prime factor */
}
```

### Default configurations:
- port: `3001`
- backend_endpoint: `http://127.0.0.1:3000`
