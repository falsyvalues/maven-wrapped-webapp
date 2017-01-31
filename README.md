# maven-wrapped-webapp
It is just simple maven wrapped webapp that runs external tools like npm script/gulp for building.

## What you need to know?
* By default build skips `maven-war-plugin` via `configuration.true`
* By default tools build into `${project.build.directory}/generated-webapp`
* Packing is made with `maven-assembly-plugin` using `assembly.xml` configuration
* Rest is done via maven plugin [eirslett/frontend-maven-plugin](https://github.com/eirslett/frontend-maven-plugin) which downloads/installs `Node` and `npm` locally, runs npm install, and then any combination of supported tools
