import deeplake
import os

dataset_name = "coco"
dataset_folder = "/opt/chengjiao/fc/nanodb/coco/2017/train2017"

ds = deeplake.empty(f"dataset/{dataset_name}")

images = ds.create_tensor("images", htype="image", sample_compression="jpg")

files_list = []
for dirpath, dirnames, filenames in os.walk(dataset_folder):
    for filename in filenames:
        files_list.append(os.path.join(dirpath, filename))

with ds:
    img_count = 0
    for image_path in files_list:
        image = deeplake.read(image_path)
        ds.images.append(image)
        img_count += 1
        print(f"Append {img_count} images to deeplake dataset {dataset_name}", end="\r", flush=True)

ds.info.update(description = 'coco2017-train')
ds.images.info.update(camera_type = 'SLR')

ds.summary()




