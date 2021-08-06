var NwBuilder = require('nw-builder');
var nw = new NwBuilder({
    appName: "kiri-moto",
    version: "0.55.0",
    buildDir: "dist",
    files: [
        "**/**",
        "!cache/**/**",
        "!dist/**",
        "!src/**",
        "!logs/**",
        "!node_modules/nw-builder/cache/**",
        "!apps/grid/apps/**",
        "!apps/grid/node_modules/nw-builder/cache/**",
        "!apps/grid/node_modules/nwjs-builder-phoenix/caches/**",
        "!apps/grid/dist/**",
        "!apps/grid/logs/**",
        "!apps/grid/node_modules/**",
        "!apps/grid/cache/**",
        "!web/**"
    ],
    platforms: ['win32', 'linux64'],
    "x-platforms": ['osx64', 'win32', 'linux64'],
});

// Log stuff you want
nw.on('log',  console.log);

nw.build().then(function () {
    console.log('all done!');
}).catch(function (error) {
    console.error(error);
});