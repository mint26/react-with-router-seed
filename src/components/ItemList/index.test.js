import React from 'react';
import ItemList from './';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => { 
    const dummyItems = [
        {
            content : "<span>hello</span>"
        },
        {
            content : "<span>hello 2</span>"
        },
        {
            content : "<span>hello 3</span>"
        }
    ];
    const component = renderer.create(
    <ItemList items={dummyItems} itemCss="test-item" listCss="test-list"/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});