import json
import pathlib
from setuptools import setup, find_namespace_packages


HERE = pathlib.Path(__file__).parent
README = (HERE / 'README.md').read_text()

with open(HERE / 'package.json') as f:
    package = json.load(f)

package_name = package['name'].replace(" ", "_").replace("-", "_")
packages = [package_name] + \
           [f'{package_name}.{subpackage_name}' for subpackage_name in find_namespace_packages(package_name)]

setup(
    name=package_name,
    version=package['version'],
    author=package['author'],
    packages=packages,
    include_package_data=True,
    license=package['license'],
    description=package['description'] if 'description' in package else package_name,
    long_description=README,
    long_description_content_type='text/markdown',
    url='https://github.com/pikhovkin/dash-geoman',
    install_requires=[
        'dash-leaflet',
    ],
    keywords=package['keywords'],
    classifiers=[
        'Environment :: Web Environment',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Framework :: Dash',
    ],
)
