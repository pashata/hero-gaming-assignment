import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

/**
 * Styled Link component inside ListItem
 * 
 * @param {Object} props
 * @param {boolean} [props.isFaded=false] - Whether the link should be faded.
 */
const StyledLink = styled(Link)`
    display: block;
    color: inherit;
    text-decoration: none;
    width: 100%;
`;

export default StyledLink;
