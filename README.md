# Nodejs Technical test

## Stay in touch

- Author - [Rana Ahmer Yasin](https://github.com/ahmer-yasin)
- Linkedin - [Linkedin](https://www.linkedin.com/in/ahmeryasin/)


## Description
- web3 project to call blockchain based apis and get balance from blockchain test network.

## Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [Nestjs](https://docs.nestjs.com/)

## Steps to run
```bash
- git clone git@github.com:ahmer-yasin/web3.git
- cd web3
- cp .env.example .env
- change url and api key according to your account
- npm install
- npm run start:dev
```

## Test api
- [click here](http://localhost:4000/api#/default/AppController_getTotalBalance) to test api
- use Example address value of georli network as body parameters

# Example body
```
 {
    "addresses": [
        "0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
        "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
        "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
        "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4"
    ]
}

```

## Expected output

```
{
    "addresses": [
        {
            "address": "0x39a582bE8039a526Bdf4730e4D1E3E0fE1Bc811b",
            "balance": "1000000063000"
        },
        {
            "address": "0x902c38F2bcddF95E7BCE50A14515B4B62F502Bf2",
            "balance": "212469988139460612"
        },
        {
            "address": "0xBcFE52fEF72A70AD09245e40AEAcCE4B1e851320",
            "balance": "42000"
        },
        {
            "address": "0x0560de6E5a452a00F58a90cb5501C18e77EB91B4",
            "balance": "0"
        }
    ],
    "totalBalance": "212470988139565612",
    "status": true,
    "statusCode": 200,
    "message": "Successfully get total balance."
}
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

