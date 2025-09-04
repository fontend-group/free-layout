/*
 * @Author: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @Date: 2025-09-04 10:25:34
 * @LastEditors: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @LastEditTime: 2025-09-04 10:45:29
 * @FilePath: /free-layout-main/src/nodes/web-track/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { nanoid } from 'nanoid';

import { FlowNodeRegistry } from '../../typings';
import iconWebTrack from '../../assets/icon-start.jpg'; // 临时使用start图标
import { formMeta } from './form-meta';
import { WorkflowNodeType } from '../constants';

let index = 0;

export const WebTrackNodeRegistry: FlowNodeRegistry = {
  type: WorkflowNodeType.WebTrack,
  meta: {
    size: {
      width: 360,
      height: 380,
    },
  },
  info: {
    icon: iconWebTrack,
    description: '埋点节点，支持上传指定仓库，支持通用参数、自定义参数上传',
  },
  onAdd() {
    return {
      id: `web_track_${nanoid(5)}`,
      type: 'web-track',
      data: {
        title: `埋点_${++index}`,
        // 日志库配置
        logConfig: {
          logstore: 'xw-fe-growth-h5',
          business_type: 'growth-h5',
          env_type: 'test',
        },
        // 埋点数据配置
        clickId: '',
        // 通用参数
        commonParams: '',
        // 自定义参数
        customParams: '',
        // 输入参数配置
        inputsValues: {
          clickId: { type: 'constant', content: '' },
          commonParams: { type: 'constant', content: '' },
          customParams: { type: 'constant', content: '' },
        },
        inputs: {
          type: 'object',
          properties: {
            clickId: {
              type: 'string',
              title: '点击ID',
              description: '埋点的唯一标识',
            },
            commonParams: {
              type: 'object',
              title: '通用参数',
              description: '通用的埋点参数',
            },
            customParams: {
              type: 'object',
              title: '自定义参数',
              description: '自定义的埋点参数',
            },
          },
        },
        // 输出结果配置
        outputs: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              title: '成功状态',
              description: '埋点发送是否成功',
            },
            message: {
              type: 'string',
              title: '返回消息',
              description: '埋点发送的结果消息',
            },
            timestamp: {
              type: 'number',
              title: '时间戳',
              description: '埋点发送的时间戳',
            },
          },
        },
      },
    };
  },
  formMeta: formMeta,
};
