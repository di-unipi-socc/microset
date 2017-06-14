# Horizontal Scalability - Consumer
This is a node.js script which consumes a number from the backend and evaluates the `sin` function for each number in the sequence 1 to the number got from the backend. The script stops when it receives `EOS` from the producer.

The consumer sends a UUID to the producer, so that the producer can distinguish each consumer call.

### Default configurations:
- producer_endpoint: `http://127.0.0.1:3000`
