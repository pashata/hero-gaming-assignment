import styled from '@emotion/styled';

const themeColors = {
    default: 'var(--color-light)',
    danger: 'var(--color-error)',
    success: 'var(--color-success)',
};

/**
 * @param {Object} props
 * @param {'default' | 'danger' | 'success'} props.theme
 */
const ButtonIcon = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => themeColors[theme] || themeColors.default};
`;

export default ButtonIcon;