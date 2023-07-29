/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, BrowserWindow, ipcMain, Menu } from 'electron';



const ROOT_PATH = path.join(app.getAppPath(), '../');

// 👇 监听渲染进程发的消息并回复
ipcMain.on('get-root-path', (event, arg) => {
  event.reply('reply-root-path', ROOT_PATH);
});

function isDev() {
  // 👉 还记得我们配置中通过 webpack.DefinePlugin 定义的构建变量吗
  return process.env.NODE_ENV === 'development';
}

function createWindow() {
  // 创建浏览器窗口
  Menu.setApplicationMenu(null) // null值取消顶部菜单栏
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
      preload: path.resolve(__dirname, './app/main/preload.ts'),//preload.js 文件路径
      contextIsolation: false,//官方文档默认为true,
    },
  });

  if (isDev()) {
    // 👇 看到了吗，在开发环境下，我们加载的是运行在 7001 端口的 React
    console.log(11);
    
    mainWindow.loadURL(`http://127.0.0.1:7002`);
  } else {
    console.log(22);
    
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
  }
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
