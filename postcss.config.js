module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-cssnext': {
            browsers: ['last 3 versions', '> 1%'],
        },
    }
}