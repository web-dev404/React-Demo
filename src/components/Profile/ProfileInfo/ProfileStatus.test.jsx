import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state)", () => {
        const component = create(<ProfileStatus status="Hello Imron"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Hello Imron");
    });

    test("after initialization <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="Hello Imron"/>);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after initialization <input> shouldn't be displayed with correct status", () => {
        const component = create(<ProfileStatus status="Hello Imron"/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow;
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Hello Imron"/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('Hello Imron');
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Hello Imron" updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});