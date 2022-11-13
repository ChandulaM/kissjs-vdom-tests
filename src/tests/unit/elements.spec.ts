import { assert } from 'chai'
import { node, text } from '../../main/elements'
import { NodeType } from '../../main/types'
import { id, AttrType } from '../../main/attributes'

describe('node', () => {
    it('should correctly construct a node object', async () => {
        assert.deepEqual(node('div', [], []), {
            type: NodeType.NODE,
            tagName: 'div',
            attributes: {},
            children: [],
        })
    })
})

describe('node with id', () => {
    it('should correctly construct a node object with id=test', async () => {
        assert.deepEqual(node('div', [id('test')], []), {
            type: NodeType.NODE,
            tagName: 'div',
            attributes: {
                'attr-id': {
                    type: AttrType.ATTRIBUTE,
                    name: 'id',
                    value: 'test',
                },
            },
            children: [],
        })
    })
})

describe('text', () => {
    it('should correctly construct a text object', async () => {
        assert.deepEqual(text('This is plain text'), {
            type: NodeType.TEXT,
            value: 'This is plain text'
        })
    })
})

describe('div with nested text', () => {
    it('should correctly construct a div with a child of text', async () => {
        assert.deepEqual(node('div', [], [text('This is plain text nested in a div')]), {
            type: NodeType.NODE,
            tagName: 'div',
            attributes: {},
            children: [{
                type: NodeType.TEXT,
                value: 'This is plain text nested in a div'
            }],
        })
    })
})

describe('div with nested p tag', () => {
    it('should correctly construct a div with a child of <p>', async () => {
        assert.deepEqual(node('div', [], [
            node('p', [], [text('This is the <p> text')])]), {
            type: NodeType.NODE,
            tagName: 'div',
            attributes: {},
            children: [{
                type: NodeType.NODE,
                tagName: 'p',
                attributes: {},
                children: [{
                    type: NodeType.TEXT,
                    value: 'This is the <p> text'
                }]
            }],
        })
    })
})