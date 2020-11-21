import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    justify-content: space-between;
`;

const ControlWrap = styled.section`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export { ListItem, ControlWrap };
