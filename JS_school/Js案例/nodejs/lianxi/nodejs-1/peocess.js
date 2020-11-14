// 全局对象global的函数2：process进程
console.log(process.arch);	//获取CPU架构类型，使用后端开发检测服务器架构类型
console.log(process.platform);	//获取操作系统类型
console.log(process.env);	//获取操作系统环境变量path
console.log(process.cwd	);	//获取当前所在工作目录
console.log(process.execPath);	//获取当前进程的可执行文件的绝对路径：
console.log(process.versions);	//获取Node.js版本信息以及其依赖包版本信息
console.log(process.uptime());	//获取Node.js解释器运行时间(s)
console.log(process.memoryUsage());	//获取内存信息
console.log(process.pid	);	//获取进程ID号---任务管理器--查看PID
//console.log(process.kill(pid));	//向指定进程ID号发送退出信号 输入相应的PID号
