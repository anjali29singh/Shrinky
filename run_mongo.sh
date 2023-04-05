echo "Running mongo db on port 27017"

docker run --rm  -d -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    --mount type=bind,source="$(pwd)"/mongo-db-urls,target=/data/db  \
     --network=shrinky-app \
    mongo:latest