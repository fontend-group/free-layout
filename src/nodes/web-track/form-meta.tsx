/*
 * @Author: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @Date: 2025-09-02 16:09:25
 * @LastEditors: w_zhaohongyang8 w_zhaohongyang8@xiwang.com
 * @LastEditTime: 2025-09-04 10:45:33
 * @FilePath: /demo-free-layout/src/nodes/web-track/form-meta.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { FormMeta, FormRenderProps } from '@flowgram.ai/free-layout-editor';
import {
  createInferInputsPlugin,
  DisplayOutputs,
} from '@flowgram.ai/form-materials';
import { Divider } from '@douyinfe/semi-ui';

import { FormHeader, FormContent } from '../../form-components';
import { WebTrackNodeJSON } from './types';
import { TrackDataConfig } from './components/track-data';
import { TrackConfig } from './components/track-config';
import { defaultFormMeta } from '../default-form-meta';

export const FormRender = ({ form }: FormRenderProps<WebTrackNodeJSON>) => (
  <>
    <FormHeader />
    <FormContent>
      <TrackConfig />
      <Divider />
      <TrackDataConfig />
      <Divider />
      <DisplayOutputs displayFromScope />
    </FormContent>
  </>
);

export const formMeta: FormMeta = {
  render: (props) => <FormRender {...props} />,
  effect: defaultFormMeta.effect,
  validate: defaultFormMeta.validate,
  plugins: [
    createInferInputsPlugin({ sourceKey: 'inputsValues', targetKey: 'inputs' }),
  ],
};
