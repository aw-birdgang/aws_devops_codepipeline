
## Build
```bash
docker build -f Dockerfile.dev -t gpex-api-image .


```


## Configure
```bash
aws configure list


```


## auth & push
```bash
aws ecr get-login-password

aws ecr get-login-password \
    --region <region> \
| docker login \
    --username AWS \
    --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
    
docker tag <repository> <aws_account_id>.dkr.ecr.<region>.amazonaws.com/(repository)

docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/(repository)
```
