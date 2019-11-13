module.exports = function (req, res, next) {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
  next()
 

}