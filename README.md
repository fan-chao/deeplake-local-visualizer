# ds_visualizer

`ds_visualizer` is a tool for visualizing **DeepLake** datasets locally. Currently, it only supports **DeepLake version 3**.

The tool allows you to visualize your dataset using a simple browser interface, making it easy to explore the data interactively.

## Features

- **Local Visualization**: View your DeepLake datasets on your local machine.
- **Supports DeepLake v3**: Currently supports version 3 of the DeepLake library.
- **Interactive Access**: Visualize datasets directly in your browser without additional setup.

## Installation

To use `ds_visualizer`, ensure that you have **DeepLake v3** installed. You can install it via pip:

```bash
pip install deeplake==3.*
```

Then, clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/ds_visualizer.git
cd ds_visualizer
```

## Usage

To visualize your dataset, you can use the provided `preview_dataset.py` script. It demonstrates how to use the `visualize` function and access the visualization through your browser.

### Example Usage

1. First, run the `preview_dataset.py` script:

```bash
python preview_dataset.py
```

2. Open your browser and go to the URL provided by the script. This will open an interactive visualizer interface where you can explore the dataset.

## Requirements

- Python 3.x
- DeepLake v3
- Flask (for local server)
- Additional libraries for dataset management and visualization.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
