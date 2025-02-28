import deeplake
from  ds_visualizer import visualize

dataset_name = "coco"
ds = deeplake.load(f"dataset/{dataset_name}")

ds.summary()

visualize(ds.storage)


def keep_running():
    input("按 Enter 键以退出...")  # 进程会等待用户按下 Enter 键

if __name__ == "__main__":
    keep_running()
'''

from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# 定义静态文件夹，Flask会自动提供`static/`文件夹中的文件
app.static_folder = 'static'

# 路由：渲染HTML页面
@app.route('/')
def index():
    return render_template('index.html')

# 路由：提供静态文件（如JS、CSS）
@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory(os.path.join(app.static_folder), filename)

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=9090)
    keep_running()
'''

