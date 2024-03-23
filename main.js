import { createRoot } from './core/react-dom.js';
import App from './app.jsx'

// 渲染你的 React 组件
const root = createRoot(document.getElementById('app'));
root.render(App);
