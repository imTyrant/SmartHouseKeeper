# -*- coding: UTF-8 -*-

# 这个脚本将没有添加的设备补上，并置为-1。

import json
import os
import sys

def read_json(path):
    with open(path, 'r', encoding='UTF-8') as f:
        return json.load(f)

def find_logs(path): #读出path路径下所有扩展名不为py的文件。
    rtn = []
    for root, dirs, files in os.walk(path):
        for fi in files:
            ft = fi.split('.')[-1]
            if ft != 'py':
                rtn.append(root + ('' if root[-1] == '/' else '/') + fi)

    return rtn

def get_all_devices():#生成所有的 “房间:设备” 这样的序列。
    all_devices = []
    room_json = read_json('room.json')

    rooms = list(room_json.keys())
    rooms.sort()
    for r in rooms:
        for d in room_json[r]["usable_devices"]:
            all_devices.append(r + ":" + d) #如果log文件中的分割符是‘_’, 就把‘:’ 替换为‘_’。例如：“bedroom1_temp”。
    return all_devices

def process_log(path): 
    if path[-8:] == '.all.txt':
        print("o_o")
        return
    
    out_path = path + '.all.txt'
    try:
        with open(out_path, 'w', encoding='UTF-8') as out_f, open(path, 'r', encoding='UTF-8') as in_f:
            lines = in_f.readlines()
            for line in lines:
                line = line.replace('\n', '')

                try:
                    sample = json.loads(line)
                except ValueError as error:
                    print(path + ' contains invalid log.')
                    return
                    
                add_devices = set(sample.keys())
                for each in all_devices:
                    if each not in add_devices:
                        sample[each] = -1
                out_f.write(json.dumps(sample) + '\n')

    except IOError as e:
        print(path + " is invalid file.")

    
all_devices = get_all_devices()

log_path = "./log" # 把这个路径替换为放收集到数据的文件夹，文件夹里面最好只放这个收集到的数据
if log_path == "": 
    exit()

all_logs = find_logs(log_path)

for log in all_logs:
    process_log(log)

