# dash-geoman

[![PyPI](https://img.shields.io/pypi/v/dash-geoman.svg)](https://pypi.org/project/dash-geoman/)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/dash_geoman.svg)
[![NPM](https://img.shields.io/npm/v/dash-geoman.svg)](https://www.npmjs.com/package/dash-geoman)
[![PyPI - License](https://img.shields.io/pypi/l/dash-geoman.svg)](./LICENSE)

Wrapper of [leaflet-geoman][] components for Plotly [Dash][]

### Getting started

The easiest way to get started is to install the latest version of Dash and dash-geoman via pip.

```bash
pip install dash==2.0.0
pip install dash-geoman
```

Once the installation is completed, paste the following lines of code into a .py file and run it.

```python
import dash
import dash_leaflet as dl
import dash_geoman as dgm

app = dash.Dash()
app.layout = dl.Map(children=[
    dl.TileLayer(),
    dgm.Geoman(),
], style={'width': '1000px', 'height': '500px'})

if __name__ == '__main__':
    app.run_server()
```

If you visit http://127.0.0.1:8050/ in your browser, you should see a `leaflet` map and `dash-geoman`'s edit controls.

### Documentation


### Build instructions

Start by cloning this repository,

```bash
git clone git@github.com:pikhovkin/dash-geoman.git
cd dash-geoman
```

Next, create a virtual environment and install the python dependencies,

```bash
python3 -m venv venv && . venv/bin/activate
pip install -r requirements.txt
```

Finally, install packages via npm (ignore errors) and run the build script,

```bash
npm i --ignore-scripts
npm run build
```

### License

MIT

[leaflet-geoman]: https://github.com/geoman-io/leaflet-geoman
[Dash]: https://github.com/plotly/dash
