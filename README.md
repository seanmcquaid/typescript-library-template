# TypeScript Library Template

This is a base template for any new TypeScript libraries I build.

## Publishing a package locally

1. Upgrade the version number of the package
2. Commit the version bump
3. Run `pnpm build`
4. Run `npm publish`
5. Your package will now be publicly available on NPM!

## Publishing a package from GHA to NPM

You can run the Publish to NPM GHA via Workflow Dispatch in the Actions tab. Be sure to generate a token from NPM and add this a repo secret!
