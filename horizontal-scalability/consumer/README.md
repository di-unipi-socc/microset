# Horizontal Scalability - Consumer
This is node.js scripts which consume a numbers from the backend and it evaluates the sin function for each number in the sequence 1 to the number got from the backed. The script stops when it receives `EOF` from the producer.


### Default configurations:
- producer_endpoint: `http://127.0.0.1:3000`
