/**
 * 页面的 main.js
 * @file Created on Thu Nov 15 2018
 * @author wangyongqing <wangyongqing01@baidu.com>
 */

import './styles/index.less';
import {defineComponent} from 'san';
import App from '~entry';
const AppC = defineComponent(App);
const app = new AppC();
app.attach(document.getElementById('app'));