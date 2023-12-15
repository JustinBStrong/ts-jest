/**
 * @internal
 */
export function getPackageVersion(moduleNames: string): string | undefined {
  try {
    return require(`${moduleNames}/package.json`).version as string
  } catch (err) {}

  return
}
