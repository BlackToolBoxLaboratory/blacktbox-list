import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import List from '../module/index.js';

var testProps = {
  'listArr': [
  {
    'name': 'Tree: 1',
    'children': [
    {
      'name': 'Tree: 1-1'
    },
    {
      'name': 'Tree: 1-2',
      'children': [
      {
        'name': 'Tree: 1-2-1'
      },
      {
        'name': 'Tree: 1-2-2'
      }]
    },
    {
      'name': 'Tree: 1-3'
    }]
  },
  {
    'name': 'Tree: 2',
    'children': [
    {
      'name': 'Tree: 2-1',
      'children': [
      {
        'name': 'Tree: 2-1-1',
        'children': [
        {
          'name': 'Tree: 2-1-1-1'
        }]
      }]
    },
    {
      'name': 'Tree: 2-2'
    }]
  }]
};

configure({ adapter: new Adapter() });

describe('Test Render List ... ', () => {
  var render;
  test('With mount', () => {
    render = mount(<List className='testCSS'/>);
    render = mount(<List {...testProps}/>);
  });
  test('Test styleObj', () => {
    testProps['styleObj'] = {
      'item-content': {
        'height': '90px'
      },
      'layer-0': {
        'background-color': '#85a5ff'
      },
      'layer-1': {
        'background-color': '#adc6ff'
      }
    };
    render.setProps(testProps);
  });
  test('Test itemOnClickFn', () => {
    render.find('.item-content').first().simulate('click');
  });
});
