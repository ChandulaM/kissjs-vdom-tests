import { assert } from 'chai'
import { diff } from '../../main/diff'
import { div, p, section, text } from '../../main/elements'
import { NodeCache, NodeType, PatchType } from '../../main/types'
import { id, AttrType } from '../../main/attributes'
describe('diff', () => {
    it('should return an empty array for identical nodes', async () => {
        const oldNode = div([], [])
        const newNode = div([], [])
        const nodeCache = new NodeCache()
        const patches = diff(oldNode, newNode, nodeCache)
        assert.deepEqual(patches, [])
    })
    it('should correctly diff adding attributes to node', async () => {
        const oldNode = div([], [])
        const newNode = div([id('test-div')], [])
        const nodeCache = new NodeCache()
        const patches = diff(oldNode, newNode, nodeCache)
        assert.deepEqual(patches, [{
            type: PatchType.PROPS,
            attributes: {
                'attr-id': {
                  type: AttrType.ATTRIBUTE,
                  name: 'id',
                  value: 'test-div',
                },
              },
            domNode: undefined,
        }])
    })
})