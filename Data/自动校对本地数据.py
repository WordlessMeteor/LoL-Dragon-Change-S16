import datetime, json, os, re, time, _io
from typing import Any, IO

cwd: str = os.getcwd()
if cwd.endswith("Data"): #允许用户直接双击脚本（Users are allowed to double click this program）
    os.chdir("..")
os.makedirs("Data/Update Logs", exist_ok = True)
currentTime: str = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime())
log: IO[Any] = open(f"Data/Update Logs/{currentTime}.log", "w", encoding = "utf-8")

def getISOTime(timestamp: float) -> str:
    dt: datetime.datetime = datetime.datetime.fromtimestamp(timestamp, tz = datetime.timezone.utc)
    return dt.isoformat(timespec = "milliseconds").replace("+00:00", "Z")

def logInput(prompt: str = "", log: _io.TextIOWrapper = log, write_time: bool = True) -> str:
    s: str = input(prompt)
    if isinstance(log, _io.TextIOWrapper):
        if write_time:
            currentTime_millisecond: str = getISOTime(time.time())
            log.write("[%s]%s\n" %(currentTime_millisecond, prompt + s))
        else:
            log.write(prompt + s + "\n")
    return s

def logPrint(s: object = "", log: _io.TextIOWrapper = log, end: str = "\n", print_time: bool = False, write_time: bool = True) -> None:
    currentTime: float = time.time()
    currentTime_second: str = time.strftime("%Y-%m-%d %H-%M-%S", time.localtime(currentTime))
    currentTime_millisecond: str = getISOTime(currentTime)
    if print_time:
        print("[%s]%s" %(currentTime_second, s), end = end, flush = end == "\r")
    else:
        print(s, end = end, flush = end == "\r")
    if isinstance(log, _io.TextIOWrapper):
        if write_time:
            log.write("[%s]%s%s" %(currentTime_millisecond, str(s), "\n" if end == "\r" else end))
        else:
            log.write("%s%s" %(str(s), "\n" if end == "\r" else end))

#第一部分：设置参数（Part 1: Set parameters）
step: int = 1 #步骤（Step）
extract_dir: str = "" #自行提取的目录（The directory which the user extracts game file into by themselves）
mode: str = "" #运行模式（Mode）
version: str = "" #版本文件夹（Version folder）
manual_folders: list[str] = [] #自行指定的文件夹列表（A list of folders manually specified）
while True:
    if step == 0:
        break
    elif step == 1:
        logPrint("第一步：请输入一个通过CDTB或者Obsidian等工具提取并转换后的客户端文件存放的文件夹路径：\nStep 1: Please input the path of a folder that contains the extracted and converted client files using tools like CDTB or Obsidian:")
        while True:
            extract_dir = logInput()
            if extract_dir == "":
                continue
            elif extract_dir == chr(4):
                step -= 2
                break
            elif not os.path.exists(extract_dir):
                logPrint("目录不存在。请重新输入。\nPath not found. Please try again.")
            elif not os.path.isdir(extract_dir):
                logPrint("请输入一个文件夹。\nPlease enter a folder.")
            else:
                extract_dir = extract_dir.replace("\\", "/")
                break
    elif step == 2:
        logPrint("第二步：请选择运行模式。\nStep 2: Please select a mode.\n1\t全局校对（Global check）\n2\t自行指定（Specify manually）")
        while True:
            mode: str = logInput()
            if mode == "":
                continue
            elif mode[0] == "0":
                step -= 2
                break
            elif mode[0] == "1":
                mode = "1"
                break
            elif mode[0] == "2":
                mode = "2"
                break
            else:
                logPrint("你的输入有误！请重新输入。\nERROR input! Please try again.")
    elif step == 3:
        logPrint("第三步：请选择版本文件夹。\nStep 3: Please select a version folder.\n1\t正式服（Latest）\n2\t测试服（PBE）")
        while True:
            version_str: str = logInput()
            if version_str == "":
                continue
            elif version_str[0] == "0":
                step -= 2
                break
            elif version_str[0] == "1":
                version = "latest"
                break
            elif version_str[0] == "2":
                version = "pbe"
                break
            else:
                logPrint("你的输入有误！请重新输入。\nERROR input! Please try again.")
    elif step == 4:
        if mode == "2":
            logPrint("第四步：请逐个输入要更新的CommunityDragon文件夹的地址，输入-1以退出循环：\nStep 4: Please input the URLs of CommunityDragon folders to update one by one. Enter -1 to exit the loop:", write_time = False) #因为在设计上，用户只有在运行了离线数据更新脚本之后，才会产生比对失败的文件和文件夹，所以这些文件和文件夹一定是以链接的形式出现的（Because by design, only when the user runs Offline Data Updating Program will there possibly be files and folders that fail to be compared, these files and folders must appear as links）
            while True:
                cdragon_folder: str = logInput()
                if cdragon_folder == "":
                    continue
                elif cdragon_folder == chr(4):
                    manual_folders.clear()
                    step -= 2
                    break
                elif cdragon_folder == "-1":
                    break
                else:
                    cdragon_folder = cdragon_folder if cdragon_folder.endswith("/") else cdragon_folder[:-len(os.path.basename(cdragon_folder))]
                    #下面对链接进行处理（Handle the link）
                    manual_folder: str = cdragon_folder.replace("https://raw.communitydragon.org/", "") #去除主机（Remove the host）
                    manual_folder = manual_folder[manual_folder.index("/") + 1:] #去除版本文件夹（Remove the version folder）
                    if manual_folder == "":
                        manual_folder = "."
                    else:
                        manual_folder = re.sub(r"^game/", "Game/DATA/FINAL/", manual_folder)
                        manual_folder = re.sub(r"^plugins/", "Plugins/", manual_folder)
                    manual_folders.append(manual_folder)
            manual_folders = sorted(set(manual_folders))
    elif step == 5:
        break
    else:
        logPrint("步骤异常！\nStep ERROR!", write_time = False)
    step += 1

