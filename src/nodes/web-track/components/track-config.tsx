/*
 * @Author: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @Date: 2025-09-04 10:25:34
 * @LastEditors: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @LastEditTime: 2025-09-04 10:45:45
 * @FilePath: /free-layout-main/src/nodes/web-track/components/track-config.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Field } from '@flowgram.ai/free-layout-editor';
import { Input, Select, Typography } from '@douyinfe/semi-ui';

import { useNodeRenderContext } from '../../../hooks';
import { FormItem } from '../../../form-components';

const { Title } = Typography;

export const TrackConfig = () => {
  const { readonly } = useNodeRenderContext();

  return (
    <div style={{ marginBottom: 16 }}>
      <Title heading={6} style={{ margin: '0 0 12px 0' }}>
        日志库配置
      </Title>

      <FormItem name='日志库' required type='string'>
        <Field<string> name='logConfig.logstore'>
          {({ field }) => (
            <Input
              placeholder='请输入日志库名称，如：xw-fe-growth-h5'
              value={field.value || ''}
              onChange={(value) => field.onChange(value)}
              disabled={readonly}
              style={{ marginBottom: 12 }}
            />
          )}
        </Field>
      </FormItem>

      <FormItem name='项目标识' required type='string'>
        <Field<string> name='logConfig.business_type'>
          {({ field }) => (
            <Input
              placeholder='请输入项目唯一标识，如：growth-h5'
              value={field.value || ''}
              onChange={(value) => field.onChange(value)}
              disabled={readonly}
              style={{ marginBottom: 12 }}
            />
          )}
        </Field>
      </FormItem>

      <FormItem name='环境类型' required type='string'>
        <Field<'production' | 'test'> name='logConfig.env_type'>
          {({ field }) => (
            <Select
              value={field.value || 'test'}
              onChange={(value) =>
                field.onChange(value as 'production' | 'test')
              }
              disabled={readonly}
              style={{ width: '100%' }}
              optionList={[
                { label: '测试环境', value: 'test' },
                { label: '生产环境', value: 'production' },
              ]}
            />
          )}
        </Field>
      </FormItem>
    </div>
  );
};
