const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => console.log(`listening on port ${port}`))

app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const Router = require('./routers/Router')
const MemberRouter = require('./routers/MemberRouter')
const TagRouter = require('./routers/TagRouter')

app.use('/', Router)
app.use('/members',MemberRouter)
app.use('/tags', TagRouter)

app.locals.goldMarker = (membertype) => {
  if(membertype == 'gold') return '***gold***'
  else return 'free'
}