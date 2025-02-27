import styled from '@emotion/styled';

/**
 * @param {Object} props
 * @param {boolean} [props.isFaded=false]
 */
const ListItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-gray-700);
  width: 100%;
  color: ${({ isFaded }) => (isFaded ? 'var(--color-gray-700)' : 'var(--color-light)')};
  padding: var(--spacing-1) 0;

  &:first-of-type {
    border-top: 1px solid var(--color-gray-700);
  }
`;

export default ListItem;
