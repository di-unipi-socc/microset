# Independent deployability - Extensibility
Start the example with:
```
./backend/scripts/create.sh
./backend/scripts/start.sh

./frontend1/scripts/create.sh
./frontend1/scripts/start.sh

./frontend2/scripts/create.sh
./frontend2/scripts/start.sh
```
Then open a browser on `http://127.0.0.1:3001` for frontend1 and on `http://127.0.0.1:3002` for frontend2.


Configuration files are on:
- `backend/config/default.toml`
- `frontend1/config/default.toml`
- `frontend2/config/default.toml`
