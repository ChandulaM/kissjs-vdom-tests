import { assert } from 'chai'
import { diff } from '../../main/diff'
import { div, label, p, section, text } from '../../main/elements'
import { NodeCache, NodeType, PatchType } from '../../main/types'
import { id, AttrType } from '../../main/attributes'

const FAKE_NODE: any = {}

describe('diff', () => {
    it('should return an empty array for identical nodes', async () => {
        const oldNode = div([], [])
        const newNode = div([], [])
        const nodeCache = new NodeCache()
        nodeCache.set(oldNode, FAKE_NODE)
        const patches = diff(oldNode, newNode, nodeCache)

        assert.deepEqual(patches, [])
    })

    it('should correctly diff appending a new child node', async () => {
        const oldNode = div([id('test-div')], [])
        const newNode = div([id('test-div')], [p([], [text('This is the new child')])])
        const nodeCache = new NodeCache()
        nodeCache.set(oldNode, FAKE_NODE)
        const patches = diff(oldNode, newNode, nodeCache)

        assert.deepEqual(patches, [{
            type: PatchType.APPEND,
            node: {
                type: NodeType.NODE,
                tagName: 'p',
                attributes: {},
                children: [
                    {
                        type: NodeType.TEXT,
                        value: 'This is the new child',
                    },
                ],
            },
            domNode: FAKE_NODE,
        }])
    })

    it('should correctly diff adding attributes to node', async () => {
        const oldNode = div([], [])
        const newNode = div([id('test-div')], [])
        const nodeCache = new NodeCache()
        nodeCache.set(oldNode, FAKE_NODE)
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
            domNode: FAKE_NODE,
        }])
    })

    it('should correctly diff replacing a child node', async () => {
        const prevChild = label([], [])
        const oldNode = div([id('test-div')], [prevChild])
        const newNode = div([id('test-div')], [p([], [text('This is the new child')])])
        const nodeCache = new NodeCache()
        nodeCache.set(prevChild, FAKE_NODE)
        nodeCache.set(oldNode, FAKE_NODE)
        const patches = diff(oldNode, newNode, nodeCache)

        assert.deepEqual(patches, [{
            type: PatchType.REPLACE,
            node: {
                type: NodeType.NODE,
                tagName: 'p',
                attributes: {},
                children: [
                    {
                        type: NodeType.TEXT,
                        value: 'This is the new child',
                    },
                ],
            },
            domNode: FAKE_NODE,
        }])
    })

    it('should correctly diff replacing a text node', async () => {
        const prevChild = text('This is the old text')
        const oldNode = div([id('test-div')], [prevChild])
        const newNode = div([id('test-div')], [text('This is the new text')])
        const nodeCache = new NodeCache()
        nodeCache.set(prevChild, FAKE_NODE)
        nodeCache.set(oldNode, FAKE_NODE)
        const patches = diff(oldNode, newNode, nodeCache)

        assert.deepEqual(patches, [{
            type: PatchType.TEXT,
            value: 'This is the new text',
            domNode: FAKE_NODE,
        }])
    })

    it('should correctly diff removing a child node', async () => {
        const prevChild = p([], [text('This is the old child')])
        const oldNode = div([id('test-div')], [prevChild])
        const newNode = div([id('test-div')], [])
        const nodeCache = new NodeCache()
        nodeCache.set(prevChild, FAKE_NODE)
        nodeCache.set(oldNode, FAKE_NODE)
        const patches = diff(oldNode, newNode, nodeCache)

        assert.deepEqual(patches, [{
            type: PatchType.REMOVE,
            domNode: FAKE_NODE,
        }])
    })
})