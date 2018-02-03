import jsdomify from 'jsdomify';
import Enzyme from 'enzyme';
import chai from 'chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

jsdomify.create();

// After JSDOM
const React = require('react');

const { expect } = chai;

export { React, Enzyme, expect };
