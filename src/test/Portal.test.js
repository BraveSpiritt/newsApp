import React, { useEffect } from 'react';
import '@testing-library/jest-dom'
import { createPortal } from 'react-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


const modalRoot = document.createElement('div');
modalRoot.setAttribute("id", 'modal-root');
document.body.appendChild(modalRoot);


const Modal = ({ onClose, children }) => {
    const el = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(el);
        return () => modalRoot.removeChild(el);
    })


    return createPortal(
        <div onClick={onClose}>
            <div onClick={e => e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        el
    )
};


describe("Portal", () => {
    it("modal shows the children and a close button", () => {
        const handleClose = jest.fn();
        const { getByText } = render(
            <Modal onClose={handleClose}>
                <div>My Portal</div>
            </Modal>
        );
        expect(getByText("My Portal")).toBeInTheDocument();
        userEvent.click(getByText(/close/i));
        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("should be unmounted", () => {
        const { getByText, unmount, queryByText } = render(
            <Modal>
                <div>My Portal</div>
            </Modal>
        );
        expect(getByText("My Portal")).toBeInTheDocument();
        unmount();
        expect(queryByText("My Portal")).not.toBeInTheDocument();
    })
});
