import { getSentence } from '@App/sentence/v1/core'
import { CoreApi } from '@App/core/v1/core'

module.exports = {
  v1: {
    CoreApi,
    SentenceApi: {
      getSentence
    }
  }
}
