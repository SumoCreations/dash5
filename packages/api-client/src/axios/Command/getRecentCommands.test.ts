import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { getRecentCommands, GetRecentCommandsParams } from './getRecentCommands'

let params: GetRecentCommandsParams = {
  vehicleName: 'example',
}

const mockResponse = { value: 'some-value' }
const server = setupServer(
  rest.get('/commands/recent', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockResponse))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('getRecentCommands', () => {
  it('should return the mocked value when successful', async () => {
    const response = await getRecentCommands(params)
    expect(response).toEqual(mockResponse)
  })

  it('should throw when unsuccessful', async () => {
    server.use(
      rest.get('/commands/recent', (_req, res, ctx) => {
        return res.once(ctx.status(500))
      })
    )

    try {
      await getRecentCommands(params)
    } catch (error) {
      expect(error).toBeDefined()
    }
  })
})
