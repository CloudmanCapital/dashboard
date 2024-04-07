git remote set-url origin https://github.com/CloudmanCapital/dashboard
npm run deploy
git remote set-url origin https://github.com/BANANAPEEL202/cloudman-capital-frontend

#To start the initial digital ocean
sudo docker run --name postgres -e POSTGRES_DB=cloudmancapital -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres
sudo docker exec -it postgres psql -U postgres 
SET TIME ZONE 'UTC';
CREATE DATABASE cloudmancapital

cd CloudmanCapital
swift run App migrate

#Reboot server
ssh vapor@164.90.149.18

sudo docker run postgres
cd CloudmanCapital
swift run App serve --hostname 0.0.0.0 --port 8080
