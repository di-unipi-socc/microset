# Independent deployability - Replaceability - Backend1
This is a RESTful web service with a single endpoint which returns a JSON object with the following fields:
- `response`, the number of responses so far
- `random`, a **random even number** from 1 to 1000000
- `uptime`, seconds since the service start


### Output example:
```
{
    "response": 3,
    "random": 31239,
    "uptime": 43.433
}
```

### Default configuration:
- port: `3000`
