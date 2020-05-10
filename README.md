# Hubble plugin for Adobe XD

[![LICENSE](https://badgen.net/badge/license/MIT/blue)][license]
![Last commit](https://badgen.net/github/last-commit/inthepocket/hubble-adobexd-plugin)

Takes your design data out of Adobe XD and connects it to the Hubble atmosphere.

# Contents

- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Usage](#usage)
- [Contributing](#contributing)
- [Development](#development)
- [License](#license)

## Prerequisites

- Adobe XD (v21.0 or higher)
- Hubble.app installed on your system

## Installing

Not released to the plugin store yet, see [development](#development) for installing manually.

## Usage

After the installation, the 🔭 Hubble plugin will be available in your plugin list. The plugin has two main features.

The command __Export to Hubble__ will trigger an export to the Hubble app. Because Adobe does not allow to open 3rd party apps from within Adobe XD, the export request has to be sent via a [web proxy](https://github.com/inthepocket/hubble-web-proxy) to Hubble.app. Fill in the link to your web proxy [(see hubble-web-proxy)](https://github.com/inthepocket/hubble-web-proxy) in the field __Trigger URL__.

**Export assets** is our way to fetch assets that are marked for export (since they can't be extracted from raw data). By providing a folder, the plugin will render each asset as SVG and as PNG (@1x, @2x and @3x scale). More info on how to mark artboards as exportable can be found [here](https://www.notion.so/Adobe-XD-b67717dbef514c139c557f0f60400b93#4f3df7b643d948e9aba814627fde27cb).

Check out the detailed [documentation](https://www.notion.so/Adobe-XD-b67717dbef514c139c557f0f60400b93) for more info on how to use Adobe XD together with the Hubble ecosystem.

## Contributing

❤ We appreciate every form of contribution, but before you contribute please make sure you have read the [contribution guidelines](https://github.com/inthepocket/hubble-oss-launchpad/blob/master/CONTRIBUTING.md).

## Development

Adobe XD has a predefined folder to store plugins in development mode. To open this folder from within Adobe XD, goto **Plugins > Development > Show develop folder**.

![Showing the Adobe XD development folder](https://user-images.githubusercontent.com/21178642/81376248-6c87f400-9103-11ea-8d14-3569f831225a.png)

Now simply copy or clone the repository to the development folder. Changes are visible after reloading the plugins (Cmd+Shift+R).

For example: `git clone https://github.com/inthepocket/hubble-adobexd-plugin "~/Library/Application Support/Adobe/Adobe XD/develop"`

## License

[MIT][license]

<!-- LINKS -->

[license]: https://github.com/inthepocket/hubble-adobexd-plugin/blob/master/LICENSE
