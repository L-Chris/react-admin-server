module.exports = async (ctx, next) => {
	ctx.error = ({error, status = 400, message = '请求失败'}) => {
		let timeStamp = Date.parse(new Date()) / 1000
		ctx.body = {error, status, message, timeStamp}
	}
	ctx.success = ({data, status = 200, message = '请求成功'}) => {
		let timeStamp = Date.parse(new Date()) / 1000
		ctx.body = {data, status, message, timeStamp}
	}
	await next()
}