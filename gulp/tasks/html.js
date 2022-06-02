export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(app.gulp.dest(app.path.build.html));
}

import fileinclude from 'gulp-file-include';