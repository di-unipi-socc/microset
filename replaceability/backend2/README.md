# Independent deployability - Replaceability - Backend2
This is a RESTful web service with a single endpoint which return a JSON object with the following fields:
- `responce`, the number of responses that the server replay
- `random`, a **random odd number** from 1 to 1000000
- `uptime`, seconds since the service start


### Output example:
```
{
    "responce": 3,
    "random": 31238,
    "uptime": 43.433
}
```

### Default configuration:
- port: `3000`
