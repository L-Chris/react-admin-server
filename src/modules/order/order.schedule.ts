import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { Cron, NestSchedule } from 'nest-schedule';

@Injectable()
export class OrderSchedule extends NestSchedule {
  constructor () {
    super()
  }

  @Cron('0 0 18 * * ?', {
    tz: 'Asia/Shanghai'
  })
  async notice () {
    await axios.post('https://oapi.dingtalk.com/robot/send?access_token=', {
      msgtype: 'link',
      link: {
        text: '1. 打开链接，查看菜单；\n2. 选择店铺和菜品并提交',
        title: '今天加班的童鞋记得点餐哈~',
        picUrl: '',
        messageUrl: 'http://www.baidu.com'
      }
    })
  }
}