# Nestjs Packages Monorepo Example with Yarn Workspaces and Github Actions

Nestjs Packages Monorepo Example with Yarn Workspaces and Github Actions 

## Contributing

### Requirements

1. You need Node.js (>=18)

### Setup

1. Install the dependencies

```sh
yarn
```

2. Run build for all packages

```sh
yarn build:packages
```

3. Run unit tests for all packages

```sh
yarn test:ci:packages
```

3. Run linter for all packages

```sh
yarn lint:packages
```

You can also build, test, lint a single package:

```sh
yarn workspace [package_name] build
# Example
yarn workspace @angulartist/utilities build
# Output
 PASS  test/specs/placeholder.spec.ts
  Logger
    just test that the tests are testing
      ✓ dumb test (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.487 s, estimated 2 s
Ran all test suites.
```

### Permissions

In order to publish a package, you have to generate a [Github Personal access tokens](https://github.com/settings/tokens) with read:write packages permissions.

In case you'd like to publish a package from your local environment:

1. Export the Github access token to `NPM_TOKEN` env variable

```sh
export NPM_TOKEN=[my-github-token]
```

2. Tag a new package version:

> Note: this project is using [standard-version](https://www.npmjs.com/package/standard-version) to automatically bump the package version and to update the changelog.

```sh
yarn workspace [package_name] run release:version
git push --follow-tags origin [your_branch]
```

3. Publish the package:

```sh
yarn workspace [package_name] run release:publish
```

You can also publish a pre-release version, while I recommend you to do it from the CI pipeline.

```sh
yarn workspace [package_name] run release:version --prerelease next-[commit_hash_short_sha]
```

### Add a new package

You can copy/paste a `packages/utilities` package and update the `package.json` file accordingly (name, version).
You also have to update the Github workflow to add your new package to the matrix:

```sh
# .github/workflow/main.yml - stringify_packages job
# Edit that line
echo "packages={\"names\":[\"@angulartist/utilities\"]}" >> $GITHUB_OUTPUT
```

## CI/CD

This project is using Github workflows/actions to build, lint, test the changes and to automatically release a new version of the packages.

### Releases

Pushing to the `main` branch will result to __releasing__ a new package version.

Pushing to any other branch will result to __pre-releasing__ a new package version with the current branch commit hash.


### Setup

1. The setup requires that you add a secret at the project level `CI_JOB_TOKEN=[my-github-token]`

2. You also have to add an environment variable at the project level `ORG_EMAIL=[my-github-email]`

3. You have also to replace the packages' prefix with your own organization in the [.github/workflows/main.yml](.github/workflows/main.yml) file.