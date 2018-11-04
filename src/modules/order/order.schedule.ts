import { Injectable } from '@nestjs/common';
import { Cron, NestSchedule } from 'nest-schedule';

@Injectable()
export class OrderSchedule extends NestSchedule {
  constructor () {
    super()
  }

  @Cron('0 0 18/23 * * ?', {
    tz: 'Asia/Shanghai'
  })
  notice () {
    console.log(1)
  }
}