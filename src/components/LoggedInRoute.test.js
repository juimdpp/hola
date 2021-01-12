import React from 'react';
import {shallow} from 'enzyme';
import LoggedInRoute from './LoggedInRoute';

describe('LoggedInRoute', () => {
    it('should render without errors', () => {
        const component = shallow(<LoggedInRoute/>)
        const wrapper = component.find('.LoggedInRoute')
        expect(wrapper.length).toBe(1)
    })
    it('should render Redirect', () => {
        const dummyUser = {id: 1}
        localStorage.setItem('currentUser', JSON.stringify(dummyUser))
        const component = shallow(<LoggedInRoute/>)
        const wrapper = component.find('.LoggedInRoute')
        expect(wrapper.text()).toMatch("<Redirect />");
    })
})