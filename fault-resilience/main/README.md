# Fault resilience - main app
This is a web service which returns the time since it was started on two endpoints, `/` and `/api`, which return respectively HTML and JSON. The service automatically stops after a configurable time interval to simulate an artificial internal error.


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
