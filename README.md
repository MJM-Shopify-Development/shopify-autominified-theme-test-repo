### TLDR:

1. Install Shopify Theme Access app, add user, copy password
2. Create a custom app on the store w. read_products & write_themes access
   - Install and copy access token
3. Install Github app Lighthouse CI, copy token

#### Add Repo Secrets: `Store Settings > Secrets and Variable > Actions`

4. **SHOPIFY_CLI_THEME_TOKEN**: Theme access password from Shopify Theme Access App
5. **`SHOPIFY_STORE`**: store-handle.myshopify.com
6. **`SHOPIFY_THEME_ID`**: Theme id or name (Online Store > Themes > Customize - ID in URL)
7. **`SHOP_ACCESS_TOKEN`**: From custom app
8. **`LHCI_GITHUB_APP_TOKEN`**: Token from Github Lighthouse CI App
9. **`SHOP_PASSWORD`**: If shop password needed for viewing shop URL

10. Add/Create `.github/workflow/deploy-theme.yml`

```yml
name: Theme deploy
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1
          bundler: 'latest'
      - run: npm install -g @shopify/cli @shopify/theme
      - run: npm install
      - run: npm run styles & npm run scripts
      - env:
          SHOPIFY_FLAG_STORE: ${{ secrets.SHOP_STORE }}
          SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.SHOPIFY_CLI_THEME_TOKEN }}
          SHOPIFY_CLI_TTY: 0
        run: shopify theme push --theme ${{ secrets.SHOPIFY_THEME_ID }} -a
      - name: Lighthouse
        uses: shopify/lighthouse-ci-action@v1
        with:
          access_token: ${{ secrets.SHOP_ACCESS_TOKEN }}
          store: ${{ secrets.SHOP_STORE }}
          password: ${{ secrets.SHOP_PASSWORD }}
          lhci_github_app_token: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

# How to set up this auto-minification and babel transpiler for your theme?

### Follow these steps:

- Step 1: Integrate these changes into your theme: https://github.com/mmarienko/shopify-autominified-theme/commit/eb8544588b21303b3cec52860d054dfacb9fe686
- Step 2: Add new GitHub Secrets for your theme's repository (Settings -> Secrets and variables -> Actions -> New repository secret):
  - `SHOPIFY_CLI_THEME_TOKEN` for Theme Access password ([How to get the password?](https://shopify.dev/docs/themes/tools/theme-access))
  - `SHOPIFY_STORE` for the store URL (e.g., dev-store.myshopify.com)
  - `SHOPIFY_THEME_ID` for the theme ID that you want to minify ([How to find the theme ID?](https://www.howcommerce.com/shopify-theme-id/))
- Step 3: Create/Add following code to `.github/workflows/deploy-theme.yml`

```yml
name: Theme deploy
on:
  workflow_dispatch:
  push:
    branches:
      - main
jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.1
          bundler: 'latest'
      - run: npm install -g @shopify/cli @shopify/theme
      - run: npm install
      - run: npm run styles & npm run scripts
      - env:
          SHOPIFY_FLAG_STORE: ${{ secrets.SHOP_STORE }} # store-handle.myshopify.com
          SHOPIFY_CLI_THEME_TOKEN: ${{ secrets.SHOPIFY_CLI_THEME_TOKEN }} # Shopify Theme Access App password (installed in shop)
          SHOPIFY_CLI_TTY: 0
        run: shopify theme push --theme ${{ secrets.SHOPIFY_THEME_ID }} -a # Theme ID number or name of theme
```

- Step 4: Test the integration by pushing changes to `main` branch (works only with `main` by default)

For more details on the GitHub CI/CD integration, refer to Shopify Developer Documentation: https://shopify.dev/docs/themes/tools/cli/ci-cd

## Github Lighthouse CI App Integration:

https://shopify.dev/docs/storefronts/themes/tools/lighthouse-ci

### Requirements

- **A development store** - You should create a development store that is dedicated to running Lighthouse CI and manual performance tests.
- **Performance-specific store data** - To get consistent results from Lighthouse, you should populate your store using the test product csv. The store should have no other collections, products, or variants. This file contains the same data that is used to test themes before they are accepted into the Shopify Theme Store.
- **API credentials for the development store** - Lighthouse CI uses custom app access tokens to connect to your store. Create a custom app on the store with the read_products and write_themes access scopes.

You'll need the Admin API access token for the custom app that you create.

### **Step 1**: Add your custom app access token to GitHub

In your theme's GitHub repo, add the following information as repository secrets:

- **SHOP_ACCESS_TOKEN** - The Admin API access token from your custom app.
- **SHOP_STORE** - Your store's myshopify.com URL, in the format your-store-name.myshopify.com.

If your store is password protected, then you should also add a repository secret that contains your store password. If you don't provide it, then Lighthouse is redirected to the password page and can't accurately test your theme's performance.

### **Step 2**: Add Lighthouse to GitHub Action workflow

1. Append following code to workflow file that runs shopify/lighthouse-ci-action:

`.github/workflows/lighthouse-ci.yml`

```yml
- name: Lighthouse
  uses: shopify/lighthouse-ci-action@v1
  with:
    access_token: ${{ secrets.SHOP_ACCESS_TOKEN }} # Custom App create and install
    store: ${{ secrets.SHOP_STORE }} # store-handle.myshopify.com
    password: ${{ secrets.SHOP_PASSWORD }} # password from Online Store > Preferences page
```

2. Commit this code and create a pull request. You should see a GitHub Action that runs Lighthouse on your pull request’s code.

### Step 3: Add Lighthouse CI as a GitHub status check (optional)

GitHub status checks let you see the status of your Lighthouse CI run in the GitHub UI. If you want to turn the performance and accessibility checks into GitHub status checks, then do the following:

1. Install the Lighthouse CI GitHub app as the owner of your theme's repo, and then copy the token provided.
2. In your theme's GitHub repo, create a new repository secret named **LHCI_GITHUB_APP_TOKEN**. The value should be the token from the previous step.
3. In the GitHub Action workflow file that you created in step 2, add a new configuration attribute called lhci_github_app_token. The attribute's value should be a reference to the **LHCI_GITHUB_APP_TOKEN** secret:

```yml
lhci_github_app_token: ${{ secrets.LHCI_GITHUB_APP_TOKEN }} # From Github Lighthouse app install process (Google Keep note: Github Org PWs)
```

4. Commit this code and create a pull request. You should see a GitHub Action that runs Lighthouse on your pull request’s code.

Your PRs will now pass or fail depending on whether they pass the Lighthouse CI checks.
