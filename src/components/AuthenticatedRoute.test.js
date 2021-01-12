import React from 'react';
import {shallow} from 'enzyme';
import AuthenticatedRoute from './AuthenticatedRoute';

describe('AuthenticatedRoute', () => {
    it('should render without errors', () => {
        const component = shallow(<AuthenticatedRoute/>)
        const wrapper = component.find('.AuthenticatedRoute')
        expect(wrapper.length).toBe(1)
    })
    it('should render Redirect', () => {
        const dummyUser = {id: 1}
        localStorage.setItem('currentUser', JSON.stringify(dummyUser))
        const component = shallow(<AuthenticatedRoute/>)
        const wrapper = component.find('.AuthenticatedRoute')
        expect(wrapper.text()).toMatch("<Route />");
    })
})