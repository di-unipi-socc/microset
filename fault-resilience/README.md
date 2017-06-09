# Independent deployability - Fault resilience
This is a web service with return the time since it was start on two endpoints, `/` and `/api`, which return respectively HTML and JSON. The service automatically stops after a configurable time interval do to internal error.

Start the example with:
```
./scripts/create.sh
./scripts/start.sh
```
Then open a browser on `http://127.0.0.1:3000`.

### Output example:

------
uptime: **5.345**

-----

### JSON object
```
{
  uptime: /* time since last start */
}
```

### Default configurations:
- port: `3000`
- fault_rate: `10`
