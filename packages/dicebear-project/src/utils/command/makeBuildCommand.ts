import { Command } from 'commander';
import { rollup } from 'rollup';
import { PackageJson } from 'type-fest';
import { compileFromFile } from 'json-schema-to-typescript';
import { createUmdConfig } from '../build/createUmdConfig';
import { createCjsAndEsConfig } from '../build/createCjsAndEsConfig';
import * as path from 'path';
import * as fs from 'fs-extra';

export async function makeBuildCommand() {
  const cmd = new Command('build');

  cmd.arguments('<name>');

  cmd.action(async (name: string) => {
    const pkg: PackageJson = await import(path.resolve(process.cwd(), 'package.json'));

    const umdConfig = createUmdConfig(name, pkg);
    const cjsAndEsConfig = createCjsAndEsConfig(pkg);

    const schemaPath = path.resolve(process.cwd(), 'src/schema.json');

    if (await fs.pathExists(schemaPath)) {
      const schemaTypes = await compileFromFile(schemaPath);

      await fs.writeFile(path.resolve(process.cwd(), 'src/options.ts'), schemaTypes, { encoding: 'utf-8' });
    } else {
      console.log('schema.json not found - skip creation src/options.ts');
    }

    console.log('Bundle package with rollup');

    await Promise.all(
      [umdConfig, cjsAndEsConfig].map(async ({ input, output }) => {
        const bundle = await rollup(input);

        await Promise.all(output.map((output) => bundle.write(output)));

        await bundle.close();
      })
    );
  });

  return cmd;
}
