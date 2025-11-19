# Documentation Page

This directory contains the main documentation page (`index.html`) that will be deployed to the root of the GitHub Pages site.

## Purpose

The `index.html` file serves as:
- A landing page for the deployed applications
- Complete documentation for the Universal Module Federation project
- Quick access links to all deployed apps (host-webpack-react, host-angular, remote)
- Setup and deployment instructions
- Code examples and configuration details

## Deployment

This page is automatically copied to `final-dist/index.html` during the GitHub Actions deployment workflow.

### Workflow Integration

In `.github/workflows/deploy.yml`, the following step copies this file:

```yaml
- name: Copy documentation page
  run: |
    cp docs/index.html final-dist/index.html
```

## Accessing the Documentation

Once deployed, the documentation will be available at:
```
https://mehardiknaik.github.io/universal-module-fedration/
```

## Features

- 📱 Direct links to all three deployed applications
- 📖 Complete project overview and architecture explanation
- 🛠️ Local development setup instructions
- ⚙️ Module Federation configuration examples
- 🚀 Deployment guide with GitHub Actions
- 🔐 Environment variables documentation
- 📁 Project structure visualization
- 📜 NPM scripts reference
- 🔧 Troubleshooting guide
- ✨ Key features and technology stack

## Customization

To update the documentation:
1. Edit `index.html` in this directory
2. Commit and push changes
3. The next deployment will include your updates

## Live Preview

You can preview the HTML locally by opening it in a browser before deployment.
