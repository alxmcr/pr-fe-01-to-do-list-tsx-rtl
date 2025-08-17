# Cypress CI/CD Fix Documentation

## Problem Description

The original GitHub Actions workflow was failing with the following error:

```
The cypress npm package is installed, but the Cypress binary is missing.
We expected the binary to be installed here: /home/runner/.cache/Cypress/14.5.4/Cypress/Cypress
```

This error occurs because:

1. The Cypress binary directory is not being properly cached
2. The cache path `/home/runner/.cache/Cypress` is missing from the workflow
3. The workflow doesn't handle Cypress installation failures gracefully

## Solutions Implemented

### 1. Refactored Main Workflow (`gh-ac-cypress.yml`)

The main workflow has been completely refactored to:

- **Proper Cypress Caching**: Cache both `~/.cache/Cypress` and `node_modules/cypress`
- **Better Error Handling**: Added verification steps and better server startup logic
- **Improved Performance**: Better cache keys and restore strategies
- **Robust Testing**: Separate component and E2E test runs with proper server management

### 2. Backup Cache Fix Workflow (`cypress-cache-fix.yml`)

A specialized workflow that specifically addresses Cypress caching issues:

- **Explicit Binary Installation**: Forces `npx cypress install` if cache miss
- **Multiple Cache Paths**: Caches all possible Cypress binary locations
- **Enhanced Verification**: Comprehensive Cypress installation verification
- **Robust Server Startup**: Multiple retry attempts for server readiness

### 3. Enhanced Cypress Configuration

Updated `cypress.config.js` with:

- **CI Optimizations**: Retry logic, better timeouts, performance settings
- **Error Handling**: Screenshots and videos enabled for debugging
- **Module Resolution**: Proper alias configuration for TypeScript paths

### 4. Improved Package Scripts

Added new scripts to `package.json`:

- `cy:verify`: Verify Cypress installation
- `cy:cache:list`: List Cypress cache contents
- `cy:cache:path`: Show Cypress cache path
- `cy:run:e2e`: Run E2E tests specifically

## Usage

### Option 1: Use the Main Workflow (Recommended)

The refactored `gh-ac-cypress.yml` should work for most cases and provides the best performance.

### Option 2: Use the Cache Fix Workflow

If you continue to experience caching issues, use `cypress-cache-fix.yml` which provides:

- More aggressive caching strategies
- Explicit binary installation
- Better error recovery

### Option 3: Local Testing

Test the setup locally before pushing:

```bash
# Verify Cypress installation
pnpm run cy:verify

# Run component tests
pnpm run cy:run:component

# Run E2E tests
pnpm run cy:test:e2e

# Run all tests
pnpm run cy:test:all
```

## Key Changes Made

### GitHub Actions Workflow

1. **Proper Cache Paths**: Added `~/.cache/Cypress` and `/home/runner/.cache/Cypress`
2. **Cache Keys**: Better cache key strategies using `pnpm-lock.yaml` hash
3. **Verification Steps**: Added Cypress installation verification
4. **Server Management**: Improved preview server startup with health checks
5. **Artifact Uploads**: Better handling of screenshots, videos, and build artifacts

### Cypress Configuration

1. **CI Optimizations**: Retry logic, timeouts, performance settings
2. **Error Handling**: Screenshots and videos enabled
3. **Module Resolution**: Proper TypeScript path aliases
4. **Security Settings**: Disabled web security for testing

### Package Scripts

1. **New Commands**: Added verification and cache management scripts
2. **Better E2E Testing**: Improved E2E test execution
3. **Error Recovery**: Better handling of test failures

## Troubleshooting

### If Cypress Still Fails to Install

1. **Check Cache Keys**: Ensure cache keys are unique and properly formatted
2. **Verify Dependencies**: Check that all dependencies are properly installed
3. **Use Cache Fix Workflow**: Switch to the specialized workflow if issues persist
4. **Check Node Version**: Ensure Node.js 24 is being used consistently

### Common Issues

1. **Cache Miss**: The workflow will automatically reinstall Cypress if cache is missing
2. **Server Startup**: The workflow includes multiple retry attempts for server readiness
3. **Binary Verification**: Comprehensive verification steps ensure proper installation

### Performance Tips

1. **Cache Hit Rate**: Monitor cache hit rates in GitHub Actions logs
2. **Parallel Execution**: Consider enabling parallel test execution for larger test suites
3. **Artifact Cleanup**: Regularly clean up old artifacts to save storage

## Monitoring and Debugging

### GitHub Actions Logs

Look for these key indicators:

- ✅ `Cache hit occurred on the primary key`
- ✅ `Cypress binary installed successfully`
- ✅ `Server is running on port 4173`
- ❌ `Cache miss occurred on the primary key`
- ❌ `The Cypress binary is missing`

### Local Debugging

Use these commands to debug locally:

```bash
# Check Cypress installation
pnpm run cy:verify

# Check cache status
pnpm run cy:cache:list
pnpm run cy:cache:path

# Run specific test types
pnpm run cy:run:component
pnpm run cy:run:e2e
```

## Future Improvements

1. **Parallel Testing**: Enable parallel test execution for faster CI/CD
2. **Test Splitting**: Implement test splitting for better load distribution
3. **Performance Monitoring**: Add performance metrics and monitoring
4. **Cache Analytics**: Track cache hit rates and optimize accordingly

## Support

If you continue to experience issues:

1. Check the GitHub Actions logs for specific error messages
2. Verify that all dependencies are properly installed
3. Test the setup locally using the provided scripts
4. Consider switching between the main and cache fix workflows

The refactored workflows should resolve the Cypress binary missing error and provide a more robust CI/CD experience.
