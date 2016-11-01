import jsdomify from 'jsdomify';
import * as Enzyme from 'enzyme';
import chai from 'chai';

jsdomify.create();

// After JSDOM
const React = require('react');

const { expect } = chai;

export { React, Enzyme, expect };
