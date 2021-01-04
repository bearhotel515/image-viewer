# image-viewer

# 功能
```
<ul>
  <li onclick="view.scale(1.5)">放大</li>
  <li onclick="view.scale(0.5)">缩小</li>
  <li onclick="view.setOriginalSize()">1:1</li>
  <li onclick="view.hRevert()">水平反转</li>
  <li onclick="view.vRevert()">垂直翻转</li>
  <li onclick="view.rotate(Math.PI/4)">右旋转</li>
  <li onclick="view.rotate(-Math.PI/4)">左旋转</li>
</ul>
```
# 使用

## 方法1、页面直接引用js文件
```
<script src="viewer.1.0.0.js"></script>
```
## 方法2、import
```
import Viewer from 'Viewer'
```
## 例子
```
详见examples
```
## 注意
```
在例子页面中，要将./XXXX.jpg 替换成可用图片即可
```
