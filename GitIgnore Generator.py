import os, time, _io

log = open(".gitignore", "w", encoding = "utf-8")

def logInput(prompt: str = "", log: _io.TextIOWrapper = log, write_time: bool = True):
    s = input(prompt)
    if isinstance(log, _io.TextIOWrapper):
        if write_time:
            currentTime = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
            log.write("[%s]%s\n" %(currentTime, prompt + s))
        else:
            log.write(prompt + s + "\n")
    return s

def logPrint(s: str = "", log: _io.TextIOWrapper = log, end: str = "\n", print_time: bool = False, write_time: bool = True):
    currentTime = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
    if print_time:
        print("[%s]%s" %(currentTime, s), end = end)
    else:
        print(s, end = end)
    if isinstance(log, _io.TextIOWrapper):
        if write_time:
            log.write("[%s]%s%s" %(currentTime, str(s), end))
        else:
            log.write("%s%s" %(str(s), end))

LF: list[str] = [] #存储大小超过100 MB的文件位置（Stores paths of large files over 100 MiB）
LNF: list[str] = [] #存储文件名超过171个字符长度的文件位置（Stores paths of files with file name longer than 171 characters）
for root, dirs, files in os.walk("Data"):
    for file in files:
        size = os.path.getsize(os.path.join(root, file))
        if size > 104857600: #100 * 1024 * 1024
            LF.append(os.path.join(root, file).replace("\\", "/"))
        if len(file) > 171:
            LNF.append(os.path.join(root, file).replace("\\", "/"))

logPrint("#Vscode个人配置文件（Stores paths of Vscode setting files）\n.vscode/*\n#日志文件（Log files）\nData/Update Logs/*", write_time = False)
if LF:
    logPrint("#文件大小超过100 MB（File size exceeds 100 MiB）", write_time = False)
    for file in LF:
        logPrint(file, write_time = False)
if LNF:
    logPrint("#文件名过长（File name exceeds 171 characters）", write_time = False)
    for file in LNF:
        logPrint(file, write_time = False)
