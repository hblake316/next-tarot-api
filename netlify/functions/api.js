exports.handler = async (
  event,
  context
) => {
  if (event.httpMethod === 'GET') {
    try {
      const data = require('./cards.json')

      return {
        statusCode: 200,
        body: JSON.stringify(data)
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error:
            'Failed to process GET request'
        })
      }
    }
  }
}
