# Unit Testing Guide

Table of Contents:

* [Jest](#jest)

### Jest

Below is a generic structure for all component tests:

**Testing Structure**

```
describe('Component Test', () => {
 
    describe('Component State Test', () => {
        it('Should have the correct state', () => {
            // Test state here
        });
    });
 
    describe('Component Props Test', () => {
        it('Should have the correct set of Props', () => {
            // Test Props Here
        });
    });
    describe('Component Actions Test', () => {
        it('Should have the correct set of actions', () => {
            // Test Actions Here
        });
    });
 
    describe('Component Elements Test', () => {
        it('Should contain two elements', () => {
            expect(wrapper.find('element').length).toEqual(2);
        });
        describe('Component Card Tests', () => {
            it('Should contain this element', () => {
                expect(wrapper.find('#someId').exists()).toBe(true);
            });
            it('Should contain this element', () => {
                expect(wrapper.find('#anotherId').exists()).toBe(true);
            });
        });
    });
});
```

Below is a generic structure for all Redux Action tests (note that these will vary widely based on what your actions contain):

**Actions Testing Structure**

```
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actionName from  './actionName';
 
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
 
 
describe('Action Name', () => {
    const payload = {
        showPage: true,
        showName: false
        default_organization: '',
    };
    beforeEach(() => {
        fetch.resetMocks();
    });
 
    describe('Action function name', () => {
        it('Should dispatch ACTION_NAME_1', () => {
            const store = mockStore({});
            const actions = store.getActions();
            store.dispatch(actionName.actionNameFunction('test'));
            const expectedPayload = {applications: 'test', type:'ACTION_NAME_1'};
            expect(actions).toEqual([expectedPayload]);
        });
            //Test each action
 
 
    });
    describe('Thunk functions', () => {
        it('should post updated user preferences to the api', () => {
            fetch.mockResponse(JSON.stringify({test: 'test'}), {status: 200});
 
            const store = mockStore({});
            const actions = store.getActions();
            const mockactionNameAction = {
                'actionName': {
                    showPage: true,
                    showName: false,
                    'default_organization': '',
                     
                },
                'type': 'ACTION_NAME_1'
            };
 
            return store.dispatch(actionName.actionNameFunction(payload))
                .then(() => {
                expect(actions).toEqual([mockactionNameAction]);
                });
        });
 
        it('should post an error if the response status is > 300', () => {
            fetch.mockResponse(JSON.stringify({testError: 'test error'}), {status: 301});
 
                const store = mockStore({});
 
                return store.dispatch(actionName.actionNameFunction(payload))
                    .catch((err) => {
                    expect(err).toEqual({testError: 'test error'});
                    });
        });
            //Test each Thunk
    });
});
```

Below is a generic structure for all Redux Reducer tests (note that):

**Reducer Testing Structure**

```
import reducerName from './reducerName';
import * as actions from '../actions/actionName';
 
describe('Reducer Name', () => {
    it('Should have a default state', () => {
        const action = {type: 'UNSPECIFIED_ACTION', blah: 'blah'};
        const newState = reducerName({}, action);
        expect(newState).toEqual({});
    });
 
    it('should handle REDUCER_CASE_1', () => {
        const initialState = {
            showPage: true,
            showName: false,
            default_organization: '',
        };
 
        const newPreference = {
            showPage: false,
            showName: true,
            default_organization: 'LnP',
        };
 
        //Begin Redux "Mock" Process
        const action = actions.updateUserPreferencesSuccess(newPreference);
        const newState = userPreferencesReducer(initialState, action);
        expect(newState).toEqual(newPreference);
    });
 
    it('should handle REDUCER_CASE_2', () => {
        const updatedPreference = {
            showPage: false,
            showName: true,
            default_organization: 'LnP',
        };

        const action = actions.actionNameFunction(updatedPreference);
        const newState = reducerName([], action);
        expect(newState).toEqual(updatedPreference);

    });
    //Test all reducer cases
});
```

For more examples please see the Redux Testing documentation: [Redux Recipes](http://redux.js.org/docs/recipes/WritingTests.html).