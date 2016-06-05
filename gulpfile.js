var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    webpack = require('webpack-stream')
    _ = require('underscore');

// A custom webpack extension for Elixir that is based off of the
// laravel-elixir-webpack extension. This is simplified and only
// watches specific files for changes.
elixir.extend('webpack', function (src, options, output) {
    var config = elixir.config,
        paths = new elixir.GulpPaths()
            .src(src, config.get('assets.js.folder'))
            .output(output || config.get('public.js.outputFolder'), 'app.js');

    options = _.extend({
        output: { filename: paths.output.name },
        devtool: '#source-map'
    }, options);

    new elixir.Task('webpack', function () {
        this.log(paths.src, paths.output);

        return (
            gulp.src(paths.src.path)
                .pipe(webpack(options))
                .on('error', function(e) {
                    new elixir.Notification('Failed to compile with Webpack.');

                    this.emit('end');
                })
                .pipe(gulp.dest(paths.output.baseDir))
                .pipe(new elixir.Notification('Webpack compiled!'))
        );
    })
    .watch([
        paths.src.path,
        config.assetsPath + '/js/**/*.vue',
        config.assetsPath + '/js/**/**/*.vue'
    ])
    .ignore(paths.output.path);
});

elixir(function(mix) {
    // Mix the application stylesheet.
    mix.sass('app.scss');

    // Mix the application with Webpack using the Babel and Vue
    // loaders to prepare each of the different file types.
    mix.webpack('main.js', {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test: /\.vue$/,
                    loader: 'vue'
                }
            ]
        }
    }, 'resources/assets/js/build/app.js');

    // Merge the build/app.js file with the VueJS files into a single
    // app.js file that resides within the public directory.
    mix.scripts([
        'node_modules/vue/dist/vue.js',
        'node_modules/vue-resource/dist/vue-resource.js',
        'resources/assets/js/build/app.js'
    ], 'public/js/app.js', './');
});
