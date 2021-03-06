/**
/**
 * hbook.js
 *
 * @description :: 客户预订信息表
 *
 * Created by libinqi on 2016/7/3.
 */

import {BaseModel} from './BaseModels/BaseModel';

export default class extends BaseModel {
  constructor() {
    super();
  }

  static tableName = 'hbook';
  static attributes = {
        id: {type: 'integer', primaryKey: true, autoIncrement: true},//Id
        h_r_id: {type: 'string', unique: true},//房间ID
        bookname: {type: 'string'},//客户姓名
        booktel: {type: 'string'},//客户电话
        userid: {type: 'string'},//系统操作员ID
        preintime: {type: 'datetime'},//预计入住时间
        preouttime: {type: 'datetime'},//预计离开时间
        lasttime: {type: 'datetime'},//最晚到达时间
        booknum:{type: 'integer'},//预定房间数
        status: {type: 'string'},//预订状态
        create_by: {type: 'string'},//创建人
        create_name: {type: 'string'},//创建人名称
        create_date: {type: 'datetime'},//创建时间
        update_by: {type: 'string'},//修改人
        update_name: {type: 'string'},//修改人名称
        update_date: {type: 'datetime'},//修改时间
        delflag: {type: 'string'},//删除标志
        del_date: {type: 'datetime'}//删除时间

    }
};
