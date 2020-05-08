# Hubble plugin for Adobe XD

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

TODO after plugin is released to the store

## Usage

After the installation, the 🔭 Hubble plugin will be available in your plugin list. The plugin has two main features.

**Export to Hubble** will trigger an export in the Hubble app. Because Adobe does not allow to open 3rd party apps from within, the request has to be sent over Https and be redirected to a local Hubble request (hubble://). This is what a Trigger URL does and you will have to provide one after selecting a .xd file.

<p align="center">
  <img width="469" alt="Schermafbeelding 2020-05-08 om 08 34 27" src="https://user-images.githubusercontent.com/21178642/81377968-c4742a00-9106-11ea-9d98-cc560f84c994.png">
</p>

**Export assets** is our way to fetch assets that are marked for export (since they can't be extracted from raw data). By providing a folder, the plugin will render each asset as SVG and as PNG (@1x, @2x and @3x scale). More info on how to mark artboards as exportable can be found [here](https://www.notion.so/Adobe-XD-b67717dbef514c139c557f0f60400b93#4f3df7b643d948e9aba814627fde27cb).

Check out the detailed [documentation](https://www.notion.so/Adobe-XD-b67717dbef514c139c557f0f60400b93) for more info on how to use Adobe XD together with the Hubble ecosystem.

## Contributing

TODO

## Development

Adobe XD has a predefined folder to store plugins in development mode. To open this folder from within Adobe XD, goto **Plugins > Development > Show develop folder**.

<p align="center">
  <img width="361" alt="Schermafbeelding 2020-05-08 om 08 07 51" src="https://user-images.githubusercontent.com/21178642/81376248-6c87f400-9103-11ea-8d14-3569f831225a.png">
</p>

Now simply clone the repository in the directory. Changes are visible after reloading the plugins (Cmd+Shift+R).

E.g. `cd /Users/robbedec/Library/Application Support/Adobe/Adobe XD/develop && git clone git@github.com:inthepocket/hubble-adobexd-plugin.git`

## License

TODO
