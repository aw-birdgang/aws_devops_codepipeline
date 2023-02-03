
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



## AWS network config
```bash
//
VPC
devOps-vpc
IPv4 CIDR : 10.0.0.0/16
Tenancy : Default
enable DNS hostnames

//
SUBNET
10.0.1.0/24 ~ 10.0.6.0/24
a zone & c zone
public-a1-subnet : 10.0.1.0/24
public-c1-subnet : 10.0.2.0/24
private-a1-subnet : 10.0.3.0/24
private-a1-subnet : 10.0.4.0/24
private-a2-subnet : 10.0.5.0/24
private-a2-subnet : 10.0.6.0/24

//
INTERNET GATEWAY 생성 후 VPC 에 attach

//
RAUTE TABLE
dev-public-subnet-rt 생성 후 subnet 에 associations 
route table 에 routes destination 에 internet gateway 추가.
dev-private-subnet-a1-rt 생성 후 subnet associations 에 private-a1-subnet 추가.
dev-private-subnet-c1-rt 생성 후 subnet associations 에 private-c1-subnet 추가.
dev-private-subnet-a2-rt 생성 후 subnet associations 에 private-a2-subnet 추가.
dev-private-subnet-c2-rt 생성 후 subnet associations 에 private-c2-subnet 추가.

```

## AWS ec2
```bash


```
