# coding: UTF-8
# 这个脚本将数据处理为单纯只有0，1 这样的向量。
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

def process_log(path): 

    if path[-8:] == '.bin.txt':
        print("o_o")
        return

    if path[-8:] != '.all.txt':
        print(path + ": o_o;")
        return
    
    out_path = path[0:-8] + '.bin.txt'
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
                
                decision = sample.pop("decision")
                all_devices = list(sample.keys())
                all_devices.sort()

                line_out = ""
                for each in all_devices:
                    line_out += str(sample[each]) + " "

                out_f.write(line_out + str(decision) + '\n')

    except IOError as e:
        print(path + " is invalid file.")


all_logs = find_logs('./log')
for each in all_logs:
    process_log(each)
