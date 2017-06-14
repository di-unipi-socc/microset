# Independent deployability - Extensibility - Frontend1
This is a web service with two endpoints, `/` and `/api`, which return respectively HTML and JSON. In both cases it performs an HTTP GET request to the backend to get a number, then it computes its largest prime factor.

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