#第二部分：运行更新（Part 2: Perform the update）
if step == 5:
    TEXT_EXTENSIONS: tuple[str, ...] = (".json", ".txt", ".js", ".yaml", ".css", ".html")
    source_prefix: str = extract_dir
    target_prefix: str = f"Data/cdragon/{version}"
    updated_files: list[str] = []
    added_files: list[str] = []
    files_to_delete: list[str] = [] #只收录在提取文件夹中不存在但是在对应的目标文件夹中存在的文件（Only collects the files that don't exist in the extract directory but do in the corresponding target folder）
    if mode == "1":
        cdragon_folders: list[str] = []
        for root, dirs, files in os.walk(source_prefix):
            cdragon_folders.append(root.replace("\\", "/"))
    else:
        cdragon_folders = manual_folders
    for i, folder in enumerate(cdragon_folders):
        src_folder: str = os.path.join(source_prefix, folder).replace("\\", "/")
        folder_norm: str = re.sub("^Game/DATA/FINAL/", "game/", folder)
        folder_norm = re.sub("^Plugins/", "plugins/", folder_norm)
        dst_folder: str = os.path.join(target_prefix, folder_norm).replace("\\", "/")
        logPrint("[%d/%d]正在检查文件夹（Checking the folder）：%s" %(i + 1, len(cdragon_folders), src_folder), print_time = True)
        if not os.path.exists(src_folder):
            logPrint(f"文件夹{src_folder}不存在！\nFolder {src_folder} not found!", write_time = False)
            continue
        os.makedirs(dst_folder, exist_ok = True)
        src_files: list[str] = os.listdir(src_folder)
        dst_files: list[str] = os.listdir(dst_folder)
        for file in dst_files:
            if file.endswith(TEXT_EXTENSIONS) and not file in src_files:
                files_to_delete.append(os.path.join(dst_folder, file).replace("\\", "/"))
        for j, file in enumerate(src_files):
            src_file_path: str = os.path.join(src_folder, file).replace("\\", "/")
            dst_file_path: str = os.path.join(dst_folder, file).replace("\\", "/")
            logPrint("[%d/%d][%d/%d]正在校对文件（Checking file）： %s" %(i + 1, len(cdragon_folders), j + 1, len(src_files), src_file_path), print_time = True)
            update: bool = False
            added: bool = False
            if dst_file_path in files_to_delete:
                files_to_delete.remove(dst_file_path)
            with open(src_file_path, "r", encoding = "utf-8") as fp:
                src: str = fp.read()
            if not file in os.listdir(dst_folder):
                update = added = True
            else:
                with open(dst_file_path, "r", encoding = "utf-8") as fp:
                    dst: str = fp.read()
                update = src != dst
            if update:
                with open(dst_file_path, "w", encoding = "utf-8") as fp:
                    fp.write(src)
            if added:
                logPrint("已添加文件（Added file）： %s" %(dst_file_path), print_time = True)
                added_files.append(src_file_path)
            elif update:
                logPrint("已更新文件（Updated file）： %s" %(dst_file_path), print_time = True)
                updated_files.append(src_file_path)
        for file in os.listdir(dst_folder):
            file_path: str = os.path.join(dst_folder, file).replace("\\", "/")
            file_size: int = os.path.getsize(file_path)
            if not file_path in files_to_delete and os.path.splitext(file)[1] == ".json" and file_size > 80 * 1024 * 1024: #当本地的json文件大小大于80 MB，且这个json文件没有被标记为待删除时，对文件按照对象类型进行拆分，以便Git比对文件变化（When the local file is larger than 80 MiB, and this file isn't marked as to be deleted, split the file into different object types, so that Git can compare the file change）
                with open(file_path, "r", encoding = "utf-8") as fp:
                    src_data = json.load(fp)
                if "__linked" in src_data and all("__type" in value for (key, value) in src_data.items() if key != "__linked"): #只拆分二进制描述文件（Only split binary description files）
                    objectType_data: dict[str, dict[str, dict[str, Any]]] = {}
                    for (key, value) in src_data.items():
                        if key != "__linked":
                            if not value["__type"] in objectType_data:
                                objectType_data[value["__type"]] = {}
                            objectType_data[value["__type"]][key] = value
                    #下面分对象类型逐个比对本地文件（Next, compare local files based on object types one by one）
                    for (key, value) in objectType_data.items():
                        update_split: bool = False
                        added_split: bool = False
                        split_file_name: str = os.path.splitext(file)[0] + "." + key + os.path.splitext(file)[1]
                        split_file_path: str = os.path.join(dst_folder, split_file_name).replace("\\", "/")
                        if split_file_path in files_to_delete: #如果原始文件存在且可以拆分出来子文件，那么将子文件从待删除文件列表中移除（If the original file exists and can be generated from the original file, then remove this file from the files to be deleted）
                            files_to_delete.remove(split_file_path)
                        src_split: str = json.dumps(value, indent = 4, ensure_ascii = False)
                        if not split_file_name in os.listdir(dst_folder):
                            update_split = added_split = True
                        else:
                            with open(split_file_path, "r", encoding = "utf-8") as fp:
                                dst_split: str = fp.read()
                            if src_split != dst_split:
                                update_split = True
                        if update_split:
                            with open(split_file_path, "w", encoding = "utf-8") as fp:
                                fp.write(src_split)
                            if added_split:
                                logPrint("已添加文件（Added file）： %s" %(split_file_path), print_time = True)
                            else:
                                logPrint("已更新文件（Updated file）： %s" %(split_file_path), print_time = True)
    if len(updated_files) > 0:
        logPrint("已更新以下%d个文件：\nUpdated the following %d file(s):" %(len(updated_files), len(updated_files)), write_time = False)
        for file in updated_files:
            logPrint(file, write_time = False)
        logPrint("", write_time = False)
    if len(added_files) > 0:
        logPrint("已添加以下%d个文件：\nAdded the following %d file(s):" %(len(added_files), len(added_files)), write_time = False)
        for file in added_files:
            logPrint(file, write_time = False)
        logPrint("", write_time = False)
    if len(files_to_delete) > 0:
        logPrint("以下%d个文件不存在于数据库中。是否永久删除这些文件？（输入任意非空字符串删除，否则不删除）\nThe following %d file(s) don't exist in the database. Do you want to delete them? (Submit any non-empty string to delete, or null to refuse deleting the files)\n" %(len(files_to_delete), len(files_to_delete)) + "\n".join(files_to_delete), write_time = False)
        delete_str: str = logInput()
        delete: bool = bool(delete_str)
        if delete:
            for file in files_to_delete:
                try:
                    os.remove(file)
                except FileNotFoundError:
                    pass
        logPrint("", write_time = False)
    log.write("[The program has exited!]\n")
    log.close()
    print("比对完成！请按回车键退出。\nCheck finished! Press Enter to exit.")
    input()
