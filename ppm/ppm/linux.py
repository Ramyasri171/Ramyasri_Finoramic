import json
from struct import pack
import subprocess
import sys


def get_package_list():
    package_list=[]
    file_object = open('package.json')
    package_data = json.load(file_object)
    for package in package_data['dependencies']:
        package_list.append(package+'=='+package_data['dependencies'][package])
    file_object.close()
    return package_list


def install_package(package):
    response={
        "status":"ok"
    }
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        return response
    except:
        response["status"]="failed"
        return response


error_occurred = False
errored_package_list=[]
package_list = get_package_list()
print("packge list",package_list)
for package in package_list:
    res = install_package(package)
    if(res["status"] == "failed"):
        error_occurred = True
        errored_package_list.append(package)
        # print(package)
if(not error_occurred):
    print("success")
else:
    for errored_package in errored_package_list:
        print(errored_package)



