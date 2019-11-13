module.exports = function (req, res, next) {
  res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')
  next()
 

}