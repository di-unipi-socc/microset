# Independent deployability - Replaceability
Start the example with:
```
./backend1/scripts/create.sh
./backend1/scripts/start.sh

./frontend/scripts/create.sh
./frontend/scripts/start.sh

./backend1/scripts/stop.sh

./backend2/scripts/create.sh
./backend2/scripts/start.sh
```
Then open a browser on `http://127.0.0.1:3001` for frontend.


Configuration files are on:
- `backend1/config/default.toml`
- `backend2/config/default.toml`
- `frontend/config/default.toml`
