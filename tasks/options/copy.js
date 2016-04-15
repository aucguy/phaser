module.exports = {

    custom: {
        expand: true,
        flatten: true,
        cwd: '<%= compile_dir %>/',
        src: ['*.js', '*.map', '!*Unrepl.js'],
        dest: '<%= target_dir %>/'
    }

};
