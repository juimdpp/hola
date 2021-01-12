import React from 'react';
import { shallow } from 'enzyme';
import WriteArticle from './WriteArticle';

describe('<WriteArticle', () => {
    it('should render', () => {
        const component = shallow(<WriteArticle/>)
        console.log(component.debug());
        console.log(component.get(0))
        const wrapper = component.find(".WriteArticle")
        expect(wrapper.length).toBe(1)
    })
    it('should call changeHandler', () => {
        const onChange = jest.fn();
        const component = shallow(<WriteArticle event={onChange}/>)
        const wrapper = component.find("#article-title-input")
        wrapper.simulate('change', {target: {value: {onChange}}})
        expect(onChange).toHaveBeenCalledTimes(1)
    })
})