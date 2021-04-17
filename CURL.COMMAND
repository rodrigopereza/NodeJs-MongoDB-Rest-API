curl -i -X POST -H "Content-Type: application/json" -X POST -d "{ \"name\": \"millos\",\"city\": \"usa\",\"conference\": \"nfc\"}" http://localhost:3000/api/team

curl -i -X PUT -H "Content-Type: application/json" -d "{ \"name\": \"Millos\"}" http://localhost:3000/api/team/5f1b62b4529ef0154ceddd5a

curl -i -X DELETE -H "Content-Type: application/json" http://localhost:3000/api/team/5f1b5f6c529ef0154ceddd55