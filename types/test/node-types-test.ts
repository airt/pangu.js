/**
 * used by typescript compiler to check type definitions.
 *
 * > tsc types/test/*.ts && mocha types/test/*.js && rm types/test/*.js
 *
 * need: tsc, mocha, @types/node, @types/mocha.
 */

import { join } from 'path'
import { assert } from 'chai'
import { readFileSync } from 'fs'

// imports entirely
import * as pangu from 'pangu'

// imports partly
import { spacing, spacingFileSync } from 'pangu'

const fixtureDir =  join(__dirname, '../../test/_fixture')
const testTextFile = join(fixtureDir, 'test_file.txt')
const expectedFile = join(fixtureDir, 'test_file.expected.txt')
const testText = readFileSync(testTextFile).toString()
const expected = readFileSync(expectedFile).toString()

describe('Pangu', () => {
  describe('spacing()', () => {
    it('has correct type', () => {
      assert.equal(pangu.spacing(testText), expected)
      assert.equal(spacing(testText), expected)
    })
  })
  describe('spacingText()', () => {
    it('has correct type', (done) => {
      pangu.spacingText(testText, (err, text) => {
        assert.isNull(err)
        assert.equal(text, expected)
        done()
      })
    })
  })
})

describe('NodePangu', () => {
  describe('spacingFile()', () => {
    it('has correct type', (done) => {
      pangu.spacingFile(testTextFile, (err, text) => {
        assert.isNull(err)
        assert.equal(text, expected)
        done()
      })
    })
  })
  describe('spacingFileSync()', () => {
    it('has correct type', () => {
      assert.equal(pangu.spacingFileSync(testTextFile), expected)
      assert.equal(spacingFileSync(testTextFile), expected)
    })
  })
})
