import { add } from '../src/example';

import * as chai from 'chai';
import * as mocha from 'mocha';

const expect = chai.expect;

describe('Example Tests', () => {

  it('should be able to add', () => {
    expect(add(3, 4)).to.equal(7);
  });

});
