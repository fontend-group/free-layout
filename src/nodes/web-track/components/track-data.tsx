import { Field } from '@flowgram.ai/free-layout-editor';
import { Input, TextArea, Typography } from '@douyinfe/semi-ui';

import { useNodeRenderContext } from '../../../hooks';
import { FormItem } from '../../../form-components';

const { Title } = Typography;

export const TrackDataConfig = () => {
  const { readonly } = useNodeRenderContext();

  return (
    <div style={{ marginBottom: 16 }}>
      <Title heading={6} style={{ margin: '0 0 12px 0' }}>
        埋点数据配置
      </Title>

      <FormItem name='点击ID' required type='string'>
        <Field<string> name='clickId'>
          {({ field }) => (
            <Input
              placeholder='请输入点击ID，如：click_04_09_01_02'
              value={field.value || ''}
              onChange={(value: string) => field.onChange(value)}
              disabled={readonly}
              style={{ marginBottom: 12 }}
            />
          )}
        </Field>
      </FormItem>

      <FormItem name='通用参数' type='string'>
        <Field<string> name='commonParams'>
          {({ field }) => (
            <TextArea
              placeholder='请输入JSON格式的通用参数，如：&#10;{"desc": "提交按钮点击量"}'
              value={field.value || ''}
              onChange={(value: string) => field.onChange(value)}
              disabled={readonly}
              rows={3}
              style={{ marginBottom: 12 }}
            />
          )}
        </Field>
      </FormItem>

      <FormItem name='自定义参数' type='string'>
        <Field<string> name='customParams'>
          {({ field }) => (
            <TextArea
              placeholder='请输入JSON格式的自定义参数，如：&#10;{"formData": "{...}"}'
              value={field.value || ''}
              onChange={(value: string) => field.onChange(value)}
              disabled={readonly}
              rows={3}
              style={{ marginBottom: 12 }}
            />
          )}
        </Field>
      </FormItem>
    </div>
  );
};
