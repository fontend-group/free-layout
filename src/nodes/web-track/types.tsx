import { FlowNodeJSON } from '@flowgram.ai/free-layout-editor';
import { IFlowValue, IJsonSchema } from '@flowgram.ai/form-materials';

// 埋点节点JSON数据结构
export interface WebTrackNodeJSON extends FlowNodeJSON {
  type: 'web-track';
  data: {
    title: string;
    // 日志库配置
    logConfig: {
      logstore: string;
      business_type: string;
      env_type: 'production' | 'test';
    };
    // 埋点数据配置
    clickId: string;
    // 通用参数（JSON字符串）
    commonParams?: string;
    // 自定义参数（JSON字符串）
    customParams?: string;
    // 输入参数配置
    inputsValues: Record<string, IFlowValue>;
    inputs: IJsonSchema<'object'>;
    // 输出结果配置
    outputs: IJsonSchema<'object'>;
  };
}
