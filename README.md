build
```bash
docker build . -t ctnelson1997/cs571-su24-hw1-api
docker push ctnelson1997/cs571-su24-hw1-api
```

run 
```bash
docker pull ctnelson1997/cs571-su24-hw1-api
docker run --name=cs571_su24_hw1_api -d --restart=always -p 38101:38101 -v /cs571/su24/hw1:/cs571 ctnelson1997/cs571-su24-hw1-api
```

run fa
```bash
docker pull ctnelson1997/cs571-su24-hw1-api
docker run --name=cs571_fa_su24_hw1_api -d --restart=always -p 39101:38101 -v /cs571_fa/su24/hw1:/cs571 ctnelson1997/cs571-su24-hw1-api
```