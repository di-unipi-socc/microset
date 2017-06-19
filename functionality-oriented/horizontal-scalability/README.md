# Horizontal scalability
Start the example with:
```
./producer/scripts/create.sh
./producer/scripts/start.sh
./consumer/scripts/create.sh
./consumer/scripts/start.sh &;./consumer/scripts/start.sh &
```
Then open a browser on `http://127.0.0.1:3000`.


Configurations are on `consumer/config/default.toml` for the consumer and `producer/config/default.toml` for the producer.
