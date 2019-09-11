import { JsonController, Get, Param, NotFoundError } from "routing-controllers"
import Ad from "./entity"

@JsonController()
export default class PageController {

  @Get("/ads")
  async getAllAds() {
    const ads = await Ad.find()
    return ads.map(ad => ({
      id: ad.id,
      title: ad.title,
      picture: ad.picture,
      price: ad.price,
    }))
  }

  @Get("/ads/:id")
  async getOneAd(
    @Param("id") id: number
  ) {
    const ad = await Ad.findOne(id)
    if (!ad) throw new NotFoundError(`Cannot find advertisement with id: ${id}`)
    return ad
  }
}