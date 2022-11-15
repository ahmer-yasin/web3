import { HttpService } from '@nestjs/axios';
import { HttpStatus, Injectable } from '@nestjs/common';
import { GetTotalBalanceDTO } from './dto/get-total.dto';

@Injectable()
export class AppService {
  baseUrl = process.env.URL || 'https://api-goerli.etherscan.io/api';
  apiKey = process.env.APIKEY || 'WPAFJUIZEG3A9M88RXXR1FTD8DSN9HAHGG';
  constructor(private httpService: HttpService) {}
  getHello(): string {
    return 'Hello World!';
  }
  async get(addresses): Promise<any> {
    const url =
      this.baseUrl +
      `?module=account&action=balancemulti&address=${addresses}&apikey=${this.apiKey}`;
    console.log(url);
    try {
      const res = await this.httpService.get(url).toPromise();
      return res.data.result;
    } catch (error) {
      console.log(error);
      return {
        status: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error,
        message: `Internal Server Error`,
      };
    }
  }

  async getTotalBalance(address: GetTotalBalanceDTO): Promise<any> {
    try {
      const addressArray = this.chunk(address.addresses, 20);
      const resultArray = [];
      const response = {
        addresses: [],
        totalBalance: '0',
        status: true,
        statusCode: HttpStatus.OK,
        message: `Successfully get total balance.`,
      };
      for (const key in addressArray) {
        if (Object.prototype.hasOwnProperty.call(addressArray, key)) {
          const element = addressArray[key];
          const data = await this.get(element.toString());
          resultArray.push(...data);
        }
      }
      resultArray.map((item) => {
        const sum = this.add(item.balance, response.totalBalance);
        console.log(sum);
        response.totalBalance = sum;
        response.addresses.push({
          address: item.account,
          balance: item.balance,
        });
      });
      return response;
    } catch (error) {
      return {
        status: false,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        error: error,
        message: `Internal Server Error`,
      };
    }
  }

  chunk = (arr, len) => {
    const chunks = [];
    let i = 0;
    const n = arr.length;
    while (i < n) {
      chunks.push(arr.slice(i, (i += len)));
    }

    return chunks;
  };

  add = (a, b) => {
    let result = '';
    // eslint-disable-next-line no-var
    let carry: any = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || carry) {
      carry += ~~a.pop() + ~~b.pop();
      result = (carry % 10) + result;
      carry = carry > 9;
    }
    return result;
  };
}
