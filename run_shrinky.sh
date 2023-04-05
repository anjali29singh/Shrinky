docker run --rm -it -p 5000:5000 \
    -e MONGO_CONN="mongodb://admin:admin@localhost:27017" \
    --network=shrinky-app \
    anjalisingh/shrinky  sh