import React, { useCallback } from 'react';
import { toast } from 'react-toast';
/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';
import { FiTrash2, FiCheck, FiX, FiLoader } from "react-icons/fi";
import { deleteStopwatch } from '../services';
import { ButtonIcon } from '../components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/**
 * @param {Object} props
 * @param {'medium' | 'large'} props.size
 */
const DeleteStopwatchWrapper = styled.div`
    display: flex;
    width: 100%;
    font-size: ${({ size }) => (size === 'large' ? 'var(--font-size-extra-large)' : 'var(--font-size-normal)')};
    justify-content: ${({ size }) => (size === 'large' ? 'space-around' : 'flex-end')};
`;

/**
 * @param {Object} props
 * @param {number} props.id
 * @param {'medium' | 'large'} props.size
 * @param {Function} props.onDelete
 */
export default function DeleteStopwatch({ id, onDelete, size = 'medium' }) {
    const [isConfirm, setIsConfirm] = React.useState(false);
    const [isDeleting, setIsDeleting] = React.useState(false);
    
    const shouldShowTrashIcon = !isDeleting && !isConfirm;
    const shouldShowConfirmIcons = !isDeleting && isConfirm;

    const toggleConfirm = () => {
        setIsConfirm(oldState => !oldState)
    };

    const deleteHandler = useCallback(() => {
        setIsDeleting(true);
        deleteStopwatch(id)
            .then(onDelete)
            .catch((error) => {
                toast.error(error);
            })
            .finally(() => {
                setIsDeleting(false);
            });
    });

    return (
        <DeleteStopwatchWrapper size={size}>
            {isDeleting && <FiLoader css={css`animation: ${spinAnimation} 1s linear infinite;`} />}
            {shouldShowTrashIcon && (
                <ButtonIcon theme="danger" onClick={toggleConfirm}>
                    <FiTrash2 />      
                </ButtonIcon>
            )}
            {shouldShowConfirmIcons && (
                <>
                    <ButtonIcon theme="success" onClick={deleteHandler}>
                        <FiCheck />      
                    </ButtonIcon>
                    <ButtonIcon theme="danger" onClick={toggleConfirm}>
                        <FiX />      
                    </ButtonIcon>
                </>
            )}
        </DeleteStopwatchWrapper>
    )
}