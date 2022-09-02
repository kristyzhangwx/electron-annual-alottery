import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash',
  },
  publicPath: './',
  routes: [{ path: '/', exact: true, component: '@/pages/index' }],
  fastRefresh: {},
  outputPath: '../dist',
});
