/**
 * This schema is an interface for each exported environment object in
 * `environment.ts`, `environment.prod.ts`, etc.
 *
 * Modify it to represent the values for your environment(s).
 */
export interface EnvironmentSchema {

  /**
   * The name of the environment.
   *
   * When adding new environments, continue to add values to this type union.
   * You can also change the type to `string` :)
   */
  name: 'development' | 'production';

}
