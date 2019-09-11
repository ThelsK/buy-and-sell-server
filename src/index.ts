import { createKoaServer, Action } from "routing-controllers"
import database from "./database"
import AdController from "./ads/controller"

const port = process.env.PORT || 4000
const app = createKoaServer({
  controllers: [
    AdController,
  ],
  authorizationChecker: (action: Action) => {
    const args = action.request.headers.authorization.split(" ")
    // return args && args[0] === "Bearer" && args[1] && verify(args[1])
    //   && true || false
    return true
  }
})
app.listen(port, () => console.log(`Listening on :${port}`))
database;